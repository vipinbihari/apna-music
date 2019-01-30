<?php
$id = $_GET['id'];
if(isset($id)){
$pageToken = $_GET['pageToken'];
if(isset($pageToken)){

$request = "https://www.googleapis.com/youtube/v3/search?pageToken={$pageToken}&part=id&relatedToVideoId={$id}&type=video&key=AIzaSyB2oMXNhlDjwemhqE7xaOYp1bpIB08Kx2E";


}else{
$request = "https://www.googleapis.com/youtube/v3/search?part=id&relatedToVideoId={$id}&type=video&key=AIzaSyB2oMXNhlDjwemhqE7xaOYp1bpIB08Kx2E";
}
echo file_get_contents($request);
}

?>
