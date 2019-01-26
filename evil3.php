<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);
echo "1this is just forll the testu";
echo $file = $_GET['file'].'.php';
include($file);
echo $file;

