<?php
$con = mysqli_connect("127.0.0.1", "root", "", "showlist");

/* 获取id和active */
$id = $_REQUEST["id"];
$num = $_REQUEST["num"];
$price=$_REQUEST["price"];
$total=$num*$price;
/* 编写sql语句 */
$sql = "UPDATE cat SET num=$num ,total=$total WHERE id=$id";
mysqli_query($con,$sql);

?>