<?php

$conn = new mysqli("localhost", "root", "", "portfolio_db");

$result = $conn->query("SELECT * FROM messages ORDER BY id DESC");

?>

<h1>All Messages</h1>

<table border="1" cellpadding="10">
<tr>
  <th>ID</th>
  <th>Name</th>
  <th>Email</th>
  <th>Message</th>
</tr>

<?php while($row = $result->fetch_assoc()) { ?>
<tr>
  <td><?php echo $row['id']; ?></td>
  <td><?php echo $row['name']; ?></td>
  <td><?php echo $row['email']; ?></td>
  <td><?php echo $row['message']; ?></td>
</tr>
<?php } ?>

</table>