<?php
header("Access-Control-Allow-Origin:*");
$get="https://www.googleapis.com/youtube/v3/videos?part=id&chart=mostPopular&videoCategoryId=10&regionCode=IN&maxResults=50&key=AIzaSyB2oMXNhlDjwemhqE7xaOYp1bpIB08Kx2E";
echo file_get_contents($get);
