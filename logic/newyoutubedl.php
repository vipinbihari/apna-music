<?php

if(isset($_GET['id'])){
$id = $_GET['id'];
}else{
    
    die('Please Provide Id Parameter.');
    
}

//HERE WE WOULD MAKE CONNECTION TO THE DATABASE
$server ='localhost';
$username = 'root';
$password = 'vipin';
$db = 'apnamusic';

$conn = mysqli_connect($server, $username, $password, $db);

if(!$conn){
die("unable to connect ". mysqli_connect_error($conn));
}

$query = "select count(*) as total, format from main_table where vid_id='$id'";

$results = mysqli_query($conn, $query);

$final = mysqli_fetch_assoc($results);
$count = $final['total'];
$format =$final['format'];

if($count == 1){
    
    
echo "/music/{$id}.{$format}";
    
}

if($count == 0){
    
    
    

if(isset($_GET['id'])){


$command = shell_exec("youtube-dl --extract-audio -o '/var/www/html/music/%(id)s.%(ext)s' https://www.youtube.com/watch?v={$id}");

$filter1 = stristr($command, '[ffmpeg]');
$filter2 = stristr($filter1, 'Deleting', true);
if($filter2 !=false){
$filter3 = stristr($filter2,'.');
$finalFilter = str_replace('.','', $filter3);
		
		}else{
		
			$filter2 = stristr($filter1, 'Post', true);
			$filter3 = stristr($filter2,'.');
			$filter4 = str_replace('.','', $filter3);
			$finalFilter = stristr($filter4,'"',true);

		
		}
$date = date('Y-m-d');
$query = "insert into main_table(vid_id, format , upload_date, is_converted, view_count) values('$id', '$finalFilter', '$date', 0, 0)";
$update = mysqli_query($conn,$query);
if($update){
    
    //echo 'The data base was inserted successfully';
    
echo "music/{$id}.{$finalFilter}";

}

    

    
}

    
}


?> 

