/*
  Sweet Scrolling options
*/
var options = {
  trigger: '[data-scroll]', // selector for trigger
  duration:1000, // specify animation duration in integer
  easing: 'easeOutQuint', // specify the pattern of easing
  offset: 0, // Specify the value of offset the scroll position in pixels
  vertical: true, // enable vertical scroll
  horizontal: false, // disable horizontal scroll
  preventDefault:true, // Cancels the container element click events
  stopPropagation: true, // Prevents further propagation of the container element click event in the bubling phase

  // Callbacks
  before: null,
  after: null,
  cancel: null,
  complete: null,
  step: null,
}


$(document).ready(function(){
  const controller = new SweetScroll(options);

  function arrow_fade(){
    var currWindowPosition = $(window).scrollTop();
    var headerPosition = $('header').offset().top;

    // Setting up the array up after the user scroll from the header
    if(currWindowPosition > headerPosition+ $(this).height()){
      $('.arrow-up').css('opacity','1');
      $('#arrow-down').css('opacity','0');
    }else {
      $('.arrow-up').css('opacity','0');
      $('#arrow-down').css('opacity','1');
    }
  }

  // If scroll is not in the header section opacity turn to 1
  // console.log($('html').scrollTop());
  $(document).scroll(function() {

    // top arrow will fade when it is not the header
    arrow_fade();
  });


  // create particles canvas for the header
  $('.particles').particleground({
    dotColor: '#2980b9',
    lineColor: '#2980b9',
    directionX: 'right',
    particleRadius:5,
    lineWidth:0.5,
    parallax:true // create that parallax affect
  });

  // background-link hover create a border underneath
  $('.background-link').hover( function() { // handler-in
    $(this).css(
      {
        "border-bottom": "3px solid black"
      }
    );
  }, function() { // handler-out
    $(this).css(
      {
        "border-bottom": "none"
      }
    );
  });

  // to make the section on top of the canvas
  $('.particles canvas').css({
    'position':'absolute',
    'height': '100vh',
    'width':'60%',
    'right':'0',
    'top':'0'
  });

  // scroll reveal
  window.sr = ScrollReveal({
    reset:false,
    distance:'20px',
    duration:600,
    scale:1,
    mobile:true,
    viewFactor:0.3,
    easing: 'cubic-bezier(0.35, 0,0.335, 1)'
  });

  sr.reveal(document.getElementById('header'),{origin:'right'});
  sr.reveal(document.getElementById('background'));
  sr.reveal(document.getElementById('experience'),{viewFactor: 0.2});
  sr.reveal(document.getElementById('project'),{viewFactor: 0.05});

});
