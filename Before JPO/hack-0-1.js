// Initialisation
console.log("Hello world, 6");

// Effacer le contenu
function erase(element) {
  element.hover(function(){
    $(this).animate({
      opacity:0
    },{
      duration:150
    }).delay(8000);
  },function(){
    $(this).animate({
      opacity:1
    },{
      duration:750
    });
  });
}

// Countdown script import
$.when(
    $.getScript( "http://copyright.rip/misc/jquery.countdown.min.js" ),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
).done(function(){
  var count_style = {
    "position" : "absolute",
    "top" : "50px",
    "font-size" : "75pt",
    "line-height":"70pt",
    "font-weight":"bolder",
    "z-index":-999
  }
  $(".container-fluid").append("<h1 class=\"countdown\"></h1>")
  $(".countdown").css(count_style);
  $(function() {
      $('.countdown').countdown({
          date: "March 23, 2017 10:00:00"
      });
  });
});

erase($("h2, h4, input, a, img, span,.mc-field-group"));
