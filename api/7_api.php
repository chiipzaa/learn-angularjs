<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$data = json_decode( file_get_contents("php://input") );


            try{
                //connect ฐานข้อมูล 
                $db = new PDO("mysql:host=127.0.0.1;dbname=ngapp;", 'sa', 'sa',array(
                PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",));
                }
                catch (Exception $e){
                echo 'error:'.$e->getMessage();
                }




$obj = $db->query("select * from members ", PDO::FETCH_OBJ);

$json_data = [];

foreach ($obj as $k) {
    array_push($json_data, $k);
}
$txt = json_encode($json_data);
print($txt);





//$count = $stm->rowCount();

//$r=['row'=>$count];

//$txt = json_encode($r);

//print($txt);


?>