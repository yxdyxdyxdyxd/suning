<?php
$con = mysqli_connect("127.0.0.1", "root", "", "showlist");

/* 获取active */

$isActive = $_REQUEST["isActive"];
/* 编写sql语句 */
$sql = "UPDATE cat SET isActive=$isActive";
mysqli_query($con,$sql);
echo "ok"
?>