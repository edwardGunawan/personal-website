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

    /* windows fade in and out when scrolling down  */
  function fade(pageLoad){
    $window = $(window);

    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    // var windowBottom = $(window).scrollTop() + $(window).innerHeight();

    var min = 0.1;
    var max = 0.9;
    var threshold = 0.04;

    $('.fade').each(function(){
      $element = $(this);

      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      /* check the location of each desired element */
      var objectBottom = $(this).offset().top + 200; //+ $(this).height();
      // console.log(" object Bottom" ,objectBottom);
      /* If the element is completely within bounds of the window, fade it in */
      // console.log('objet bottom is : '+ objectBottom + " window_bottom_position is :" + window_bottom_position);
      if(objectBottom < window_bottom_position){ // object comes into view (scrolling down)
        if($(this).css('opacity') < (min+threshold || pageLoad)){$(this).fadeTo(300,max);}
      }else {  // object goes out of view (scrolling up)
        // if($(this).css('opacity') >= (max-threshold || pageLoad)){$(this).fadeTo(100,min);}
      }
    });
  }

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

  fade(true); // fade element at first header

  // If scroll is not in the header section opacity turn to 1
  // console.log($('html').scrollTop());
  $(document).scroll(() => {

    // top arrow will fade when it is not the header
    arrow_fade();

    // fade element in when scrolling down the first time
    fade(true);
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

  // to make the section on top of the canvas
  $('.particles canvas').css({
    'position':'absolute',
    'height': '100vh',
    'width':'60%',
    'right':'0',
    'top':'0'
  });

});
