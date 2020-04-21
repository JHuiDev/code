<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";
 
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} else {
    $sql = "INSERT INTO MyGuests(firstname, lastname, email)  VALUES(?, ?, ?)";
 
    // 为 mysqli_stmt_prepare() 初始化 statement 对象
    $stmt = mysqli_stmt_init($conn);
 
    //预处理语句
    if (mysqli_stmt_prepare($stmt, $sql)) {
        // 绑定参数
//         该函数绑定参数查询并将参数传递给数据库。第二个参数是 "sss" 。以下列表展示了参数的类型。 s 字符告诉 mysql 参数是字符串。
            // 可以是以下四种参数:
            // i - 整数
            // d - 双精度浮点数
            // s - 字符串
            // b - 布尔值
            //通过类型的判断可以减少SQL注入漏洞带来的风险。
        mysqli_stmt_bind_param($stmt, 'sss', $firstname, $lastname, $email);
 
        // 设置参数并执行
        $firstname = 'John';
        $lastname = 'Doe';
        $email = 'john@example.com';
        mysqli_stmt_execute($stmt);
 
        $firstname = 'Mary';
        $lastname = 'Moe';
        $email = 'mary@example.com';
        mysqli_stmt_execute($stmt);
 
        $firstname = 'Julie';
        $lastname = 'Dooley';
        $email = 'julie@example.com';
        mysqli_stmt_execute($stmt);
    }
}
?>