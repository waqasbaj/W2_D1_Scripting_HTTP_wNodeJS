var getHTML = require('./http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {

  console.log(html.toLowerCase());
}

getHTML(requestOptions, printHTML);