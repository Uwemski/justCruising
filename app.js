function setTheme() {
    var themeTransition = document.getElementById('themeContainer');
    const currentHour = new Date().getHours(); //so that we don't have to repeat ourself

    if (currentHour >= 7 && currentHour < 18) {
        themeContainer.style.backgroundColor = 'darkblue';
    } else { 
        themeContainer.style.backgroundColor = 'black';
    }
}

setTheme();

function toggle() {
    const button = document.getElementById('toggleButton');

    button.classList.toggle("on");

    if (button.classList.contains("on")) {
        // Do something when the button is turned on
    } else {
        // Do something when the button is turned off
    } 
}

toggle();