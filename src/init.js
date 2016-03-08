$(document).ready(function() {
  window.dancers = [];

  $('.addDotButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      //'<span class="dancer"></span>'
      
      '<img class="rocket" src="http://vignette4.wikia.nocookie.net/starwars/images/3/3d/X-wing_Ultimate.png/revision/latest?cb=20150508162001" width="128" height="128">'
    );
    $('body').append(dancer.$node);
  });

  $('.addImageButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('image-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000,
      '<img class="rocket" src="http://www.clubpenguinwiki.info/static/images/www/thumb/8/88/DeathStarPlanet.PNG/200px-DeathStarPlanet.PNG" width="128" height="128">'
    );
    $('body').append(dancer.$node);
  });
});

