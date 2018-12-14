<?php
set_time_limit(0);//永不超时

date_default_timezone_set('PRC');
//链接socket
$server = new swoole_websocket_server("0.0.0.0", 9502);

$redis = new Redis();
$redis->connect('127.0.0.1', 6379);

//热重启

$data = array();


$server->on('open', function($server, $req) {
    echo "connection open: {$req->fd}\n";
});

$server->on('message', function($server, $frame) {
    global $redis;
    global $data;

    //热重启
    require_once(__DIR__.'/data.php');
    $loadFile = new Classdata();


    $loadFile->index(); //测试
    $loadFile->webMessage($server, $frame,$redis,$data); //启动函数
    echo "received message: {$frame->fd}.{$frame->data}\n";
});


$server->on('close', function($server, $fd) {
    global $redis;
    $redis->DEL('fid'.$fd);
    echo "connection close: {$fd}\n";
});

$server->start();

