<?php
header("Access-Control-Allow-Origin:*");
$get="https://www.googleapis.com/youtube/v3/videos?part=id&chart=mostPopular&videoCategoryId=10&regionCode=IN&maxResults=50&key=AIzaSyD6zCD1iHr4VrAHelLSZpbcToqoRk0-iOQ";
echo file_get_contents($get);
