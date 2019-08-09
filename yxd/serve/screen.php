<?php

$con = mysqli_connect("127.0.0.1", "root", "", "showlist");
# 查询获取表中的所有内容


// 查询表中的前20条数据
$page = $_REQUEST["page"] * 20;
$type=  $_REQUEST["type"];

if($type == "default")
{
  $sql = "SELECT * FROM `list` order by `gid` limit $page,20";

}else if($type == "priceA")
{
  // 按照价格从高到低排序
  $sql = "SELECT * FROM `list` ORDER BY `price` DESC limit $page,20";

} else if ($type == "priceB") {

  // 按照价格从低到高进行排序
  $sql = "SELECT * FROM `list` ORDER BY `price` ASC limit $page,20";
}

// 查询表中的数据(按照某个字段排序)
$result = mysqli_query($con,$sql);

// 把数组中的数组转换为数组
echo json_encode(mysqli_fetch_all($result, MYSQLI_ASSOC), true);

?>