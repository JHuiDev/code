<?php
$servername = "localhost";
$username = "root";
$password = '';
$dbname = "myDB";
$conn = new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error){
    die("数据库连接失败" . $conn->connect_error);
}
// --NOT NULL不可为空,必须有值--timestamp时间戳
// 不可写注释
$sql = "UPDATE MyGuests SET lastname = 'ken' WHERE firstname='Mary' ";
$a =mysqli_query($conn,$sql);
if($a){
    echo "跟新成功";
}else{
    echo "更新失败";
}
$conn->close();