<?php
// 读取指定字段的所有值
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";

$conn = new mysqli($servername,$username,$password,$dbname);

if($conn->connect_error){
    echo "链接失败" , $conn->connect_error;
}
$sql = "SELECT id, firstname, lastname FROM MyGuests";
$result = $conn->query($sql);

// 查询出的行数大于0,说明查询有结果
if($result->num_rows>0){
    while($row = $result->fetch_assoc()){
        echo "id:".$row["id"]."-Name:".$row["firstname"]."".$row["lastname"]."<br>";
    }
}else{
    echo "查询无有结果";
}

$conn->close();