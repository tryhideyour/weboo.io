<?php 
session_start();

if($_SESSION['user_id']) {
  header("Location: ./view/dashboard.php");
} else {
  header("Location: ./view/auth.php");
}