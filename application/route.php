<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2018 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

return [
    // '__pattern__' => [
    //     'name' => '\w+',
    // ],
    // '[hello]'     => [
    //     ':id'   => ['index/hello', ['method' => 'get'], ['id' => '\d+']],
    //     ':name' => ['index/hello', ['method' => 'post']],
    // ],

    //模块通用
    'admin/:c/:f' => 'admin/:c/:f',
    'home/:c/:f' => 'home/:c/:f',
    'index/:c/:f' => 'index/:c/:f',
    //根目录   index板块
    '/' => 'index/Index/index',

    // 平台管理后台  admin板块
    'manage' => 'admin/index/login',


];
