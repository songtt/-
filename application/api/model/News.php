<?php
/**
 *  消息功能
 */

namespace app\api\model;
use think\Model;
use think\Db;


class News extends Model
{
	//查询消息
	public function newsInfo($params)
	{
		$sql = 'SELECT id,userId,coustId,do_type,do_num,status FROM rm_news WHERE userId=? AND coustId=? AND do_type=? AND status=0';
		$res = Db::query($sql,[$params['userId'],$params['coust'],$params['do']]);
		return $res;

	}
	//将不在线情况下的好友互动存入数据库
	public function newInster($params)
	{
		$sql = 'INSERT INTO rm_news(userId,coustId,do_type,do_num,status) VALUES(?,?,?,?,?)';
		$res = Db::query($sql,[$params['userId'],$params['coust'],$params['do'],1,0]);
		return $res;
	}

	//更新攻击次数
	public function newUpdate($id)
	{
		$sql = 'UPDATE rm_news SET do_num=do_num+1 WHERE id=?';
		$res = Db::query($sql,[$id]);
		return $res;
	}

	//展示用户互动的消息
	public function allNews($id)
	{
		$sql = 'SELECT id,userId,coustId,do_type,do_num,status FROM rm_news WHERE coustId=? AND status=0';
		$res = Db::query($sql,[$id]);
		return $res;
	}

	//展示用户互动的消息
	public function updateStatus($id)
	{
		$sql = 'UPDATE rm_news SET status=1 WHERE id=?';
		$res = Db::query($sql,[$id]);
		return $res;
	}

}