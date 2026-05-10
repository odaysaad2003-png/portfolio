<?php

header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "portfolio_db");
$conn->set_charset("utf8mb4");
if ($conn->connect_error) {
    echo json_encode([
        "status" => "error",
        "message" => "Database connection failed"
    ]);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST["name"] ?? '';
    $email = $_POST["email"] ?? '';
    $message = $_POST["message"] ?? '';

    if ($name == '' || $email == '' || $message == '') {
        echo json_encode([
            "status" => "error",
            "message" => "Missing fields"
        ]);
        exit;
    }

    $stmt = $conn->prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $message);

    if ($stmt->execute()) {
        echo json_encode([
            "status" => "success",
            "message" => "Message sent successfully 🚀"
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message" => "Insert failed"
        ]);
    }

    $stmt->close();
}

$conn->close();