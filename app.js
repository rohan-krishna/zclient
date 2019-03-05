/**
ANCHOR Workflow
1.Get Auth token
2.TKScan.js ( hostID, TemplateID, auth_token )
3.Make a list of existing scanned hosts
4.Send the new ones and/or scan the TCP status for hosts
*/

// app to return auth_token
const chalk = require('chalk');
const program = require('commander');

const welcome_message = "Welcome to zclient poller. Let's get some information to get started.\nIn the next steps we'll be requiring your Zabbix server URL and Authentiacation details.\nPlease keep the information ready.\n";

const auth_token_message = "Please enter the following command to fetch authentication token from the server.\n\nnode getauthtoken --host ZABIX_HOST --user USERNAME --password PASSWORD";


// Print the welcome message
console.log(chalk.green(welcome_message));
// ask for getting auth_token_message
console.log(chalk.green(auth_token_message));

// let's get auth_token
let auth_token = null;
