var helpVisibility = false;

function helpPopup() {
    if (helpVisibility != true) {
        document.getElementById("help-popup").classList.add("show");
        helpVisibility = true;
    } else {
        document.getElementById("help-popup").classList.remove("show");
        helpVisibility = false;
    }
}
