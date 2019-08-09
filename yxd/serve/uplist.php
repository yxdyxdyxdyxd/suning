<?php
# 先连接数据库
$con = mysqli_connect("127.0.0.1","root","","showlist");
# 读取JSON文件的内容
$json = file_get_contents("list.json");
# 把JSON数据转换为数组
$data = json_decode($json,true);
# 把数据注入到数据中
for($i = 0;$i < count($data);$i++)
{
  $bigsrc = $data[$i]["bigsrc"];

  $smallsrc=json_encode($data[$i]["smallsrc"]);

//   $smallsrc=$data[$i]["smallsrc"];

  $price = $data[$i]["price"];
  $title = $data[$i]["title"];
  $info = $data[$i]["info"];

  $label=json_encode($data[$i]["label"]);

//   $label = $data[$i]["label"];
  $sql = "INSERT INTO `list` (`gid`, `bigsrc`, `smallsrc`, `price`, `title`,`info`,`label`) VALUES ('$i','$bigsrc', '$smallsrc', '$price', '$title', '$info', '$label')";
  mysqli_query($con,$sql);
}

?>