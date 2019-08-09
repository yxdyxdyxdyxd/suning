<?php
$con = mysqli_connect("127.0.0.1", "root", "", "showlist");

/* 获取id和active */
$id = $_REQUEST["id"];


/* 编写sql语句 */
$sql = "DELETE FROM cat WHERE id='$id'";
mysqli_query($con,$sql);

?>