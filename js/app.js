'use strict';

console.log('hello');

function NewData (idx) {
  this.image_url = idx.image_url;
  this.title = idx.title;
  this.description = idx.description;
  this.keyword = idx.keyword;
  this.horns = idx.horns;
}
NewData.list = [];

// Use AJAX, specifically $.get(), to read the provided JSON file.
function readFile(){
  $.get('../data/page-1.json', 'json')
    .then ( data => {
      data.forEach(idx => {
        // Each object should become a new instance of a constructor function.
        NewData.list.push(new NewData(idx));
      });
    });

}
readFile()

//console.log(NewData.list);

//Use jQuery to make a copy of the HTML template of the photo component. For each object, fill in the duplicated template with its properties, then append the copy to the DOM.

function renderImage() {
  NewData.list.forEach(element => {
    const $newImage = $('#photo-template').clone();

    $newImage.find('section').text(element.name);
    $newImage.find('h2').text(element.rank);
    $newImage.find('p').text(element.type);
    $newImage.attr('data-type', NewData.list.type);

    $('.NewData.lists').append($newImage);

  });

}
renderImage();






