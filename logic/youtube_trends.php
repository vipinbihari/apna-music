<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type: application/json");
$get="https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=50&videoCategoryId=10&key=AIzaSyD6zCD1iHr4VrAHelLSZpbcToqoRk0-iOQ";
echo file_get_contents($get);

