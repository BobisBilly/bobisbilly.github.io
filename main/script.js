window.onload = function() {
    require('dotenv').config();
    var text = document.getElementById("test");

    getData();
}

async function getData() {
    var test = fetch("https://discord.com/api/v9/users/1022602321370296371", {
        headers: {
            'Application': `Bot: ${process.env.DATACOLLECTOR}`,
            'Content-Type': 'application/json'
        }
    });
    var idk = (await test).json;

    console.log(idk);
}