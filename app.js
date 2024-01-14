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