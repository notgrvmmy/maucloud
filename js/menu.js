document.querySelector('.width-switcher').addEventListener('click', () => {
    document.querySelector('article').classList.toggle('min');
    document.querySelector('header').classList.toggle('max');
    document.querySelector('.home-wrap .containerCont').classList.toggle('maxi');
    document.querySelector('.library-wrap .containerCont').classList.toggle('maxi');
    document.querySelector('.youandsettings .containerCont').classList.toggle('maxi');
})

function searchColorW() {
    document.querySelector('.search svg').style.fill = '#fff';
    document.querySelector('.search svg').style.opacity = '0';
    document.querySelector('header').style.paddingLeft = '0';
    document.querySelector('header input').style.color = '#fff';
    document.querySelector('header input').style.fontSize = '18px';
    document.querySelector('header input').style.paddingLeft = '10px';
    document.querySelector('.search').style.height = '100%';
    document.querySelector('.search').style.maxWidth = '40%';
    document.querySelector('.search').style.background = '#151515';
    document.querySelector('.search').style.borderRadius = '0';
    document.onkeydown = function(event) {
    if(event.code == 'Space') {
    }
    if(event.code == 'ArrowRight') {
    }
    if(event.code == 'ArrowLeft') {
    }
    if(event.code == 'ArrowUp') {
        window.scroll = event.preventDefault();
    }
    if(event.code == 'ArrowDown') {
        window.scroll = event.preventDefault();
    }
}

document.onkeyup = function(event) {
    if(event.code == 'Space') {
    }
    if(event.code == 'ArrowRight') {
        volume_slider = event.preventDefault();
    }
    if(event.code == 'ArrowLeft') {
        volume_slider = event.preventDefault();
    }
    if(event.code == 'ArrowUp') {
        window.scroll = event.preventDefault();
    }
    if(event.code == 'ArrowDown') {
        window.scroll = event.preventDefault();
    }
}
}

function searchColorB() {
    document.querySelector('.search svg').style.fill = '#999';
    document.querySelector('header').style.paddingLeft = '';
    document.querySelector('.search svg').style.opacity = '';
    document.querySelector('header input').style.paddingLeft = '';
    document.querySelector('header input').style.color = '';
    document.querySelector('.search').style.height = '';
    document.querySelector('header input').style.fontSize = '';
    document.querySelector('.search').style.maxWidth = '';
    document.querySelector('.search').style.borderRadius = '';
    document.querySelector('.search').style.background = '';
    document.onkeydown = function(event) {
    if(event.code == 'Space') {
        window.scroll = event.preventDefault();
    }
    if(event.code == 'ArrowRight') {
        volume_slider = event.preventDefault();
    }
    if(event.code == 'ArrowLeft') {
        volume_slider = event.preventDefault();
    }
    if(event.code == 'ArrowUp') {
        window.scroll = event.preventDefault();
    }
    if(event.code == 'ArrowDown') {
        window.scroll = event.preventDefault();
    }
}

document.onkeyup = function(event) {
    if(event.code == 'Space') {
        playpauseTrack();
        window.scroll = event.preventDefault();
    }
    if(event.code == 'ArrowRight') {
        let seekto = curr_track.duration * (seek_slider.value / 100);
        curr_track.currentTime = seekto + 5.5;
        volume_slider = event.preventDefault();
    }
    if(event.code == 'ArrowLeft') {
        let seekto = curr_track.duration * (seek_slider.value / 100);
        curr_track.currentTime = seekto - 5;
        volume_slider = event.preventDefault();
    }
    if(event.code == 'ArrowUp') {
        window.scroll = event.preventDefault();
    }
    if(event.code == 'ArrowDown') {
        window.scroll = event.preventDefault();
    }
}
}

document.querySelector('article .home').addEventListener('click', () => {
    document.querySelector('article .home').classList.add('active');
    document.querySelector('article .library').classList.remove('active');
    document.querySelector('article .yns').classList.remove('active');
    
    document.querySelector('.home-wrap').style.display = 'block';
    document.querySelector('.library-wrap').style.display = 'none';
    document.querySelector('.youandsettings').style.display = 'none';
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

document.querySelector('article .library').addEventListener('click', () => {
    document.querySelector('article .home').classList.remove('active');
    document.querySelector('article .library').classList.add('active');
    document.querySelector('article .yns').classList.remove('active');
    
    document.querySelector('.home-wrap').style.display = 'none';
    document.querySelector('.library-wrap').style.display = 'block';
    document.querySelector('.youandsettings').style.display = 'none';
    
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

document.querySelector('article .yns').addEventListener('click', () => {
    document.querySelector('article .home').classList.remove('active');
    document.querySelector('article .library').classList.remove('active');
    document.querySelector('article .yns').classList.add('active');
    
    document.querySelector('.home-wrap').style.display = 'none';
    document.querySelector('.library-wrap').style.display = 'none';
    document.querySelector('.youandsettings').style.display = 'block';
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

document.querySelector('.youandsettings .user-data button').addEventListener('mousedown', () => {
    document.querySelector('.youandsettings .user-data button').style.transform = 'scale(.9)';
})
document.querySelector('.youandsettings .user-data button').addEventListener('mouseup', () => {
    document.querySelector('.youandsettings .user-data button').style.transform = 'scale(1)';
})
document.querySelector('.youandsettings .user-data button').addEventListener('mouseleave', () => {
    document.querySelector('.youandsettings .user-data button').style.transform = 'scale(1)';
})