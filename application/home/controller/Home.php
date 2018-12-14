<?php
namespace app\home\controller;
use think\Controller;

class Home extends Controller
{
    public function index()
    {
        return $this->fetch('index');
    }

}
