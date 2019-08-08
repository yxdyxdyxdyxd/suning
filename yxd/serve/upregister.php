<?php

$db = mysqli_connect("127.0.0.1","root","","suning");

$password = $_REQUEST["password"];
$phone = $_REQUEST["phone"];





//判断手机是否被注册
$res = "SELECT * FROM  register WHERE phone = '$phone'";
$cj = mysqli_query($db, $res);

$data = array("status"=>"", "msg"=>"", "data"=>"");
//如果查询的手机号已存在
if(mysqli_num_rows($cj) != "0"){
  $data["status"] = "error";
  $data["msg"] = "抱歉，手机号码已经被注册了！";
  echo json_encode($data,true);
}
//如果不存在
else{
  $sql = "INSERT INTO `register` (`phone`, `password`) VALUES ('$phone','$password')";
$result = mysqli_query($db, $sql);

if($result)
{
  $data["status"] = "success";
  $data["msg"] = "恭喜你，注册成功！";
}
echo json_encode($data,true);
}


// else{
//   $data["status"] = "error";
//   $data["msg"] = "抱歉，用户名或者手机号码已经被注册了！";
// }





?>