<?php
/**
 * 房屋以及好友的后台数据
 */
namespace app\api\model;
use think\Model;
use think\Db;


class House extends Model
{
	//获取好友的信息
	public function getFriendInfo($friendId)
	{
		$sql = 'SELECT id,nickName,avatarUrl,land,house,house_loss,defense,defense_time FROM rm_users WHERE id=?';
		$res = Db::query($sql,[$friendId]);
		return $res[0];
	}

	//获取好友排行榜
	public function getFriendRank($id)
	{
		$sql = "SELECT id,nickName,avatarUrl,money,land,house,house_loss FROM rm_users WHERE id IN (".$id.") ORDER BY house DESC";
		$res = Db::query($sql);
		return $res;
	}

	//获取世界好友排行榜
	public function getWorldRank()
	{
		$sql = 'SELECT id,nickName,avatarUrl,money,land,house,house_loss FROM rm_users ORDER BY house DESC';
		$res = Db::query($sql);
		return $res;
	}

	//更新房屋折损程度
	public function updateHose($id,$loss)
	{
		$sql = 'UPDATE rm_users SET house_loss=house_loss+? WHERE id=?';
		$res = Db::query($sql,[$loss,$id]);
		return $res;
	}

	//获取当前玩家的好友id
	public function getUser($userId){
		$map = array(
			'id' => $userId,
		);
		$res = Db::name('rm_users')->where($map)->find();
		return $res;
	}

	//更新好友id
	public function updateFid($userId,$shareId,$userFid,$shareFid){
		//更新当前玩家的好友
		$sql = 'UPDATE rm_users SET friendsId=? WHERE id=?';
		$res = Db::query($sql,[$userFid,$userId]);

		//更新分享口用户的好友
		$egSql = 'UPDATE rm_users SET friendsId=? WHERE id=?';
		$egRes = Db::query($egSql,[$shareFid,$shareId]);
		return $res;
	}
}