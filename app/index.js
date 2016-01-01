var css =  require('./scss/main.scss');

var sub = require('./js/sub');
var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World index</h1>';
app.appendChild(sub());
document.body.appendChild(app);