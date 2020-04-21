<?php
// where字句用于读取满足指定标准的记录
$conn = new mysqli('localhost','root','','myDB');

if($conn->connect_error === TRUE){
    echo "链接失败".$conn->connect_error;
}

$result = mysqli_query($conn,"SELECT * FROM MyGuests WHERE firstname = 'John'");

// 使用mysqli_fetch_array($result)和$result->fetch_assoc()都可以将集合放到数组并循环
while($row = $result->fetch_assoc()){
    echo $row['firstname'] . "".$row['lastname'];
    echo "<br>";
}

$conn->close();