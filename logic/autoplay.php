<?php
$id = $_GET['id'];
if(isset($id)){
$pageToken = $_GET['pageToken'];
if(isset($pageToken)){

$request = "https://www.googleapis.com/youtube/v3/search?pageToken={$pageToken}&part=id&relatedToVideoId={$id}&type=video&key=AIzaSyD6zCD1iHr4VrAHelLSZpbcToqoRk0-iOQ";


}else{
$request = "https://www.googleapis.com/youtube/v3/search?part=id&relatedToVideoId={$id}&type=video&key=AIzaSyD6zCD1iHr4VrAHelLSZpbcToqoRk0-iOQ";
}
echo file_get_contents($request);
}

?>
