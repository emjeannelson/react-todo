var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp: ', now.unix());

var timestamp = 1494402934;

var currentMoment = moment.unix(timestamp);

console.log(currentMoment.format('MMMM Do, YYYY @ h:mm A'));
