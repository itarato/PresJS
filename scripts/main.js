requirejs.config({
  baseUrl: 'scripts/lib',
  paths: {
    app: '../app'
  },
  urlArgs: 'bust=' +  (new Date()).getTime()
});

requirejs(['jquery', 'app/presjs', 'app/screening'], function($, PresJS, Screening) {
  console.log('Main file is loaded.');

  $('#slide_theme').change(function(){
    $('#slide_sample,#screen').attr('class', $('#slide_theme').val());
  });

  $('#submit').click(function() {
    PresJS.start($('#mmxml').val());
    $('#screen,#pagers').show();
    $('#page').hide();
    Screening.present(PresJS.current());
  });

  $('#next').click(function() {
    Screening.present(PresJS.next());
  });

  $('#prev').click(function() {
    Screening.present(PresJS.prev());
  });

  Screening.setScreen($('#screen'));

});
