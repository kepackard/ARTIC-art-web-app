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
 
// EVENT LISTENER

    $('form').on('submit', getArtData);

// FUNCTIONS

// If you want to add a Copyright 2021 to the page:
    // init();

    // function init () {
    //     getLaunchData(); //load launch data
    //     $year.text(new Date().getFullYear)
 
// Grabbing data from the api
    function getArtData(event) {
        event.preventDefault();
        const artTitle = $input.val();
         $input.val("");
    
        $.ajax(`${BASE_URL}/artworks/search?q=${artTitle}`).then(function(data) {
          artData = data;
        //save the data locally
          console.log(artData);

        render ();
        //transfer data to the DOM
    }, function(error) {
        console.log(error);
    });
}

   //we need to generate html for each object inside of artData
    //we need to set the html content to the html we generate


// Access values inside api object
function render() {
    $title.text(artData.title);
    $artist.text(artData.artist_title);
    $date.text(artData.date_display);
    $medium.text(artData.medium_display);

    // console.log($title.text);
}

// If there is more than one result, pull only the first one
// https://api.artic.edu/api/v1/artworks?limit=2

// How to pull and display image

// If the image is not in the public display, pull the next one that is

});