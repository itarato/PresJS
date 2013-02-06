define(function() {
  console.log('Screening is loaded.');

  var screenArea = null;

  return {

    setScreen: function(screen) {
      screenArea = screen;
    },

    present: function(slide) {
      var content = '<div class="slide_content">';

      if (slide.text) {
        content = content + '<div class="slide_text">' + slide.text + '</div>';
      }

      if (slide.note) {
        content = content + '<div class="slide_note">' + jQuery('<div />').html(slide.note).html() + '</div>';
      }

      content = content + '</div>';

      screenArea.html(content);

      if (slide.link) {
        screenArea.css('background-image', 'url(' + slide.link + ')');
      }
      else {
        screenArea.css('background-image', 'none');
      }

      var content_height = jQuery('.slide_content').height();
      var screen_height = screenArea.height();
      jQuery('.slide_content').css('margin-top', (screen_height - content_height) * 0.5);
      jQuery('.slide_content').hide()
      jQuery('.slide_content').slideDown('fast');
    }

  };
});
