<?php
# 先连接数据库
$con = mysqli_connect("127.0.0.1","root","","suning");
# 读取JSON文件的内容
$json = file_get_contents("homeshop.json");
# 把JSON数据转换为数组
$data = json_decode($json,true);
# 把数据注入到数据中
for($i = 0;$i < count($data);$i++)
{
  $src = $data[$i]["src"];
  $price = $data[$i]["price"];
  $icon = $data[$i]["icon"];
  $text = $data[$i]["text"];
  $sql = "INSERT INTO `homelist` (`src`, `price`, `icon`, `text`) VALUES ('$src', '$price', '$icon', '$text')";
  mysqli_query($con,$sql);
}

?>