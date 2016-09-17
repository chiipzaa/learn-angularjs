<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$postData = json_decode( file_get_contents("php://input") );


            try{
                //connect ฐานข้อมูล 
                $db = new PDO("mysql:host=127.0.0.1;dbname=ngapp;", 'sa', 'sa',array(
                PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",));
                }
                catch (Exception $e){
                echo 'error:'.$e->getMessage();
                }


$sql="replace into members(username,password,fname,lname,tel,email,imgUrl) values('$postData->username','$postData->password','$postData->fname','$postData->lname','$postData->tel','$postData->email','$postData->imgUrl')";


$stm = $db->prepare($sql);
$stm->execute();
$count = $stm->rowCount();


$r=['row'=>$count];
$txt = json_encode($r);

print($txt);


?>