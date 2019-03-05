const $ = jQuery = require('jquery');
const path = require('path');
const fs = require('fs');

// let's work on the form getting processed
$(document).ready(function() {

    const settingObject = localStorage.getItem("settingObject")

    if(settingObject) {
        $('.settings-display').slideDown();
        $('.settings-display').text(settingObject);
    } else {
        $('.settings-display').slideUp();
    }

    $('#settingsForm').submit((e) => {
        e.preventDefault();

        let ip_host = $(this).find('input[name="ip_host"]').val();
        let username = $(this).find('input[name="username"]').val();
        let password = $(this).find('input[name="password"]').val();
        // let password_confirmed = $(this).find('input[name="password_confirmed"]').val();
        let from_ip = $(this).find('input[name="from_ip"]').val();
        let to_ip = $(this).find('input[name="tp_ip"]').val();
        let host_group_ID = $(this).find('input[name="host_group_ID"]').val();
        let template_ID = $(this).find('input[name="template_ID"]').val();

        // if(password === password_confirmed) {
        //     console.log("Passed >>> Proceed.")
        //     $('.password-error-div').hide();
        // } else {
        //     $('.password-error-div').show();
        // }
        
        let settingObject = {
            "ip_host" : ip_host,
            "username" : username,
            "password" : password,
            "from_ip" : from_ip,
            "to_ip" : to_ip,
            "host_group_ID" : host_group_ID,
            "template_ID" : template_ID,
        }

        localStorage.setItem("settingObject",JSON.stringify(settingObject, undefined, 4));

        $('#settingsForm')[0].reset();

        alert("Configuration has been saved.")

        window.location.reload();

    })
})