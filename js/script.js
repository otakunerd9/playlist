// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	"title":"Fly Me To The Moon",
	"artist":"Frank Sinatra",
	"mp3-url":"https://open.spotify.com/track/2dR5WkrpwylTuT3jRWNufa",
	"image-url":"https://img0.etsystatic.com/000/0/6703118/il_570xN.302833768.jpg",
	"songLength": 2.27,
	
}

var myPlayList = [
	{
		"title":"24K Magic",
		"artist":"Bruno Mars",
		"mp3-url":"https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		"image-url":"https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		"title":"Sir Duke",
		"artist":"Stevie Wonder",
		"mp3-url":"https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		"image-url":"https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		"title":"Sorry",
		"artist":"Justin Bieber",
		"mp3-url":"https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		"image-url":"http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

]

function playlistsong(index) {
    var recName = myPlayList[index].title;
    var recTime = myPlayList[index].artist;
    var recSong = myPlayList[index]['image-url'];
    
    var sentence1 = "<h3>" + recName + "</h3>";
    var sentence2 = "<p>" + recTime + "</p>";
    var sentence3 = "<img src=" +recSong+ " alt='24K Magic Cover' >" ;
    
    var favSong = "<div id='favSong'>" + sentence1 + sentence2 + sentence3 + "</div>";
    
    $("#favoriteSong").append(favSong);
}


// DOCUMENT READY FUNCTION
$( document ).ready(function() {
 
displayList();


});

function displayList(){

for(var i = 0; i < myPlayList.length; i++) {
   var title = myPlayList[i].title;
   var artist = myPlayList[i].artist;
   var mp3URL = myPlayList[i]["mp3-url"];
   var imageURL = myPlayList[i]["image-url"];
   $('.songs').append("<h3>" + title +  "</h3>")
   $('.songs').append("<h3>" + artist +  "</h3>")
   $('.songs').append("<h3>" + mp3URL +  "</h3>")
   $('.songs').append("<img src=" + imageURL + ">")
}
 
}

function clearList(){
  
  
  
}

function addSong(){
 
  
  
}
