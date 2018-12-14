<?php
/**
 *   消息接口  用于存放用户不在线的情况下的互动消息
 */
namespace app\api\controller;

use think\Controller;
use think\Loader;
use think\Request;
class News extends controller
{
	//被攻击玩家不在线 将数据存如消息盒子
	public function newInster()
	{
		//前台传递的参数  userId攻击方  do操作   coust被攻击方
		$params = Request::instance()->param();
		//1.先查询表中是否有同一个人多次攻击另一个人
		$res = Loader::model('News')->newsInfo($params);
		if(empty($res)){
			$res = Loader::model('News')->newInster($params);
		}else{
			$res = Loader::model('News')->newUpdate($res[0]['id']);
		}
		echo '玩家不在线,攻击消息已存入消息盒子';
	} 

	//展示消息
	public function showNews()
	{
		//前台传递的参数  当前登录的用户id
		$params = Request::instance()->param();
		$id = $params['userId'];
		$res = Loader::model('News')->allNews($id);
		foreach ($res as $key => $value) {
			switch ($value['do_type']) {
				case 'attack':
					$res[$key]['do_type'] = '攻击';
					break;
				case 'help':
					$res[$key]['do_type'] = '帮助整修';
					break;
			}
		}
		//-***********************************返回数据格式待定**************************************************
		echo json_encode($res);
	}


	//展示消息
	public function updateNews()
	{
		//前台传递的参数  当前登录的用户id
		$params = Request::instance()->param();
		$id = $params['id'];
		$res = Loader::model('News')->updateStatus($id);
		echo "信息更新成功";
		//-***********************************返回数据格式待定**************************************************
	}
}