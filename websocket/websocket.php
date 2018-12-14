<?php
class TimerServer
{
    private $serv;
    public function __construct() {
        $this->serv = new swoole_server("0.0.0.0", 9502);
            $this->serv->set(array(
                'worker_num' => 1, //进程数
                'daemonize' => false,//不保护进程
                'max_request' => 10000,//最大请求数
                'dispatch_mode' => 2,
                'debug_mode'=> 1 ,
            ));
            $this->serv->on('WorkerStart', array($this, 'onWorkerStart'));
            $this->serv->on('Connect', array($this, 'onConnect'));
            $this->serv->on('Receive', array($this, 'onReceive'));
            $this->serv->on('Close', array($this, 'onClose'));
            $this->serv->on('Timer', array($this, 'onTimer'));
            $this->serv->start();
    }
    public function onWorkerStart( $serv , $worker_id) {

            // 在Worker进程开启时绑定定时器
            echo "onWorkerStart\n";
            //只有当worker_id为0时才添加定时器,避免重复添加
            if( $worker_id == 0 ) {
                $serv->addtimer(100);
                $serv->addtimer(500);
                $serv->addtimer(1000);
            }
    }

    public function onConnect( $serv, $fd, $from_id ) {
        var_dump(444);

            // echo "Client {$fd} connect\n";
    }
    public function onReceive( swoole_server $serv, $fd, $from_id, $data ) {
            // echo "Get Message From Client {$fd}:{$data}\n";
        var_dump(333);

    }
    public function onClose( $serv, $fd, $from_id ) {
        var_dump(222);

            // echo "Client {$fd} close connection\n";
    }
    public function onTimer($serv, $interval) {
        var_dump(111);
            // switch( $interval ) {
            //     case 500: { // 
            //         echo "500\n";
            //         break;
            //     }
            //     case 1000:{
            //         echo "1000\n";
            //         break;
            //     }
            //     case 100:{
            //         echo "100\n";
            //         break;
            //     }
            // }
    }
}
new TimerServer();