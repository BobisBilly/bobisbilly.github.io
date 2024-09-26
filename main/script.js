var enabled = false;

function incorrect() {
    if (enabled != true) {
        document.getElementById("title-text").innerHTML = 'This sites pourpose is to view <a href="https://discord.com/users/1022602321370296371" target="_blank" class="user">@BobisBilly</a>\'s current projects.';
        enabled = true;
    } else {
        document.getElementById("title-text").innerHTML = 'This sites purpose is to view <a href="https://discord.com/users/1022602321370296371" target="_blank" class="user">@BobisBilly</a>\'s current projects.';
        enabled = false;
    }
}
