document.onkeyup = function(event) {
    if(event.code == 'KeyA') {
        if(accountBox.classList.contains('active')) {
            accountBox.classList.remove('active');
            document.querySelector('.account .chevron').classList.remove('rotate');
            account.classList.remove('active');
        } else {
            accountBox.classList.add('active');
            document.querySelector('.account .chevron').classList.add('rotate');
            account.classList.add('active');
        }
    }
    if(event.code == 'KeyM') {
        document.querySelector('html').classList.toggle('monochrome');
    }
    if(event.code == 'KeyN') {
        notifBox.classList.toggle('active');
        mask.classList.toggle('active');
        document.querySelector('body').classList.toggle('lock');
    }
    if(event.code == 'KeyD') {
        document.querySelector('.device-error').classList.toggle('active');
    }
    if(event.code == 'KeyS') {
        document.querySelector('.search input').focus();
    }
    if(event.code == 'KeyR') {
        window.location.reload();
    }
    if(event.code == 'KeyF') {
        document.querySelector('html').requestFullscreen();
    }
    if(event.code == 'KeyT') {
        if( document.querySelector('html').classList.contains('light') ) {
        document.querySelector('html').classList.remove('light');
        document.querySelector('html').classList.add('dark');
        themeBtn.classList.add('rotate');
    } else {
        document.querySelector('html').classList.add('light');
        document.querySelector('html').classList.remove('dark');
        themeBtn.classList.remove('rotate');
    }
    }
}
