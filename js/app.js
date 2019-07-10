'use strict';

console.log('hello');

// var jsonData = J

function NewData (idx) {
  this.image_url = idx.image_url;
  this.title = idx.title;
  this.description = idx.description;
  this.keyword = idx.keyword;
  this.horns = idx.horns;
}
NewData.list = [];

function readFile(){
  $.get('../data/page-1.json', 'json')
    .then ( data => {
      data.forEach(idx => {
        NewData.list.push(new NewData(idx));
      });
    });

}
readFile()

console.log(NewData.list);