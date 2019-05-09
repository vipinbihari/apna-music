/*JAVASCRIPT CODE WILL MAKE WHOLE WEBSITE RUNNING THROUGH AJAX.
STEP 1. SEARCH FOR THE CONTENT ON THE LANDING SEARCH WEBPAGE.
STEP 2. PARSE THAT SEARCH REQUEST ON THE SERVER AND RETURN A JSON RESPONSE OF VIDEO ID'S (25 ID'S FOR NOW)
STEP 3. MAKE REQUEST FOR THE FIRST 5 JSON ID'S.
STEP 4. PARSE THE JSON RESPONSE AND MAKE THE DOM ELEMENTS AND INSERT THAT DATA.
*/

//FOR CALTULAING THE YOUTUBE ISO TIME FORMAISECONDS
function duration(duration)
{
	var match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

	match = match.slice(1).map(function (x)
	{
		if (x != null)
		{
			return x.replace(/\D/, '');
		}
	});

	var hours = (parseInt(match[0]) || 0);
	var minutes = (parseInt(match[1]) || 0);
	var seconds = (parseInt(match[2]) || 0);

	return hours * 3600 + minutes * 60 + seconds;
	//FOR CALTULAING THE YOUTUBE ISO TIME FORMAISECONDS
}


//FOR CONVERTING THE SECONDS INTO HH:MM:SS FORMAT
function convert(d)
{
	d = Number(d);

	var h = Math.floor(d / 3600);
	var m = Math.floor(d % 3600 / 60);
	var s = Math.floor(d % 3600 % 60);
	if (h == 0)
	{
		return ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
	}
	else
	{
		return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
	}
	//FOR CONVERTING THE SECONDS INTO HH:MM:SS FORMAT

}


//FOR CONVERTING VIEW INTO YOUTUBE VIEW FORMAT
function toCount(views)
{
	if (views < 1000)
	{
		return views;

	}
	if (views >= 1000 && views <= 999999)
	{
		return (views / 1000).toFixed(1) + "K";

	}
	if (views >= 1000000 && views <= 999999999)
	{
		return (views / 1000000).toFixed(1) + 'M';

	}
	if (views >= 1000000000 && views <= 999999999999)
	{
		return (views / 1000000000).toFixed(1) + 'B';
	}
	//FOr CONVERTING VIEW INTO YOUTUBE VIEW FORMAT

}


//MUSIC FUNCTION FOR GETTING THE AUDIO PLAYABLE LINK AND ALSO PLAYING THE MUSIC AND UPDATING PLALIST
audio = document.querySelector('audio');

function musicAjax(id)
{
	mhttp = new XMLHttpRequest();
	mhttp.onreadystatechange = function ()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			console.log(this.responseText);
			document.querySelector('.newmusicload').style.display = "none";
			var title = currentNode.querySelector('h3').innerText;
			var artist = currentNode.querySelector('span').innerText;
			var thumbnail = 'https://i.ytimg.com/vi/' + id + '/default.jpg'
			newElement = {
				src: (this.responseText).trim(),
				title: title,
				artist: artist,
				artwork: [
				{
					src: thumbnail,
					size: '512x512',
					type: 'image/jpg'
				}]
			};
			playlist.push(newElement);
			index = playlist.length - 1;
			playAudio();
			saveIds(id);

			//CODES FOR NEXT AUTOPLAY AT BOTTOM
			autoPlayIdsFunc(id, null);


		}
		else
		{
			document.querySelector('.loadmsg').innerHTML = 'Music is Loading...';
		}
		if (this.readyState == 4 && this.status != 200)
		{
			document.querySelector('.newmusicload').style.display = "none";
			document.querySelector('.loadmsg').style.display = "none";
		}
	};
	mhttp.open("GET", "logic/newyoutubedl.php?id=" + id, true);
	mhttp.send();
	//MUSIC FUNCTION FOR GETTING THE AUDIO PLAYABLE LINK AND ALSO PLAYING THE MUSIC AND UPDATING PLALIST
}


//FOR PLAYING MUSIC ON THE SAME PAGE AND GETTING THE VIDEO ID FOR THAT CARD
function play(id, event, node)
{
	document.querySelector('.newmusicload').style.display = "block";
	document.querySelector('.musicplayer').style.display = "block";
	console.log('you have to play a song' + id);
	currentNode = node;
	musicAjax(id);

	event.preventDefault();
	//FOR PLAYING MUSIC ON THE SAME PAGE AND GETTING THE VIDEO ID FOR THAT CARD
}


//FILTERING THE ARRAY IN THE STRING FORMAT FOR ATMOST 5 ELEMENTS AT A TIME
function filterArray()
{

	idsLength = ids.length;
	if (idsLength != 0)
	{
		if (ids.length < 5)
		{

			tempArray = [];

			for (x = 0; x < idsLength; x++)
			{

				tempArray[x] = ids.shift();

			}

			return tempArray.toString();
		}
		else
		{
			tempArray = [];
			for (x = 0; x < 5; x++)
			{

				tempArray[x] = ids.shift();

			}

			return tempArray.toString();
		}

	}
	else
	{
		console.log('You Are At The End Of The Page');
	}
	//FILTERING THE ARRAY IN THE STRING FORMAT FOR ATMOST 5 ELEMENTS AT A TIME
}

//IT IS THE MAIN FUNCTION WHICH IS CALLED WHEN THE WINDWO IS LOADED
firstAjax = 0;

function ajax()
{
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function ()
	{
		if (this.readyState == 4)
		{
			document.querySelector('.ajaxload').style.display = 'none';
			firstAjax++;

		}
		if (this.readyState == 4 && this.status == 200)
		{
			youtube = JSON.parse(this.responseText);
			var responseLength = youtube.items.length;
			/*HERE WE WOULD CREATE NO OF EMPTY DOM */
			for (domLoop = 0; domLoop < responseLength; domLoop++)
			{
				createColumn = document.createElement('div');
				createColumn.setAttribute('class', 'column');
				document.querySelector('.row').appendChild(createColumn);
				insertColumn = document.querySelectorAll('.row')[0];
				videoDuration = convert(duration(youtube.items[domLoop].contentDetails.duration));
				videoId = youtube.items[domLoop].id;
				channelName = youtube.items[domLoop].snippet.channelTitle;
				videoViews = toCount(youtube.items[domLoop].statistics.viewCount);
				videoTitle = youtube.items[domLoop].snippet.localized.title;
				uploadDate = uploadTime(youtube.items[domLoop].snippet.publishedAt);
				newTile = '<div class="card" onclick="play(\'' + videoId + '\',event,this.querySelector(\'.container\'));"><a href="http://apnamusic.ml/youtubedl.php?id=' + videoId + '"><div class="thumbnail"><img src="https://img.youtube.com/vi/' + videoId + '/mqdefault.jpg" alt="thumbnail" style="width:100%;"></div><div class="maintime"><div class="time"><span>' + videoDuration + '</span></div></div><div class="uploadDate"><div class="time"><span>' + uploadDate + '</span></div></div></a><div class="container"><a><h3>' + videoTitle + '</h3><svg onclick="more(\'' + videoId + '\', this.parentNode, event)"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg></a><span class="title channel_name">' + channelName + '</span><span class="dot">.</span> <span class="title view_count">' + videoViews + ' views</span></div></div>';
				insertColumn.lastElementChild.innerHTML = newTile;
			}
		}
		else
		{
			document.querySelector('.ajaxload').style.display = 'block';
		}
	};
	xhttp.open("GET", "logic/per.php?id=" + filterArray(), true);
	xhttp.send();
	//IT IS THE MAIN FUNCTION WHICH IS CALLED WHEN THE WINDWO IS LOADED
}

//FOR MAKING TILES LOADING MORE SMOTHER
data = 1;
delay = (new Date).getTime();
window.addEventListener('load', ajax());
//FOR MAKING TILES LOADING MORE SMOTHER


window.onscroll =
	function scroll()
	{
		//FOR ADDING TILES DYNAMICALLY WITH AJAX() FUNCTION CALL
		if (((new Date).getTime() - delay) > 100)
		{
			delay = (new Date).getTime();
			if (ids.length != 0)
			{
				windoSize = window.innerHeight;
				if (windoSize + window.scrollY + (windoSize * 0.9) >= document.body.offsetHeight)
				{

					if (data == firstAjax)
					{
						ajax();
						data++;
					}
					else
					{
						console.log('Previous Has Not Responded Yet.');
					}

				}

			}
			else
			{
				console.log("End Of The Page");

				document.querySelector('.ajaxload').style.display = 'none';
			}
		}
		else
		{
			console.log('You are scrolling too early');
		}
		//FOR ADDING TILES DYNAMICALLY WITH AJAX() FUNCTION CALL
	}


//FOR OPENING THE SEARCH POPUP MENU
function openSearch()
{

	main = document.querySelector('.ytheader ytm-header-bar');
	childElement = document.createElement('c3-overlay');
	childElement.setAttribute('onclick', 'closeSearch()');
	childElement.innerHTML = '<button class="overlay-button" aria-label="Close search" ></button>';
	main.insertBefore(childElement, main.childNodes[0]);
	main.querySelector('header').setAttribute('data-mode', 'searching');
	//FOR OPENING THE SEARCH POPUP MENU

}

//FOR CLOSING THE SEARCH POPUP MENU
function closeSearch()
{

	main.removeChild(childElement);
	main.querySelector('header').setAttribute('data-mode', 'brwose');

	//FOR CLOSING THE SEARCH POPUP MENU

}

function makeSearch(event)
{
	search = document.querySelector('.form .searchbox-input').value;
	if (search != 'Search Here')
	{
  var ID = '';
  url = search.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if(url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
		musicAjax(ID);
		return false;
  }

		closeSearch();
		row = document.querySelectorAll('.row')[0].innerHTML = '';
		toHome();
		document.querySelector('.ajaxload').style.display = 'block';

		data = 1;
		firstAjax = 0;
		ids = [];
		searchAjax = new XMLHttpRequest();
		searchAjax.onreadystatechange = function ()
		{

			if (this.readyState == 4 && this.status == 200)
			{
				console.log('making search');
				ids1 = this.responseText;
				ids1 = ids1.trim();
				ids1 = ids1.replace(/'/g, '"');
				ids = JSON.parse(ids1);
				ajax();


			}

		};

		searchAjax.open('GET', 'logic/serchindex.php?q=' + search + '&maxResults=25', true);
		searchAjax.send();


	}
	else
	{
		console.log('please type some keyword');
	}
	return false;
	event.preventDefault();
}


run = document.querySelector('input.searchbox-input.title');
run.addEventListener('keyup', function (event)
{
	if (event.keyCode === 13)
	{
		console.log('We are at enter key search');
		makeSearch(event);
	}
});


//FOR SAVIG IDS IN LOCAL STOROGE FOR HISTORY
function saveIds(id)
{
	var storageIds = [];
	if (window.localStorage.getItem('ids') != null)
	{

		storageIds = window.localStorage.getItem('ids');
		storageIds = storageIds.split(',');

	}
	else
	{


	}

	storageIds.unshift(id);
	storageIds = uniq(storageIds);

	window.localStorage.setItem('ids', storageIds);
	console.log('local storage updated succefully');

	//FOR SAVIG IDS IN LOCAL STOROGE FOR HISTORY

}

//FOR REMOVING DUPLICATE ENTRY IN AN ARRY
function uniq(a)
{
	var prims = {
			"boolean":
			{},
			"number":
			{},
			"string":
			{}
		},
		objs = [];

	return a.filter(function (item)
	{
		var type = typeof item;
		if (type in prims)
			return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
		else
			return objs.indexOf(item) >= 0 ? false : objs.push(item);
	});
	//FOR REMOVING DUPLICATE ENTRY IN AN ARRY

}


function showHistory()
{


	row = document.querySelectorAll('.row')[0].innerHTML = '';
	data = 1;
	firstAjax = 0;
	var tempIds;
	tempIds = window.localStorage.getItem('ids');
	ids = tempIds.split(',');
	ajax();


}

//EVENT LISTENER WHEN THE HISTORY ICON IS CLICKED
historyIcon = document.querySelector('a[aria-label="Subscriptions"]');
historyIcon.addEventListener('click', function ()
{
	document.querySelector('div .scbrr-tabs a[aria-label="Trending"]').setAttribute('aria-selected', 'false');
	document.querySelector('div .scbrr-tabs a[aria-label="Account"]').setAttribute('aria-selected', 'false');
	document.querySelector('div .scbrr-tabs a[aria-label="Home"]').setAttribute('aria-selected', 'false');

	historyIcon.setAttribute('aria-selected', 'true');
	showHistory();
	//EVENT LISTENER WHEN THE HISTORY ICON IS CLICKED
});

//EVENT LISTENER WHEN THE TRENDING ICON IS CLICKED
trendingIcon = document.querySelector('a[aria-label="Trending"]');
trendingIcon.addEventListener('click', function ()
{
	document.querySelector('div .scbrr-tabs a[aria-label="Subscriptions"]').setAttribute('aria-selected', 'false');
	document.querySelector('div .scbrr-tabs a[aria-label="Account"]').setAttribute('aria-selected', 'false');
	document.querySelector('div .scbrr-tabs a[aria-label="Home"]').setAttribute('aria-selected', 'false');

	trendingIcon.setAttribute('aria-selected', 'true');

	customTrends();

	//showTrends();
	//EVENT LISTENER WHEN THE HISTORY ICON IS CLICKED
});


//EVENT LISTENER WHEN THE ACCOUNT ICON IS CLICKED
accountIcon = document.querySelector('a[aria-label="Account"]');
accountIcon.addEventListener('click', function ()
{
	document.querySelector('div .scbrr-tabs a[aria-label="Subscriptions"]').setAttribute('aria-selected', 'false');
	document.querySelector('div .scbrr-tabs a[aria-label="Trending"]').setAttribute('aria-selected', 'false');
	document.querySelector('div .scbrr-tabs a[aria-label="Home"]').setAttribute('aria-selected', 'false');

	accountIcon.setAttribute('aria-selected', 'true');
	loginPage();
	//EVENT LISTENER WHEN THE ACCOUNT ICON IS CLICKED
});


//FOR UPLOAD DATE RETRIVING
function uploadTime(date)
{

	var miliseconds = (new Date).getTime() - Date.parse(date);

	var year = (miliseconds / (1000 * 60 * 60 * 24 * 365));


	//console.log(year);

	if (year.toFixed(0) != 0)
	{

		//console.log('Uploader ',year.toFixed(), ' Years Ago');

		return year.toFixed() + ' Years Ago';
	}
	else
	{

		var month = year * 12;

		if (month.toFixed(0) != 0)
		{
			//console.log('Uploaded ',month.toFixed(), ' Months Ago');

			return month.toFixed() + ' Months Ago';

		}
		else
		{

			var week = month * 4;

			if (week.toFixed(0) != 0)
			{
				//console.log('Uploaded ',week.toFixed(), ' Weeks Ago');
				return week.toFixed() + ' Weeks Ago';


			}
			else
			{


				var days = week * 7;
				if (days.toFixed(0) != 0)
				{
					//console.log('Uploaded ',days.toFixed(), ' Days Ago');

					return days.toFixed() + ' Days Ago';

				}
				else
				{

					var hours = days * 24;
					if (hours.toFixed(0) != 0)
					{

						//console.log('Uploaded ',10 + parseInt(hours.toFixed()), ' Hours Ago');
						return 10 + parseInt(hours.toFixed()) + ' Hours Ago';


					}
					else
					{


						var minutes = hours * 60;
						if (minutes.toFixed(0) != 0)
						{

							//console.log('Uploaded ',minutes.toFixed(), ' Minutes Ago');
							return minutes.toFixed() + ' Minutes Ago';


						}
						else
						{

							console.log('SEconds are not shown');
							return "30 Sec ago";
						}

					}


				}

			}

		}


	}

}


function showTrends()
{

	row = document.querySelectorAll('.row')[0].innerHTML = '';
	document.querySelector('.ajaxload').style.display = 'block';


	var http = new XMLHttpRequest;
	http.onreadystatechange = function ()
	{

		if (this.readyState == 4 && this.status == 200)
		{

			trendsIds = JSON.parse(this.responseText);
			console.log('TrendsIds was returned Successfully');

			data = 1;
			firstAjax = 0;
			ids = [];
			for (x in trendsIds.items)
			{

				ids[x] = trendsIds.items[x].id;
			}

			ajax();


		}

	};


	http.open('GET', 'logic/trend.php', true);
	http.send();
}


function more(id, svgNode, event)
{
	moreVidId = id;
	svgNodeFinal = svgNode;
	document.querySelector('.moredrop').style.display = 'block';
	event.stopPropagation();
	event.preventDefault();
}


function loginPage()
{
	document.querySelector('.row').innerHTML = '';
	ids = [];
	document.querySelector('.ajaxload').style.display = 'block';
	var http = new XMLHttpRequest();
	http.onreadystatechange = function ()
	{
		if (this.readyState == 4 && this.status == 200)
		{
			document.querySelector('.row').innerHTML = this.responseText;

		}
		if (this.readyState == 4)
		{
			document.querySelector('.ajaxload').style.display = 'none';


		}


	};
	http.open('GET', 'design/html/login.html', true);
	http.send();

}


//EVENT LISTENER FOR CLOSING MORE 3 DOTS DROP BOX WHEN BACKGROUND IS CLICKED
document.querySelector('.moredrop c3-overlay').addEventListener('click', function ()
{
	document.querySelector('.moredrop').style.display = 'none';
	//EVENT LISTENER FOR CLOSING MORE 3 DOTS DROP BOX WHEN BACKGROUND IS CLICKED
});


//EVENT LISTENER FOR CLOSING MORE 3 DOTS DROP BOX CANCELED BUTTON WHEN BACKGROUND IS CLICKED
document.querySelector('.moredrop .menu-content').lastElementChild.addEventListener('click', function ()
{
	document.querySelector('.moredrop').style.display = 'none';
	//EVENT LISTENER FOR CLOSING MORE 3 DOTS DROP BOX CANCELED BUTTON WHEN BACKGROUND IS CLICKED
});


//EVENT LISTENER FOR CLOSING MORE 3 DOTS DROP BOX  WHEN PLAYNEXT BUTTON IS CLICKED
document.querySelector('.moredrop .menu-content').firstElementChild.addEventListener('click', function ()
{
	document.querySelector('.moredrop').style.display = 'none';
	playNext(moreVidId, svgNodeFinal)
	//EVENT LISTENER FOR CLOSING MORE 3 DOTS DROP BOX  WHEN PLAYNEXT BUTTON IS CLICKED

});


function playNext(id, svgNode)
{


	svgNode = svgNode.parentNode;
	var playNext = new XMLHttpRequest();
	playNext.onreadystatechange = function ()
	{

		if (this.readyState == 4 && this.status == 200)
		{
			var title = svgNode.querySelector('a h3').innerText;
			var artist = svgNode.querySelector('.title').innerText;
			var thumbnail = 'https://i.ytimg.com/vi/' + id + '/default.jpg'


			var newElement = {
				src: (this.responseText).trim(),
				title: title,
				artist: artist,
				artwork: [
				{
					src: thumbnail,
					size: '512x512',
					type: 'image/jpg'
				}]
			};
			playlist.push(newElement);
			console.log('song was added succefully for the next audio at this position', playlist.length);
		}
		if (this.readyState == 4 && this.status != 200)
		{
			console.log('There was some error while adding to play nex id=', id);


		}

	};

	playNext.open("GET", "logic/newyoutubedl.php?id=" + id, true);
	playNext.send();

	console.log('we are processing to add to playnext  ', id);


}

function toHome()
{

	document.querySelector('div .scbrr-tabs a[aria-label="Subscriptions"]').setAttribute('aria-selected', 'false');
	document.querySelector('div .scbrr-tabs a[aria-label="Account"]').setAttribute('aria-selected', 'false');
	document.querySelector('div .scbrr-tabs a[aria-label="Trending"]').setAttribute('aria-selected', 'false');
	document.querySelector('div .scbrr-tabs a[aria-label="Home"]').setAttribute('aria-selected', 'true');


}

//AUTOPLAY STATUS THIS IS SET BY USER
autoPlayStatus = 1;
//THIS FUNCTION RETRIVES THE IDS THAT ARE RELATED TO THE GIVEN ID
function autoPlayIdsFunc(id,nextPageToken)
{

	if (autoPlayStatus != 0)
	{	autoPlayMainId = id;
		autoPlayIds = [];
		var http = new XMLHttpRequest();
		http.onreadystatechange = function ()
		{
			if (this.readyState == 4 && this.status == 200)
			{
				var autoPlayList = JSON.parse(this.responseText);
				for (x = 0; x < autoPlayList.items.length; x++)
				{
					autoPlayIds[x] = autoPlayList.items[x].id.videoId;

				}
				nextAutoPageToken = autoPlayList.nextPageToken;
				//NEXT DETAIL REQUEST FUNCTIONN
				autoPlayIdDetails(autoPlayIds.shift());


			}


		}
		if(nextPageToken != null){
			id = id +'&pageToken='+nextPageToken;
		}
		http.open('GET', 'logic/autoplay.php?id=' + id, true);
		http.send();


	}
	else
	{
		console.log('AutoPlay is not Enabled');
	}
//THIS FUNCTION RETRIVES THE IDS THAT ARE RELATED TO THE GIVEN ID
}


//THIS FUNCTION RETURN THE DETAILS OF AN AUTOPLAY ID WITH ITS AUDIO SRC
//AND THIS ALSO ADD ELEMENT TO PLAYLIST
function autoPlayIdDetails(id)
{
	if (autoPlayStatus != 0)
	{
		newElementAutoPlay = [];
		var http = new XMLHttpRequest();
		http.onreadystatechange = function ()
		{

			if (this.readyState == 4 && this.status == 200)
			{

				response = JSON.parse(this.responseText);
				artist = response.items[0].snippet.channelTitle;
				title = response.items[0].snippet.localized.title;
				thumbnail = 'https://i.ytimg.com/vi/' + id + '/default.jpg'

				var newHttp = new XMLHttpRequest();
				newHttp.onreadystatechange = function ()
				{

					if (this.status == 200 && this.readyState == 4)
					{
						newElementAutoPlay = {
							src: (this.responseText).trim(),
							title: title,
							artist: artist,
							artwork: [
							{
								src: thumbnail,
								size: '512x512',
								type: 'image/jpg'
							}]
						};


						playlist.push(newElementAutoPlay);
						console.log('element was added to playlist autometically');


					}
					if(this.readyState == 4 && this.status != 200){

                  console.log('There were some errror while retriving autoplay src newyoutubedl.php file');
			         }

				}


				newHttp.open("GET", "logic/newyoutubedl.php?id=" + id, true);
				newHttp.send();


			}

			if(this.readyState == 4 && this.status != 200){

				console.log('There were some network error while geting details of autoplay id form per.php file');
			}

		}

		http.open('GET', 'logic/per.php?id=' + id, true);
		http.send();

	}
//THIS FUNCTION RETURN THE DETAILS OF AN AUTOPLAY ID WITH ITS AUDIO SRC
//AND THIS ALSO ADD ELEMENT TO PLAYLIST
}

function customTrends(){


row = document.querySelectorAll('.row')[0].innerHTML = '';
document.querySelector('.ajaxload').style.display = 'block';

		data = 1;
		firstAjax = 0;
		ids = [];
		customTrends = new XMLHttpRequest();
		customTrends.onreadystatechange = function ()
		{

			if (this.readyState == 4 && this.status == 200)
			{
				console.log('making search');
				var ids1 = this.responseText;
				var ids1 = ids1.trim();
				var ids1 = ids1.replace(/'/g, '"');
				ids = JSON.parse(ids1);
				ajax();


			}
			if (this.readyState == 4 && this.status != 200){

				document.querySelector('.ajaxload').style.display = 'none';
				console.log('Something went wrong while making customTrends search');
			}


		};

		customTrends.open('GET', 'other/appleTrends.json', true);
		customTrends.send();



}
