var css =  require('./main.css');

var sub = require('./sub');
var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World index</h1>';
app.appendChild(sub());
document.body.appendChild(app);