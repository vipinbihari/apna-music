<?php
header("Access-Control-Allow-Origin:*");
$get="https://www.googleapis.com/youtube/v3/videos?part=id&chart=mostPopular&videoCategoryId=10&regionCode=IN&maxResults=50&key=AIzaSyDFiLbujgQtWGIWQudc2q-BuuFJlzsxUEE";
echo file_get_contents($get);
