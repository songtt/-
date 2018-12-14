<?php
/**
 *  游戏场景后台   （包含主游戏场景和每日活动场景）
 */
namespace app\api\controller;

use think\Controller;
use think\Loader;
use think\Request;

class Index extends controller
{

	//构造函数
    public function _initialize()
    {
        parent::_initialize();
        date_default_timezone_set('PRC');//校正时间
    }

	/*
	 * 用户登录
	 */
	public function login()
	{
		$params = Request::instance()->param();
		$code = $params['code'];
		$appid = 'wx90b873345652d604';
	    $secret = '130636993ba8c031c3b1b1ad33f594b5';
	    $url = 'https://api.weixin.qq.com/sns/jscode2session?appid='.$appid.'&secret='.$secret.'&js_code='.$code.'&grant_type=authorization_code';
	    $res = $this->httpRequest($url);
	    //用户登录处理
	    if(!empty($res)&&isset($res['openid'])){
	        $id = $this->updateInfo($res);
	    }else{
	        $id = $res;
	    }
	    header('Content-Type:application/json; charset=utf-8');
	    echo json_encode($id);
	}
	/*
	 * 管理员登录后台
	 */
	public function updateInfo($data)
	{
		$get_user = Loader::model('Index')->getusers($data);
		if(empty($get_user)&&!empty($data['openid'])){
			$inster_user = Loader::model('Index')->insterUser($data);
			$id['userId'] = $inster_user;
		}else{
			$id['userId'] = (string)$get_user['id'];
		}
		return $id;
	}


	/*
	 * 管理员登录后台
	 */

	public function updateName()
	{
		$params = Request::instance()->param();
		$res = Loader::model("Index")->nameUpdate($params);
	}

	/**
	 * 获取用户信息
	 */
	public function getuserinfo()
	{
		$params = Request::instance()->param();
		$userId = $params['userId'];
		$data = Loader::model('Index')->getUserInfo($userId);
		//利息计算
		$daya = strtotime($data['deposit_time']);
		$day = strtotime(date("Y-m-d"));
		if(!empty($data['deposit_time']) && $daya < $day){
			$num =  ($day - $daya) / 86400;
			$interest = $data['deposit'] * 0.01 * $num;
		}else{
			$interest = 0;
		}
	    $res = array(
	        'userId'=>(string)$data['id'],    //用户id
	        'nickName'=>$data['nickName'],    //用户昵称
	        'avatarUrl'=>$data['avatarUrl'],    //用户头像
	        'money'=>(string)$data['money'],  //金币数
	        'land'=>(string)$data['land'],    //大陆等级
	        'house'=>(string)$data['house'],  //房屋等级
	        'house_price'=>(string)$data['house_price'],  //房屋价钱
	        'house_loss'=>(string)$data['house_loss'],  //房屋折损
	        'friendsId'=>$data['friendsId'],  //好友
	        'attack_card'=>(string)$data['attack_card'],  //攻击卡
	        'defense_card'=>(string)$data['defense_card'],//防御卡
	        'defense'=>(string)$data['defense'], //是否使用防御卡
	        'defense_time'=>(string)$data['defense_time'], //防御卡时效
	        'earth_card'=>(string)$data['earth_card'],    //地震卡
	        'upgrade_card'=>(string)$data['upgrade_card'],//房屋升级卡
	        'rock_card'=>(string)$data['rock_card'],   //陨石卡
	        'save_card'=>(string)$data['save_card'],   //普渡众生卡
	        'interest_card'=>(string)$data['interest_card'],//利息翻倍卡
	        'deposit'=>(string)$data['deposit'],            //存款
	        'interest'=>(string)$interest,   //利息
    	);
    	header('Content-Type:application/json; charset=utf-8');
	    echo json_encode($res);
	}

	//退出游戏或者离线状态下更新数据库
	public function updateApi()
	{
		//获取参数
		$params = Request::instance()->param();
		$data = Loader::model('Index')->updateFun($params);
		header('Content-Type:application/json; charset=utf-8');
		echo json_encode($data);
	}


	//好友互动接口请求
	public function updateParam()
	{
		//获取参数
		$params = Request::instance()->param();
		$data = Loader::model('Index')->updateParFun($params);
		header('Content-Type:application/json; charset=utf-8');
		echo json_encode($data);
	}

	//授权接口
	public function authApi(){
		//获取参数
		$params = Request::instance()->param();
		$map = array(
			'nickName' => $params['nickName'],
			'avatarUrl' => $params['avatarUrl']
		);
		$where['id'] = $params['userId'];
		$res = Loader::model('Index')->updateAuth($where,$map);
	}


	public function httpRequest($url)
	{
	    $ch = curl_init();
	    curl_setopt($ch,CURLOPT_URL, $url);
	    curl_setopt($ch,CURLOPT_HEADER, 0);
	    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
	    $res = curl_exec($ch);
	    curl_close($ch);
	    return json_decode($res, true);
	}
}
