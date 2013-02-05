define(function() {
  console.log('Screening is loaded.');

  var screenArea = null;

  return {

    setScreen: function(screen) {
      screenArea = screen;
    },

    present: function(slide) {
      screenArea.html('<div class="slide_text">' + slide.text + '</div>');
      var content_height = jQuery('.slide_text').height();
      var screen_height = screenArea.height();
      jQuery('.slide_text').css('margin-top', (screen_height - content_height) * 0.5);
      jQuery('.slide_text').hide()
      jQuery('.slide_text').slideDown('fast');
    }

  };
});
