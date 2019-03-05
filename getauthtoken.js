'use strict';
const axios = require('axios');

if (process.argv.length < 5) {
    console.log("3 arguments are required");
    console.log("usage:\n  > node getauthtoken.js <host_ip> <username> <password>\n\n");
    process.exit();
}

// console.log(process.argv[3])

const getAuthToken = axios({
    method: 'post',
    headers: { 'Content-Type' : "application/json-rpc" },
    url: `http://${process.argv[2]}/zabbix/api_jsonrpc.php`,
    data: {
        "jsonrpc" : "2.0",
        "method" : "user.login",
        "params" : {
            "user" : `${process.argv[3]}`,
            "password" : `${process.argv[4]}`
        },
        "id": 1,
        "auth": null,
    }
}).then(res => {
    console.log(res.data)
})
.catch(err => console.log(err))

// export default getAuthToken;
// 09a850484a75022fb143a9c726870662