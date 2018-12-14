<?php
//商户平台 管理员后台
return [
    
    // 默认控制器名
    'default_controller'    => 'Admin',
    // 默认操作名
    'default_action'        => 'admin',

    'url_route_on' => true,

    // 'app_trace'  => true,

    'view_replace_str'=>[
        '__STATIC__' => '/static',
        '__CSS__' => '/admin/css',
        '__JS__' => '/admin/js',
    ],

    //redis
    'redis_flag' => false,

    'file_upload' => './uploads/',

    
];