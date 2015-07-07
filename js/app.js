$(document).ready(function(){
	$('[data-typer-targets]').typer();

	(function(){

//Shout out to @nickisnoble for writing and allowing me to use this.

  // List triggers, color pairs
  var colors = [
    ['.twitter',  '#53ade9'],
    ['.github', '#4183C4'],
    ['.linkedin', '#0279b1'],
  ];

  // Cache Targets
  var brandBG = $('.brand-bg'),
      writing = $('#color');
      links = $('.link')


  // Loop through pairs
  for(var i = 0; i < colors.length; i++){
    colorChange( colors[i][0], colors[i][1] );
  }

  function colorChange(trigger, color) {
    $(trigger).hover(
      function() { // Write new color to css classes
        var theColor = color;
        brandBG.css({ background: theColor });
        links.css({ color: "#fff" });
        writing.css({color: "#fff"});
      },
      function() { // Remove new styling
        brandBG.removeAttr('style');
        links.removeAttr('style');
        writing.removeAttr('style');
      }
    );
  }

  // slide in an image unwrap
  $('p > img').unwrap();
})($);
});