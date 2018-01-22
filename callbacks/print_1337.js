var getHTML = require('./http-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, ob);





function ob(password)
{
 var string = password.replace(/a/g, "4")
   .replace(/e/g, "3")
   .replace(/o/g, 0)
   .replace(/l/g, 1)
   .replace(/s/g, 5)
   .replace(/t/g, 7)
   .replace(/ck/g, 'x')
   .replace(/er/g, '0r')
   .replace(/you/g, 'j00')

 console.log(string);
}



