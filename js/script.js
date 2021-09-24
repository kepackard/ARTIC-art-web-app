// IPO - INPUT -> PROCESS -> OUTPUT

$(function(){
    
    // API DETAILS

    const BASE_URL = 'https://api.artic.edu/api/v1'; 
    // const baseUrlImage = 'https://www.artic.edu/iiif/2';

    // VARIABLES AND CONSTANTS

    let artData;

    const $title = $('#Title');
    const $artist = $('#Artist');
    const $date = $('#Date');
    const $medium = $('#Medium');
    const $form = $('form');
    const $input = $('input[type="text"]');
    let $image = $('img');
 
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
        //   console.log(results);
        
          artData = results.data;
        //   console.log("Ajax Call", artData);

        const imageId = artData[0].image_id;
        // grabbing imageId and saving it as variable
        
        // invoking getImage function and passing in imageID
        // getImage(imageId);

        render (); 
    }, function(error) {
        console.log("Error", error);
    });
}

// Access values inside api object...
function render() {
    $title.text(artData[0].title);
    $artist.text(artData[0].artist_title);
    $date.text(artData[0].date_display);
    $medium.text(artData[0].medium_display);
    let imageId = artData[0].image_id;
    $image.attr('src',`https://www.artic.edu/iiif/2/${imageId}/full/550,/0/default.jpg/`);
    };

});

// function getImage(imageId) {
//         $.ajax(`${baseUrlImage}/${imageId}/full/843,/0/default.jpg`)
//         .then(function(picture) {console.log(picture)})
//         console.log("This works");
//     }
    


/// you can write the funciton outsie but invoke it inside the function.

// If the image is not in the public domain, pull the next one that is ??

// link source - do I use image tag or other