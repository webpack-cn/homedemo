

import './scss/main.scss';


import sub from './js/sub';
import $ from 'jquery';
import moment from 'moment';

let app = document.createElement('div');

const myPromise = Promise.resolve(42);


myPromise.then((number) => {
  $('body').append('<p>promise result is ' + number + ' now is ' + moment().format() + '</p>');
});

app.innerHTML = '<h1>Hello World index</h1>';

app.appendChild(sub());

document.body.appendChild(app);

