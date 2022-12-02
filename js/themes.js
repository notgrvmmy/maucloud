let themeBtn = document.querySelector('.themeSwitch');

themeBtn.addEventListener('click', () => {
    if( document.querySelector('html').classList.contains('light') ) {
        document.querySelector('html').classList.remove('light');
        document.querySelector('html').classList.add('dark');
        themeBtn.classList.add('rotate');
    } else {
        document.querySelector('html').classList.add('light');
        document.querySelector('html').classList.remove('dark');
        themeBtn.classList.remove('rotate');
    }
})

    if( document.querySelector('html').classList.contains('light') ) {
        themeBtn.classList.remove('rotate');
    } else {
        themeBtn.classList.add('rotate');
    }