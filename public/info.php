<?php
// $client = $_SERVER['HTTP_USER_AGENT'];
// var_dump($client);exit;

$redis = new Redis();
$redis->connect('127.0.0.1', 6379);
$keys = $redis->KEYS('*');
var_dump($keys);


$redis->flushdb();

$key = $redis->KEYS('*');
var_dump($key);
exit;