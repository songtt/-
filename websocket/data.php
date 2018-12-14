<?php
/**
 *  热重启类
 */
class Classdata 
{
	function index(){
		echo "热重启"."\n";
		echo "33333";
	}

	function webMessage($server, $frame,$redis,$data){
	    $arr = array();
	    $return = '';

	    $jsonArr = json_decode($frame->data,true);
	    //共享域
	    $arr = array(
	        'fid' => $frame->fd, 
	        'do' => $jsonArr['do'], 
	        'userId' => $jsonArr['userId'], 
	        'coust' => $jsonArr['coust'],
	        'land' => isset($jsonArr['land'])?$jsonArr['land']:'',
	    );
	    $redis->HMSET('fid'.$frame->fd,$arr);


	    $keys = $redis->KEYS('*');
	    foreach ($keys as $k => $value) {
	        $get = $redis->HMGET($value,array('fid','do','userId','coust'));
	        if(!empty($get)){
	            $data[$value] = $get; 
	        }
	    }
	    var_dump($keys);

	    if (empty($arr['coust'])) {
	        $arr['line'] = "yes";
	        $return = json_encode($arr);
	        if($arr['do'] != 'rock'){
	            $server->push($frame->fd, json_encode($return));
	        }else{
	           //随机一个玩家使用陨石卡
	           $num = count($keys);
	           $rand = rand(0,$num-1);
	           $fid = $data[$keys[$rand]]['fid'];
	           $server->push($fid, json_encode($return));
	        }
	    }elseif($arr['coust'] == 'all'){//针对全部用户   地震卡和普渡众生卡
	        $arr['line'] = "yes";
	        foreach ($data as $key => $value) {
	            $return = json_encode($arr);
	            $server->push($value['fid'],json_encode($return));
	        }
	    }else{  
	        //针对某一个用户的互动
	        foreach ($data as $key => $value) {
	            if($arr['coust'] == $value['userId']){
	                $arr['line'] = "yes";
	                $return = json_encode($arr);
	                $server->push($value['fid'],json_encode($return));
	                $online = ''; //在线
	            }else{
	                $online = 'no'; //不在线
	            }
	        }
	        //不在线
	        if($online){
	            $arr['line'] = "no";
	            $return = json_encode($arr);
	            $server->push($frame->fd,json_encode($return));
	        }
	    }
	    $data = array();
	}

}