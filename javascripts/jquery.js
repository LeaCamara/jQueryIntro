// made possible by the SCRIPT LINK to JQUERY LIBRARY
// make sure your jquery has loaded & your document is ready
console.log("hello from jquery");

$(document).ready(function () {
	// ALL THE JQUERY CODE GOES HERE
	
	/////////////////////////Select by ID: /////////////////////////////

	// jQuery *always* returns an ARRAY of
  	// elements, EVEN when there's only ONE
  	// 
    //vanilla
  	var topArticle = document.getElementById("top-article");
  	//jquery
    var article = $("#top-article");
  	// these are the same:
    console.log("selecting by ID in vanilla: topArticle -->", topArticle);
    console.log("selecting by ID in jQuery: article -->", article[0]);
    // this returns an array:
    console.log("article -->", article);

	/////////////////////// Select by tag name.///////////////////////
  	//plain

 	var allButtons = document.getElementsByTagName("button");
 	console.log("selecting by TAG in vanilla: allButtons by TagName -->", allButtons);
 	//rememeber this returns an array
  	var button = $("button");
  	console.log("selecting by TAG in jQuery: button -->", button, "what does 'button.html() return -->", button.html());
 	// button.html = gives you what's inside the html tag
  	console.log("button", button, button.html("hey hey"));
 	// changes all the buttons to say "hey hey"  	

	/////////////////////// Select by class ///////////////////////
  	// 
  	// vanilla:
  	var mainArticles = document.getElementsByClassName("article--main");
  	console.log("selecting by CLASS in vanilla: mainArticles -->", mainArticles);
  	// jQuery:
  	// will be an array because that's what jQuery gives us
  	$(".article--main").each(function(arrayIndex, currentElement) {
  	  console.log("selecting by CLASS in jQuery: mainArticles -->", arrayIndex,$(currentElement).html());
  	});

  	/////////////////////// Select by attribute /////////////////////// 
  	var umbrellaElement = $("h1[umbrella='open']");
  	console.log("selecting by ATTRIBUTE in jQuery: umbrella text -->", umbrellaElement.html());

  	// Select children
  	console.log("selecting CHILDREN in jQuery: all children -->", $(".container").children()); // There are two children

	// Select specific children
  	console.log("selecting SPECIFIC CHILDREN in jQuery: the h1 -->", $(".container").children("h1"));
  	console.log("selecting SPECIFIC CHILDREN in jQuery: the section -->", $(".container").children("section"));

  	// Select specific child index (useful for ul/ol)
  	// Example of chaining selectors
  	console.log("selecting SPECIFIC CHILD INDEX in jQuery: third li -->", $("#letters").children(".letter").eq(2).html());


  	// Finding parent DOM elements
  	// console.log($(".album -->").parents(".song-container -->").attr("index -->"));
 	// GIVES ME ERRORS @ "jquery.min.js:2"

  	/////////////////////// Finding an element /////////////////////// 
  	// var album = $(".container").find(".album");
  	// console.log("album -->", album.html());
  	 // GIVES ME ERRORS @ "jquery.min.js:2"

  	// Selecting siblings
  	var aSibling = $(".a").next();
  	console.log("aSibling -->", $(".a"), aSibling.html());

  	// Selecting all siblings
  	var aSiblings = $(".a").nextAll();
  	aSiblings.each(function(index, el) {
  	  console.log("sibling text -->", $(el).html());
  	});

  	// jQuery get my list of songs:
	function functionIWantjQueryToExecute(songList) {
    	console.log("songList.songs NOT SHOWING UP-->", songList.songs);

	    for (var i = 0; i < songList.songs.length; i++) {
	      var currentSong = songList.songs[i];
	      $("#list-of-songs").append("<h1>"+ currentSong.title +"</h1>");
	      $("#list-of-songs").append("<div>Performed by " + currentSong.artist + "</div>");
	      $("#list-of-songs").append("<div>On the album " + currentSong.album + "</div>");
	    }
  	}

    
//as a test, what happens if really big file, who comes first?
//test after others
// "this won't work because there are no songs in the jeopardy. we're just demonstrating time delays" ????
// "to be conscious of the order"
// "we're still processing stuff simultaneously"
  $.ajax({
  url:"JEOPARDY_QUESTIONS1.json"
  }).done(functionIWantjQueryToExecute);

// http://www.w3schools.com/jquery/ajax_ajax.asp
// look at Try It examples at the bottom of page

	function functionIWantjQueryToExecute(songList) {
      console.log(songList.songs);

      for (var i = 0; i < songList.songs.length; i++) {
        var currentSong = songList.songs[i];
        $("#list-of-songs").append("<h1>"+ currentSong.title +"</h1>");
        $("#list-of-songs").append("<div>Performed by " + currentSong.artist + "</div>");
        $("#list-of-songs").append("<div>On the album " + currentSong.album + "</div>");
      }
    }

	// Add Comment Collapse
	$.ajax({
	url:"javascripts/songs.json"
	}).done(functionIWantjQueryToExecute);

	// $.ajax({
	// url:"./javascripts/more-songs.json"
	// }).done(functionIWantjQueryToExecute);

//also test loading big data
  // $("#loadBigData").click(function(){
  //     $.ajax({url: "JEOPARDY_QUESTIONS1.json", 
  //       success: function(result){
  //         console.log("got the data", result);
  //       }
  //     });
  //   });

});