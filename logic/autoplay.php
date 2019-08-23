<?php
$id = $_GET['id'];
if(isset($id)){
$pageToken = $_GET['pageToken'];
if(isset($pageToken)){

$request = "https://www.googleapis.com/youtube/v3/search?pageToken={$pageToken}&part=id&relatedToVideoId={$id}&type=video&key=AIzaSyDFiLbujgQtWGIWQudc2q-BuuFJlzsxUEE";


}else{
$request = "https://www.googleapis.com/youtube/v3/search?part=id&relatedToVideoId={$id}&type=video&key=AIzaSyDFiLbujgQtWGIWQudc2q-BuuFJlzsxUEE";
}
echo file_get_contents($request);
}

?>
