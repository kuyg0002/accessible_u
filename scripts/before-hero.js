/*
 * JavaScript for Accessible University Demo Site
 * http://uw.edu/accesscomputing/AU
 *
 * before-carousel.js = Custom inaccessible Carousel
 */

$(document).ready(function() {
  // get all slides
  var $slides = $('.slide');
  var slideCount = $slides.length;

  // save a pointer to the current slide
  var currentIndex = 0;

  // add previous/next buttons
  var navButtons = $('<div>');
  var prevIcon = $('<img>').attr({
    'src': 'images/8675309-arrow-left.png'
  });
  var nextIcon = $('<img>').attr({
    'src': 'images/8675309-arrow-right.png'
  });
  var prevButton = $('<div>')
    .addClass('btn-prev')
    .on('click',function() {
      currentIndex = updateIndex(currentIndex,'prev',slideCount);
      showSlide(currentIndex);
    })
    .html(prevIcon);
  var nextButton = $('<div>')
    .addClass('btn-next')
    .on('click',function() {
      currentIndex = updateIndex(currentIndex,'next',slideCount);
      showSlide(currentIndex);
    })
    .html(nextIcon);

  navButtons.append(prevButton,nextButton);
  $('#carousel').append(navButtons);

var prevButton = $('<div>')
    .addClass('btn-prev')
    .attr('tabindex', '0') // to make the element focusable
    .on('click keydown', function(event) {
      if (event.type === 'click' || event.key === 'Enter' || event.key === ' ') {
        currentIndex = updateIndex(currentIndex,'prev',slideCount);
        showSlide(currentIndex);
        event.preventDefault(); // to prevent default action of space or enter
      }
    })
    .html(prevIcon);
    let currentSlide = 0;
    const slides = document.querySelectorAll("#carousel .slide");
    const totalSlides = slides.length;
    const nextButton = document.querySelector(".carousel-control-next");
    const prevButton = document.querySelector(".carousel-control-prev");
    
    nextButton.addEventListener("click", function() {
        slides[currentSlide].classList.remove("active");  // Assuming "active" class displays the slide
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add("active");
    });
    
    prevButton.addEventListener("click", function() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        slides[currentSlide].classList.add("active");
    });
    
var nextButton = $('<div>')
    .addClass('btn-next')
    .attr('tabindex', '0') // to make the element focusable
    .on('click keydown', function(event) {
      if (event.type === 'click' || event.key === 'Enter' || event.key === ' ') {
        currentIndex = updateIndex(currentIndex,'next',slideCount);
        showSlide(currentIndex);
        event.preventDefault(); // to prevent default action of space or enter
      }
    })
    .html(nextIcon);

 // add slide indicators (lentils)
  var lentils = $('<ul>').addClass('lentils');
  for (var i=0; i<slideCount; i++) {
    var lentil = $('<li>')
      .attr('data-slide',i)
      .on('click',function() {
        showSlide($(this).data('slide'));
      });
    lentils.append(lentil);
  }
  $('#carousel').append(lentils);

  // show the first one
  showSlide(0);
});

function showSlide(index) {

  // hide the current visible slide
  $('.slide:visible').removeClass('current');
  // and show the new one
  $('.slide').eq(index).addClass('current');

  // also update the slide indicator
  $('.lentils li.active').removeClass('active');
  $('.lentils li').eq(index).addClass('active');

}

function updateIndex(index,direction,count) {

  if (direction === 'prev') {
    if (index == 0) {
      // this is the first side, loop around to last slide
      return count-1;
    }
    else {
      return index-1;
    }
  }
  else if (direction == 'next') {
    if (index == (count - 1)) {
      // this is the last side, loop around to first slide
      return 0;
    }
    else {
      return index+1;
    }
  }
  return 0;
}
