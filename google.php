<html>
<head>
<meta name="google-signin-client_id" content="514907710858-bibmgh71itmvi6for83bef32nn76kb2i.apps.googleusercontent.com">
<script src="https://apis.google.com/js/platform.js" async defer></script>
<script>
function init() {
  gapi.load('auth2', function() { // Ready. });
}
</script>
<script>function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
</script>
<script>
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
</script>
<script>
// auth2 is initialized with gapi.auth2.init() and a user is signed in.

if (auth2.isSignedIn.get()) {
  var profile = auth2.currentUser.get().getBasicProfile();
  console.log('ID: ' + profile.getId());
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());
}
</script>
</head>
<body>
<div class="google btn" data-onsuccess="onSignIn"></div>
<a href="login.html" onclick="signOut();">Sign out</a>
</body>
</html>

