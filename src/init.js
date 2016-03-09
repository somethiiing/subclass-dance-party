$(document).ready(function() {
  window.DeathStarArray = [];
  window.numShot = 0;


  var XWingNode = new makeBlinkyDancer(100, 100, Math.random() * 2000,
    '<img class="XWing" src="http://vignette4.wikxxxia.nocookie.net/starwars/images/3/3d/X-wing_Ultimate.png/revision/latest?cb=20150508162001" width="128" height="128">'
  );

  $('body').append(XWingNode.$node);

  // $('.addXWing').on('click', function(event) {
  //   //var dancerMakerFunctionName = $(this).data('XWing-maker-function-name');
  //   var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
  //   var dancerMakerFunction = window[dancerMakerFunctionName];

  //   var dancer = new dancerMakerFunction(
  //     $("body").height() * Math.random(),
  //     $("body").width() * Math.random(),
  //     Math.random() * 2000,
  //     '<img class="XWing" src="http://vignette4.wikxxxia.nocookie.net/starwars/images/3/3d/X-wing_Ultimate.png/revision/latest?cb=20150508162001" width="128" height="128">'
  //   );
  //   XWingArray.push(dancer);
  //   $('body').append(dancer.$node);
  // });

  $('.addDeathStar').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('DeathStar-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new makeJumpingDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      '<img class="DeathStar" src="http://www.clubpenguinwiki.info/static/images/www/thumb/8/88/DeathStarPlanet.PNG/200px-DeathStarPlanet.PNG" width="128" height="128">'
    );
    DeathStarArray.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.LineUp').on('click', function(event) {
    for(var i = 0; i < DeathStarArray.length; i++){
      var styleSettings = {
        top: 750,
        left: i * 128
      };
      debugger;
      DeathStarArray[i].$node.css(styleSettings);
    }

    for(var i = 0; i < XWingArray.length; i++){
      var styleSettings = {
        top: 30,
        left: i * 128
      };
      XWingArray[i].$node.clearQueue();
      XWingArray[i].$node.css(styleSettings); 

    }
  });

  $('body').on('click','.DeathStar',function(){
    $(this).animate({top: "-=500"},2000);
    $(this).animate({top: "+=500"},1000);
    
  });


  $('.shoot').on('click',function(){
      
    

    for(var i = 0; i < DeathStarArray.length; i++){
      var shot = $('<img class="shot" src="http://static.omelete.uol.com.br/static/star_wars/tiiro.png" width="128" height="128">');
      $('body').append(shot);
      var positionXwing = XWingNode.$node.position();
      var positionDeath = DeathStarArray[i].$node.position();
      shot.css({left: positionXwing.left, top: positionXwing.top},1000);
      shot.animate({left: positionDeath.left, top: positionDeath.top}, 1000);
      $(shot).fadeToggle();
    }
  });

  // $('body').on('click','.XWing',function(){
  //   $(this).animate({top: "-=500"},2000);
  //   $(this).animate({left: "+=500"},2000);
  //   $(this).animate({top: "+=500"},2000);
  //   $(this).animate({left: "-=500"},2000);
  // });

  //http://static.omelete.uol.com.br/static/star_wars/tiiro.png

  $('body').on('click','.XWing',function(){
    var start = 0;
    var y = 0;
    var x = 0;
    for(var i=0; i<19; i++){
      y = (100 * Math.sin(start*2));
      x = 100 * Math.cos(start*2);
      start +=0.5;
      $(this).animate({top: "+="+y, left: "+="+x},100);
    }
  });
  

  $("body").keydown(function(event) { 
    var $mover = $(".XWing");

    var addTop = function(diff) {
      $mover.css("top", ($mover.position().top + diff) + "px"); 
      //if using tracked position:
      //   top += diff;
      //   $mover.css("top", top) + "px");
    };

    var addLeft = function(diff) {
      $mover.css("left", ($mover.position().left + diff) + "px");
      //if using tracked position:
      //   left += diff;
      //   $mover.css("left", left) + "px");
    };

    var fireShot = function(){
      var shot = $('<img class="shot" src="http://static.omelete.uol.com.br/static/star_wars/tiiro.png" width="128" height="128">');
      $('body').append(shot);

      var positionXwing = XWingNode.$node.position();
      shot.css({left: positionXwing.left, top: positionXwing.top},1000);
      shot.animate({left: "+=200", top: "+=200"}, 1000);
      $(shot).fadeToggle();
    };

    switch(event.keyCode) {
    case 37: //left
      addLeft(-15); break; 
    case 38: //up
      addTop(-15); break;
    case 39: //right
      addLeft(15); break;
    case 40: //down
      addTop(15); break;
    case 32:
      fireShot();
    }
  });

});

