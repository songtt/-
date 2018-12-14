<?php
/**
 *  主游戏场景的后台数据
 */

namespace app\api\model;
use think\Model;
use think\Db;


class Index extends Model
{
	
	//查询数据库中是否存在当前用户数据
	public function getusers($data)
	{
		$sql = 'SELECT id,openid FROM rm_users WHERE openid=?';
		$res = Db::query($sql,[$data['openid']]);
		if (empty($res['0'])) {
			return '';
		}else{
			return $res[0];
		}
	}

	//将数据插入数据库
	public function insterUser($data)
	{
		$date = array(
			'openid' => $data['openid'],
			'nickName' => '',
			'avatarUrl' => '',
			'password' => 'sop/qoSqiJY',
			'money' => '5000',
			'land' => '1',
			'house' => '1',
			'house_price' => '50000',
			'house_loss' => '0',  //折损  0为满级
			'ctime' => time()
		);
        $res = Db::name('rm_users')->insert($date);
        $userId = Db::name('rm_users')->getLastInsID();
        return $userId;
	}

	//查询用户信息
	public function getUserInfo($userId)
	{
		$sql = 'SELECT id,nickName,money,avatarUrl,land,house,house_price,house_loss,friendsId,attack_card,defense_card,earth_card,upgrade_card,rock_card,save_card,interest_card,deposit,deposit_time,defense,defense_time FROM rm_users WHERE id=?';
		$res = Db::query($sql,[$userId]);
		return $res[0];
	}

	//退出游戏  更新数据api
	public function updateFun($params)
	{
		$id = array(
			'id'=> $params['userId']
		);
		$data = array(
			'land' => $params['land'],
			'house' => $params['house'],
			'money' => $params['money'],
			'nickName' => $params['nickName'],
			'attack_card' => $params['attack_card'],
			'defense_card' => $params['defense_card'],
			'defense' => $params['defense'],
			'defense_time' => isset($params['defense_time'])?$params['defense_time']:'',
			'deposit' => $params['deposit'],
			'deposit_time' => $params['deposit_time'],
			'earth_card' => $params['earth_card'],
			'house_loss' => $params['house_loss'],
			'house_price' => $params['house_price'],
			'interest_card' => $params['interest_card'],
			'rock_card' => $params['rock_card'],
			'save_card' => $params['save_card'],
			'upgrade_card' => $params['upgrade_card']
		);
		$res = Db::name('rm_users')->where($id)->update($data);
		return $res;
	}

	//互动 更新数据api
	public function updateParFun($params)
	{
		$id = array(
			'id'=> $params['userId']
		);
		$data = array(
			$params['name'] => $params['value'],
		);
		$res = Db::name('rm_users')->where($id)->update($data);
		return $res;
	}

	//更新用户名称和头像
	public function nameUpdate($params)
	{
		$id = array(
			'id'=> $params['userId']
		);
		$data = array(
			'nickName' => $params['nickName'],
			'avatarUrl' => $params['avatarUrl'],
		);
		$res = Db::name('rm_users')->where($id)->update($data);
		return $res;
	}
}