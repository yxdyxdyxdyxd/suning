<?php
$con=mysqli_connect("127.0.0.1", "root", "", "showlist");
// 检测连接
if (mysqli_connect_errno())
{
    echo "连接失败: " . mysqli_connect_error();
}
$sql = "SELECT * FROM cat WHERE isActive='1'";

$result = mysqli_query($con,$sql);

while($row = mysqli_fetch_array($result))
{
    echo $row['isActive'];
   
}
?>