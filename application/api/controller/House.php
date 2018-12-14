<?php
/**
 *  房屋场景 （包含好友房屋、自己房屋、排行榜的后台数据交互）
 */
namespace app\api\controller;

use think\Controller;
use think\Loader;
use think\Request;

class House extends controller
{
	private $data = array();//好友排行数据
	private $world_data = array();//好友排行数据

	//好友房屋
	public function friends()
	{
		//前台请求后台的这个接口 携带参数是好友的id参数
		$params = Request::instance()->param();
		$friendId = $params['friendId'];
		//获取好友的信息
		$getFriend = Loader::model('House')->getFriendInfo($friendId);
		header('Content-Type:application/json; charset=utf-8');
		echo json_encode($getFriend);
	}

	//好友排行榜
	public function friendsRank()
	{
		//前台请求后台好友排行榜接口 携带参数是当前用户id、好友id参数
		$params = Request::instance()->param();
		$userId = $params['userId'];
		if(empty($params['friendsId'])){
			$params['friendsId'] = 0;
		}
		$friendsId = $params['friendsId'];  //包含自己 
		//获取好友排行榜数据  房子排序
		$getRank = Loader::model('House')->getFriendRank($friendsId);
		if(!empty($getRank)){
			$houseRes = $this->_houseRank($getRank,"money",SORT_DESC,"friend");
			$this->data = array_merge($this->data,$houseRes);
			foreach ($this->data as $key => $value) {
				$this->data[$key]['rank'] = $key+1;
			}
		}
		header('Content-Type:application/json; charset=utf-8');
		echo json_encode($this->data);
	}
	//世界排行
	public function workRank()
	{
		//获取前100名
		$worldRank = Loader::model('House')->getWorldRank();
		//将同大陆同房屋的房子拿出以房屋折损排序
		$lossRank = $this->_houseRank($worldRank,"money",SORT_DESC,"world");
		//4.将同大陆同房屋同折损的房屋  按照金币数排序
		$this->world_data = array_merge($this->world_data,$lossRank);
		foreach ($worldRank as $key => $value) {
			$worldRank[$key]['rank'] = $key+1;
		}
		header('Content-Type:application/json; charset=utf-8');
		echo json_encode($worldRank);
	}

	//一级排序
	private function _rank($arrays,$sort_key,$sort_order=SORT_ASC,$sort_type=SORT_NUMERIC )
	{
		//按照大陆排序
        if(is_array($arrays)){   
            foreach ($arrays as $array){
                if(is_array($array)){  
                    $key_arrays[] = $array[$sort_key];   
                }else{   
                    return false;   
                }   
            }   
        }else{   
            return false;   
        }
        array_multisort($key_arrays,$sort_order,$sort_type,$arrays); 
        return $arrays;   
	}

	//二级排序
	private function _houseRank($arrays,$sort_key,$sort_order,$type)
	{
		$child = array();
		$parents = array(); 
		$num_key = 'house';
		$num = 0;
		$a = 1;
		$i = 0;
		//拿出相同大陆的数据
		foreach ($arrays as $key => $value) {
			if($num == 0){
				$num = $value[$num_key];
			}else{
				//如果本次的大陆等级  和上次的大陆等级相同 则拿出本次和上次的值
				if($num == $value[$num_key]){
					$child[$a-1] = $arrays[$key-1];
					$child[$a] = $arrays[$key];
					$a++;
				}else{
					$num = $value[$num_key];
				}
			}
		}

		foreach ($arrays as $key => $value) {
		    if(!in_array($value,$child)){
		        $parents[]=$value;
		    }
		}
		$child = $this->_rank($child,$sort_key,$sort_order);
		if($type == "friend"){
			$this->data = $parents;
		}else{
			$this->world_data = $parents;
		}
		return $child;
	}

	//更新房屋设损程度
	public function updateLoss()
	{
		$params = Request::instance()->param();
		$id = $params['coust'];
		switch ($params['do']) {
			case 'destroy':
				$loss = 1;
				break;
			
			default:
				$loss = 0;
				break;
		}
		$res = Loader::model('House')->updateHose($id,$loss);
		echo '折损更新成功';
	}

	//更新好友
	public function updateFriendId(){
		$params = Request::instance()->param();
		$userId = $params['userId'];
		$shareId = $params['shareId'];
		//获取当前玩家的好友id
		$user = Loader::model('House')->getUser($userId);
		$share = Loader::model('House')->getUser($shareId);
		//组装数据
		$userFid = $this->_getData($user,$shareId);
		$shareFid = $this->_getData($share,$userId);

		//更新数据库
		$res = Loader::model('House')->updateFid($userId,$shareId,$userFid,$shareFid);
		header('Content-Type:application/json; charset=utf-8');
		echo json_encode($userFid);
	}

	//组装数据
	private function _getData($param,$id){
		if($param['friendsId']){
			if(strpos($param['friendsId'],','.$id.',') !== false){ 
				//分享口进来的好友id已经存在
				$fid = $param['friendsId'];
			}else{
				$fid = $param['friendsId'].','.$id;
			}
		}else{
			$fid = $id;
		}
		return $fid;
	}
}

