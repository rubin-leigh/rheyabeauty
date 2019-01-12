activeItem = $('#accordion').children(':first');
$('#accordion').on('click', '.list', function() {
  $(activeItem).animate({
    width: '5vw'
  }, {
    duration: 200,
    queue: false,
  }).children(':first')
  activeItem = this;
  $(activeItem).animate({
    width: '75vw'
  }, {
    duration: 200,
    queue: false
  }).children(':first').removeClass('blur-filter');
});
/*
$(document).ready(function() {
  createSlides();

});
var slides = [{
  src: 'http://t.wallpaperweb.org/wallpaper/nature/1440x1080/01319_glaciercanyon_1440x1080.jpg',
  text: 'Qategory'
}, {
  src: 'http://t.wallpaperweb.org/wallpaper/nature/1440x1080/Punch_Bowl_Falls_Eagle_Creek_Wilderness_Area_Columbia_River_GorgeOregon_1440x1080.jpg',
  text: 'Category'
}, {
  src: 'http://img1.mxstatic.com/wallpapers/3e458b261af3b86381a26f48b0367db4_large.jpeg',
  text: 'Category'
}, {
  src: 'http://t.wallpaperweb.org/wallpaper/abstract/1440x1080/01355_smoke_1440x1080.jpg',
  text: 'Category'
}, {
  src: 'http://wallpoper.com/images/00/42/82/71/cityscapes-architecture_00428271.jpg',
  text: 'Category'
}, {
  src: 'http://www.dragonflyanimation.com/downloads/images/wallpaper/03-Dfly-Lambo-4x3-1440x1080.jpg',
  text: 'Category'
}]
var createSlides = function() {
  var doc = document;
  var frag = doc.createDocumentFragment();
  var len = slides.length;
  for (var i = 0; i < len; i++) {
    var li = frag.appendChild(doc.createElement('li'));
    li.classList.add('list')
    var img = li.appendChild(doc.createElement('img'));
    img.src = slides[i].src;
    img.setAttribute('class', 'slide blur-filter');
    var header = li.appendChild(doc.createElement('h1'));
    header.classList.add('vertical-text');
    var text = header.appendChild(doc.createTextNode(slides[i].text));
    doc.getElementById('accordion').appendChild(frag);
  }
  activeItem = $('#accordion').children(':first');
  $(activeItem).addClass('active');

  $('#accordion').children(':first').trigger('click');
}
*/