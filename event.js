const events = require('events');
var EventEmitter = new events.EventEmitter();

EventEmitter.on('print', function(n1,n2){
    console.log("SUM =-> ",n1+n2);
})
