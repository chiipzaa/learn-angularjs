<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
$data=[['status'=>'ok',
'data'=>[
['fname'=> 'Suputtana','lname'=> 'Pingmaung',
'email'=> 'kukks205@udonsoft.com','imgUrl'=> 'img/1.jpg'], 
['fname'=> 'Jonh','lname'=> 'Dee',
'email'=> 'jonh@udonsoft.com','imgUrl'=> 'img/2.jpg'],
['fname'=> 'Mongkol','lname'=>'Salee',
'email'=> 'mm@udonsoft.com','imgUrl'=> 'img/3.jpg'], 
['fname'=> 'Sangwan','lname'=> 'Tong',
'email'=> 'sang@udonsoft.com','imgUrl'=> 'img/4.jpg'], 
['fname'=> 'Tongdee','lname'=> 'Dum',
'email'=> 'tong@udonsoft.com','imgUrl'=> '']
]]];
$result =json_encode($data);
print($result);
?>

