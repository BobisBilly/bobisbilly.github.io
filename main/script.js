window.onload = function() {
    var text = document.getElementById("test");

    getData();
}

async function getData() {
    var test = fetch("https://discord.com/api/v9/users/1022602321370296371", {
        headers: {
            
        }
    });
    var idk = (await test).json;

    console.log(idk);
}