// API DETAILS

BASE_URL: 'https://api.artic.edu/api'

// VARIABLES AND CONSTANTS

let artData, userInput;

const $title = $('#Title');
const $artist = $('#Artist');
const $date = $('#Date');
const $medium = $('Medium');
const $form = $('form');
const $input = $('input[type="text"]');

// EVENT LISTENER

$('form').on('submit'), handleGetData;

// FUNCTIONS

function handleGetData(event) {
    event.preventDefault();
    const artTitle = $input.val();
    $input.val("");
    
    $.ajax(`${BASE_URL}`).then(function(data) {
        artData = data;
        console.log(artData);

    })
}
