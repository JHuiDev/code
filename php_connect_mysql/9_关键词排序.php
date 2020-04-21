<?php
// 使用age字段的值对数据表内的数据进行排序,也可以根据两列进行排序,当第一列相同时才会使用第二列进行排序.
$con=mysqli_connect("localhost","username","password","database");
// 检测连接
if (mysqli_connect_errno())
{
    echo "连接失败: " . mysqli_connect_error();
}

$result = mysqli_query($con,"SELECT * FROM Persons ORDER BY age");

while($row = mysqli_fetch_array($result))
{
    echo $row['FirstName'];
    echo " " . $row['LastName'];
    echo " " . $row['Age'];
    echo "<br>";
}

mysqli_close($con);
?>