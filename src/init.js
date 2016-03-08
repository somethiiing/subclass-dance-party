$(document).ready(function() {
  window.dancers = [];

  $('.addXWing').on('click', function(event) {
    //var dancerMakerFunctionName = $(this).data('XWing-maker-function-name');
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      '<img class="XWing" src="http://vignette4.wikxxxia.nocookie.net/starwars/images/3/3d/X-wing_Ultimate.png/revision/latest?cb=20150508162001" width="128" height="128">'
    );
    $('body').append(dancer.$node);
  });

  $('.addDeathStar').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('DeathStar-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new makeJumpingDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      '<img class="DeathStar" src="http://www.clubpenguinwiki.info/static/images/www/thumb/8/88/DeathStarPlanet.PNG/200px-DeathStarPlanet.PNG" width="128" height="128">'
    );
    $('body').append(dancer.$node);
  });

  $('.LineUp').on('click', function(event) {
    var styleSettings = {
      top: 0,
      left: 0
    };
    $('body').find('.DeathStar').css(styleSettings);

    var styleSettings = {
      top: 700,
      left: 0
    };
    $('body').find('.XWing').css(styleSettings);
  });

  $('.DeathStar').click(function(){
    //$(this).animate({left: "+=500"},2000);
    $(this).css('background','red');
  });


});

