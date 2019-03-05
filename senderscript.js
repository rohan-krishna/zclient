var ZabbixSender = require('node-zabbix-sender');
var Sender = new ZabbixSender({ host: `${process.argv[2]}` });
var ping = require('ping');


var hosts = require('./hostReqList.json');

// console.log(hosts[0].params.interfaces[0].ip);

// process.exit();

hosts.forEach(host => {
    ping.sys.probe(host.params.interfaces[0].ip, function(isAlive){
        // var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
        // console.log(msg);
        var ping_status = isAlive ? 1 : 0;
        // console.log(ping_status)
        Sender.addItem(host.params.interfaces[0].ip, "tk_icmpping", ping_status).send(function(err, res) {
            if(err) { throw err; }

            console.dir(res)
        });
    });
});
