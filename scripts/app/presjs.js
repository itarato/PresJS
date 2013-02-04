define(function() {
  console.log('PresJS is loaded.');

  var slide = 0;
  var items = null;

  return {

    start: function(rawXML) {
      console.log('Start presentation.');

      var parser = new DOMParser();
      var xmldata = parser.parseFromString(rawXML, 'application/xml');

      var nodes = xmldata.getElementsByTagName('node');

      var length = nodes.length;
      for (var idx = 0; idx < length; idx++) {
        var node = nodes[idx];

        slide.push({
          text: node.getAttribute('TEXT')
        });
      }
    },

    next: function() {
      slide++;
    },

    prev: function() {
      slide--;
    },

    showSlide: function() {

    }

  };
});