<?php

$con = mysqli_connect("127.0.0.1", "root", "", "showlist");
$sql = "SELECT cat.*,list.title,list.bigsrc FROM cat , list WHERE cat.id = list.gid";

$result = mysqli_query($con, $sql);
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($data, true);

?>