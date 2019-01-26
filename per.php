<?php
header("Access-Control-Allow-Origin:*");
$id = $_GET['id'];
$get="https://www.googleapis.com/youtube/v3/videos?id={$id}&part=contentDetails,statistics,snippet&key=AIzaSyB2oMXNhlDjwemhqE7xaOYp1bpIB08Kx2E";
echo file_get_contents($get);

/*

 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     console.log(this.responseText);
    }
  };
  xhttp.open("GET", "per.php?id=Ns7tGNbtvV4", true);
  xhttp.send();

*/
