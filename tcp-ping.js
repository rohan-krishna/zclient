// var tcpp = require('tcp-ping');

// tcpp.probe("192.168.0.31", 80, function(err, available) {
//     console.log(available);
// });

// tcpp.ping({ address: "192.168.0.31"}, (err, data) => {
//     return console.log(data)
// })

var ping = require('ping');
 
var hosts = ['192.168.0.96'];

hosts.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
        console.log(msg);
    });
});
