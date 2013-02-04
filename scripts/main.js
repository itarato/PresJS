requirejs.config({
  baseUrl: 'scripts/lib',
  paths: {
    app: '../app'
  },
  urlArgs: 'bust=' +  (new Date()).getTime()
});

requirejs(['jquery', 'app/presjs'], function($, PresJS) {
  console.log('Main file is loaded.');

  $('#submit').click(function() {
    PresJS.start($('#mmxml').val());
  });

  $('#next').click(function() {
    PresJS.next();
  });

  $('#prev').click(function() {
    PresJS.prev();
  });

});
