<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="manifest" href="manifest.json">
<meta property="og:image" content="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2017/09/youtube-to-mp3-1024x576-1024x576.jpg"/>
<!-- BOTTOM CSS FILE IS INCLUDED FOR HEADER OF THIS SITE -->

 <?php include 'ytheader.css'; ?>
<!-- BOTTOM CSS FILE IS FOR LOGIN PAGE CSS -->
 <?php include 'login.css'; ?>
<!-- BOTTOM CSS FILE INCLUDE CSS FOR MORE DROP BOX 3 DOTS BUTTON -->
<?php include 'moredrop.css'; ?>
<style>
.spinner{
display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 12px auto;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: 7px solid #eee;
    border-top-color: #b92020;
    -webkit-animation: spinner .8s linear infinite;
    animation: spinner .8s linear infinite;
    margin-top: 15px;
    /* font-size: 20px; */
    font-weight: bold; }

@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.column {
  float: left;
  width: 33.3%;
  margin-bottom: 16px;
  padding: 0 0px;

}
a:link {
    text-decoration:none;

}
@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius:10px;
}

.container {
  padding: 10px 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.row .title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}


.maintime, .uploadDate{
    bottom: 0px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    box-align: end;
    align-items: flex-end;
}
.time{
    
    margin: 5px;
    padding: 1px 4px;
    border-radius: 2px;
    font-size: 1.2rem;
    color: hsl(0,0%,93.3%);
    background-color: hsla(0,0%,6.7%,.8);
    margin-top: -10%;
}
.container a h3 {
overflow: hidden;
    display: -webkit-box;
    line-height: 1.25;
    max-height: 2.5em;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    font-weight: normal;
    margin: 0 0 3px;
    color: hsl(0,0%,6.7%);
    font-size: 1rem;
}
.card img{
border-radius:10px;
}
.container .dot{
font-size: xx-large;
    font-weight: bold;
    padding-left: 5px;
    position: relative;
    top: -2px;
}
.column .card a{
position:relative
}
.thumbnail{
background-color: hsla(0,0%,53.3%,.2);
    min-width: 340px;
    min-height: 180px;
}
.musicplayer{
    position: fixed;
    width: 100%;
    height: 13%;
    bottom: 0;
    display:none;
    z-index:1;
    background-color: #2fb145e0;
    margin-left: -2%;

}
audio{
    margin-top: 4.5%;
    margin-left: 8%;
}
.newmusicload{
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #696d2770;
    height: 87%;
    display:none;
    z-index:1;
background-image: linear-gradient(rgba(255, 153, 51, 0.8), rgba(255, 255, 255, 0.08), rgba(18, 136, 7, 0.88));
margin-left:-2%;
}
.newmusicload img{
margin-top: 76%;
    margin-left: 41%;
}
.newmusicload .loadmsg{
   		color: #d9d9d9;
                font-size: xx-large;
                padding: 10px;
                background-color: #100e0e57;
                position: fixed;
                top: 78%;
                left: 13%;
}
.ytheader{
margin: -2%;
}
.newMusicLoadSpinner {
    position: fixed;
    top: 45%;
    left: 39%;
}
.uploadDate{
flex-direction:row;
}
.card a svg {
max-width:5%;
height:25px;
padding:2%;
padding-right:5%;
border-radius:54%;
}
.card .container a {
display:flex;
}
.card a svg:hover, .card a svg:active{
background-color: #8080809c;
    box-shadow: 3px 2px 2px #947e7ede;

}

</style>
</head>
<body>
<?php include 'ytheader.html'; ?>
</br><hr>
<div class="row"></div>
<div class="ajaxload"><div class="ajax" style=""><div key="spinner" class="spinner"></div></div></div><div class="musicplayer"><audio controls></audio></div><div class="newmusicload"><div key="spinner" class="newMusicLoadSpinner spinner"></div><div class="loadmsg"></div></div>

<div class="moredrop"><div class="menu-container"><div class="menu-content"><!--<div><div><button class="menu-item-button">Not interested</button></div></div>--><div><div><button class="menu-item-button">Play Next</button></div></div><div><button class="menu-item-button">Cancel</button></div></div><c3-overlay><button class="overlay-button" aria-label="close"></button></c3-overlay></div></div>



<script>ids = ['aUs1yzZMbMQ', 'wsxUywlCbiA', 'CYtt269jzlw', 'hQqHFJdSq0M', '8rbEAhsHQFw', 'GcwkeRKxcKY', 'hjWf8A0YNSE', 'dZ0fwJojhrs', 'Ukt4NjjRG8U', 'YuXLN23ZGQo', 'RCgbE6eS-DU', 'K99NOOka914', 'JFcgOboQZ08', 'FsnYzwQm3gM', 'qfdShSZZxlg', 'LOF1mYzxK_Q', 'yIIGQB6EMAM', 'WYk2RdpCUYk', 'BrhsR-Mz8UE', 'f1qz8vn3XbY', 'KU3JLQmlU8U', 'r6gWOthiCk4', 'k4vZaRIwCtU', 'PRXIG7ZWnG8', 'N2-HsIYd0Go'];</script>
 </body>
<script src="newtest.js"></script>
<script src="notification.js"></script>
<script>
  if ('serviceWorker' in navigator) {
    console.log("Will the service worker register?");
    navigator.serviceWorker.register('service-worker.js')
      .then(function(reg){
        console.log("Yes, it did.");
      }).catch(function(err) {
        console.log("No it didn't. This happened: ", err)
      });
  }
</script>
</html>


