
module.exports = function getHTML (options, callback) {

var https = require('https');
  // the host can be thought of as the domain name you want to read from,
  // and the path is the resource - '/' is the root path, but if you wanted to read a
  // particular resource (like '/login/index.html'), that would be defined in the path
  var requestOptions = options;

  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    let responseData = '';

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length, ' \n');
      responseData  +=data;
    });

    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      var parsedData = responseData.toString();
      console.log('Response stream complete.');
      callback(parsedData);
    });

  });

};

// function printHTML (html) {
//   console.log(html);
// }

// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step4.html'
// };

// getHTML(requestOptions, printHTML);


  /* Add your code here */

