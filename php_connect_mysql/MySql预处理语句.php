<?php
// 预处理语句用于执行多个相同的 SQL 语句，并且执行效率更高。
// 预处理语句的工作原理如下： 
//1. 预处理:创建SQL语句模板并发送到数据库.预留的值使用参数"?"标记.例如:
// INSERT INTO MyGuests (firstname, lastname, email) VALUES(?, ?, ?)
// 2.数据库解析,编译,对SQL语句的模板进行巡查优化,并存储结果不输出.
// 3.执行:最后,将引用绑定的值传递给参数("?"标记),数据库执行语句.应用可以多次执行语句,如果参数的值不一样.
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";
 
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
 
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}
 
// 预处理及绑定
$stmt = $conn->prepare("INSERT INTO MyGuests (firstname, lastname, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $firstname, $lastname, $email);
 
// 设置参数并执行
$firstname = "John";
$lastname = "Doe";
$email = "john@example.com";
$stmt->execute();
 
$firstname = "Mary";
$lastname = "Moe";
$email = "mary@example.com";
$stmt->execute();
 
$firstname = "Julie";
$lastname = "Dooley";
$email = "julie@example.com";
$stmt->execute();
 
echo "新记录插入成功";
 
$stmt->close();
$conn->close();
?>