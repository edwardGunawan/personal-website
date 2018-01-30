$(document).ready(function(){

  /* initializing all the elments in the fornt_page.js */
  var location = $('#location').html();
  var p_aboutPage = $('#introduction p').html();
  var table = $('#tableTemplate').html();
  var projectList = $('#listTemplate').html();

  $menu = $('.pure-menu-item');
  var color=['#ec407a','#7e57c2','#66bb6a','#ff7043','#afb42b', '#bdbdbd', '#a1887f','#aed581','#26c6da'];
  var count = 0;
  var terms = $('#renderThings li');
  // console.log(table);


  /* All the content */
  var h5_frontPageLocation= {
    location:"San Diego, California",
  };

  var intro = {
    introduction: ' I\'m Edward Huang from UC San Diego.\
     I love to exercise, travel, read books;\
    and design clean, \
     <span id="specialKeyword">wellCrafted</span>, software.'
  }

  var educationContent ={
    title:"Education",
    trs:[
      {key:'UC San Diego', value:'B.S. Computer Science'},
      {key:'Antic. Graduation', value:'Spring 2018'}
    ]
  };

  var industryContent = {
    title:"Industry",
    trs:[
      {key:'Macy\'s Tech', value:'Software Engineer Intern (06/17 - 08/17)'},
      {key:'IBM', value:'Software Engineer Intern (04/17 - 06/17)'},
      {key:'Mesh.edu',value:'Software Developer (09/16 - 03/17)'},
      {key:'Chen Lab BioNanomaterials', value:'Software Developer (06/16 - 12/16)'}
    ]
  };

  var projectContent ={
    projects:[
      { link:'#', name:'Portfolio', target:'', img:'/assets/v1/image/compressed/Portfolio.min.png', class:'fade first-image-child'},
      { link:'http://react-timer-app-gunawan.herokuapp.com/#/?_k=vfeyg7', target:'_blank', name:'ReactTimerApp', img:'/assets/v1/image/compressed/ReactTimerApp-min.png', class:'fade last-two-image'},
      { link:'http://trackme-gunawan.herokuapp.com/#/?_k=i05q8p', target:'_blank', name:'TrackMe', img:'/assets/v1/image/compressed/TrackMeResize-min.png', class:'fade last-two-image'}
    ]
  };




  function renderTemplate(elementToGet,  objContent, elementToRender){
    var compiled_template = Handlebars.compile(elementToGet);
    var content = objContent;
    var rendered = compiled_template(objContent);
    // console.log(rendered);
    $(elementToRender).html(rendered);
  }


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

    $(".fade").each(function(){
      $element = $(this);

      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);

      /* check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).height();
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

  function menuMouseOver($elemnt){
    $elemnt.hover(
      function(){

        $(this).children('a').css('border-bottom', getColor());

      }, function(){
        $(this).children('a').css('border-bottom', 'none');

      }
    );
  };

  function getColor(){
    if(count == color.length){
      count = 0
    }
    count++;
    return ('4px solid ' + color[count]);
  }


  function changeText(){

    var ct = $('#things').data('term') || 0;
    // console.log(terms.eq([ct]).text());
    $('#things').data('term', ct == terms.length-1 ? 0: ct+1)
    .text(terms.eq([ct]).text())
    .fadeIn().delay(2000).fadeOut(200,changeText);
  }



  /* rendering the template */
  renderTemplate(location, h5_frontPageLocation,'#location');
  renderTemplate(p_aboutPage,intro,'#introduction p');
  renderTemplate(table,educationContent,'#tableEducation');
  renderTemplate(table,industryContent,'#tableIndustry');
  renderTemplate(projectList,projectContent,'.project-list');
  fade(true); //fade element on pageLoad
  $(window).scroll(function(){fade(true);});  // fade elements on scroll
  menuMouseOver($menu);
  $(changeText);




});
