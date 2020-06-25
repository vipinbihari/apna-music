# apna-music
This is Official https://apnamusic.live Repository.</br>
**This was made to make all the contents of YouTube be available in audio format. Most of the time people just want to listen something( Podcast or Music) but they have to play the video also. Which consumes more data , battery.**
<h2>Installation </h2>
  <b>The best way to use apna-music is using docker.</br><a href='https://docs.docker.com/install/'>&nbsp;&nbsp;&nbsp;Click Here For installing Docker.</a> </b></br></br>
  
<b>If you have Docker already Installed </b>

  > ```docker build -t apna-music:running https://github.com/vipinbihari/apna-music.git```
  <p>Copy and Paste the above command in your terminal.</p>
<h4>Now you will have a Docker Image ready to run.</h4>
<b>Now start the Docker Container using the command given below.</b>

> ```docker run -dit -p 80:80 apna-music:running```
<p>Now go to <a href="http://localhost">localhost</a> and your service container must be running.</p>
