function loadData() {
  const success = images => displayPage(images);
  const failure = error => console.error(error);
  $.get('../data/page-1.json', (images) => {
    if (images.length) {
      success(images);
    }
    else {
      failure({ 'message': 'something broke' });
    }
  }, 'json')
    .then(data => {
      data.forEach(idx => {
        // Each object should become a new instance of a constructor function.
        Images.list.push(new Images(idx));
      });
    });
}
