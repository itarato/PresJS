define(function() {
  console.log('PresJS is loaded.');

  var slide = 0;
  var items = [];

  var getNoteDom = function(node) {
    var children = node.childNodes;
    var child_lenght = children.length;
    for (var i = 0; i < child_lenght; i++) {
      if (children[i].nodeName == 'richcontent') {
        return children[i].getElementsByTagName('body')[0];
      }
    }
    return null;
  };

  return {

    start: function(rawXML) {
      console.log('Start presentation.');

      var parser = new DOMParser();
      var xmldata = parser.parseFromString(rawXML, 'application/xml');

      var nodes = xmldata.getElementsByTagName('node');

      var length = nodes.length;
      for (var idx = 0; idx < length; idx++) {
        var node = nodes[idx];



        items.push({
          text: node.getAttribute('TEXT'),
          link: node.getAttribute('LINK'),
          note: getNoteDom(node)
        });
      }
      console.log(items);
    },

    next: function() {
      var length = items.length;
      slide >= (length - 1) ? null : slide++;
      return items[slide];
    },

    prev: function() {
      slide > 0 ? slide-- : null;
      return items[slide];
    },

    current: function() {
      return items[slide];
    }

  };
});