var getHTML = require('./http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  var upper = html.toUpperCase();
  console.log(upper);
}

getHTML(requestOptions, printHTML);