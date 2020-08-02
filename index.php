<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="manifest" href="other/manifest.json">
<meta name="google-signin-client_id" content="514907710858-9gat0gqh5m1g7si60j4k8icgrv0jtgo0.apps.googleusercontent.com">
<meta property="og:image" content="https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2017/09/youtube-to-mp3-1024x576-1024x576.jpg"/>
<!-- BOTTOM CSS FILE IS INCLUDED FOR HEADER OF THIS SITE -->
 <?php include 'design/css/ytheader.css'; ?>
<!-- BOTTOM CSS FILE IS FOR LOGIN PAGE CSS -->
 <?php include 'design/css/login.css'; ?>
<!-- BOTTOM CSS FILE INCLUDE CSS FOR MORE DROP BOX 3 DOTS BUTTON -->
<?php include 'design/css/moredrop.css'; ?>
<!-- BOTTOM CSS FILE INCLUDE COMMON CSS FOR THE PAGE WRITTEN EXCLUSIVELY -->
<?php include 'design/css/common.css'; ?>

<style>
#profile .card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

#profile .title {
  color: grey;
  font-size: 18px;
}

#profile button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}


button:hover, a:hover {
  opacity: 0.7;
}
</style>
</head>
<body>
<?php include 'design/html/ytheader.html'; ?>
</br><hr>
<div class="row"></div>
<div class="ajaxload"><div class="ajax" style=""><div key="spinner" class="spinner"></div></div></div><div class="musicplayer"><audio controls></audio></div><div class="newmusicload"><div key="spinner" class="newMusicLoadSpinner spinner"></div><div class="loadmsg"></div></div>

<div class="moredrop"><div class="menu-container"><div class="menu-content"><!--<div><div><button class="menu-item-button">Not interested</button></div></div>--><div><div><button class="menu-item-button">Play Next</button></div></div><div><button class="menu-item-button">Cancel</button></div></div><c3-overlay><button class="overlay-button" aria-label="close"></button></c3-overlay></div></div>



<script>ids = ['aUs1yzZMbMQ', 'wsxUywlCbiA', 'CYtt269jzlw', 'hQqHFJdSq0M', '8rbEAhsHQFw', 'GcwkeRKxcKY', 'hjWf8A0YNSE', 'dZ0fwJojhrs', 'Ukt4NjjRG8U', 'YuXLN23ZGQo', 'RCgbE6eS-DU', 'K99NOOka914', 'JFcgOboQZ08', 'FsnYzwQm3gM', 'qfdShSZZxlg', 'LOF1mYzxK_Q', 'yIIGQB6EMAM', 'WYk2RdpCUYk', 'BrhsR-Mz8UE', 'f1qz8vn3XbY', 'KU3JLQmlU8U', 'r6gWOthiCk4', 'k4vZaRIwCtU', 'PRXIG7ZWnG8', 'N2-HsIYd0Go'];</script>
 </body>
<script src="design/js/newtest.js"></script>
<script src="design/js/notification.js"></script>
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
<script src="https://apis.google.com/js/platform.js" async defer></script>
<script> function renderButton() {
      gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
	'theme': 'dark',
	'onsuccess': onSuccess,
        'onfailure': onFailure
      });
}

    function onFailure(error) {
      console.log(error);
    }

function onSuccess(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

  document.querySelector('.row').innerHTML = '';
  document.querySelector('.row').innerHTML ='<div id="profile"><div class="card"><img src="'+profile.getImageUrl()+'" alt="" style="width:50%"><h1>'+profile.getName()+'</h1><p class="title">'+profile.getEmail()+'</p><p>UserId: '+profile.getId()+'</p><p><button onclick="signOut();">Logout</button></p>'


}


function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });

loginPage();
}
</script>

</html>


