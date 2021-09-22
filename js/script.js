// alert('JS file loaded!')

// curl 'https://api.artic.edu/api/v1/artworks/24645' \
// --header 'AIC-User-Agent: aic-bash (kepackard@gmail.com)'

// IPO - INPUT -> PROCESS -> OUTPUT

$(function(){
    
    // API DETAILS

    const BASE_URL = 'https://api.artic.edu/api/v1'; 

// VARIABLES AND CONSTANTS

    let artData;

    const $title = $('#Title');
    const $artist = $('#Artist');
    const $date = $('#Date');
    const $medium = $('#Medium');
    const $form = $('form');
    const $input = $('input[type="text"]');
    // const $image = $('IMAGE HERE')
 
// EVENT LISTENER

    $form.on('submit', getArtData);

// FUNCTIONS

// If you want to add a Copyright 2021 to the page:
    // init();

    // function init () {
    //     $year.text(new Date().getFullYear)
 
// Grabbing data from the api
    function getArtData(event) {
        event.preventDefault();
        // Resets search field to an empty string each time. ok to comment-out
        const artTitle = $input.val();
         $input.val("");
    
         $.ajax(`${BASE_URL}/artworks/search?q=${artTitle}&fields=title,artist_title,date_display,medium_display,image_id`).then(function(results) {
          console.log(results);
          
          artData = results.data;
          console.log("Ajax Call", artData);

     
        render ();
        //transfer data to the DOM
    }, function(error) {
        console.log("Error", error);
    });
}

// Access values inside api object
function render() {
    $title.text(artData[0].title);
    $artist.text(artData[0].artist_title);
    $date.text(artData[0].date_display);
    $medium.text(artData[0].medium_display);

//    console.log(artData.data.medium_display);
    };


// If there is more than one result, pull only the first one
// https://api.artic.edu/api/v1/artworks?limit=2

// How to pull and display image??

// "data": {
//     "id": 6565,
//     "title": "American Gothic",
//     "image_id": ""

// https://www.artic.edu/iiif/2",

// If the image is not in the public domain, pull the next one that is ??

});


// $.ajax(`${BASE_URL}/artworks/?fields=title,artist_title,date_display,medium_display`).then(function(results) {
    // artData = results.data;
    // console.log("Ajax Call", artData);