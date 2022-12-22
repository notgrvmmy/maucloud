let track_art = document.querySelector('.player .track-cover');
let track_name = document.querySelector('.player .track-info .track-name');
let track_artist = document.querySelector('.player .track-info .artist');

let playpause_btn = document.querySelector('.player .controlls .play-pause');
let next_btn = document.querySelector('.player .controlls .play-next');
let prev_btn = document.querySelector('.player .controlls .play-back');

let seek_slider = document.querySelector('.player .track-current .current-range');
let volume_slider = document.querySelector('.player .volume-current .volume-range');
let curr_time = document.querySelector('.player .track-current .current-time');
let total_duration = document.querySelector('.player .track-current .total-duration');
let curr_track = document.createElement('audio');
let volumeIco = document.querySelector('.player .volume-current .volume-ico');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : './img/artworks-24UT7UzWHbeNAya7-4R911Q-t500x500.jpg',
        name : 'Murder In My Mind',
        artist : 'Kordhell',
        music : './music/Murder In My Mind.mp3'
    },
    {
        img : './img/artworks-tuB9VPmWG9KyRAff-GNkdwQ-t240x240.jpg',
        name : 'Good Luck*+_ :)',
        artist : 'stedry',
        music : './music/Good luck.mp3'
    },
    {
        img : './img/artworks-018tcsaNdUylK6ZG-Zqmzmg-t500x500.jpg',
        name : 'Just for you.',
        artist : 'bsterthegawd',
        music : './music/Just for you.mp3'
    },
    {
        img : './img/20221203_101037.jpg',
        name : 'monika.',
        artist : 'grammy',
        music : './music/monika.mp3'
    },
    {
        img : './img/artworks-xIKYFG7WxtMucLZg-WXHkEw-t500x500.jpg',
        name : 'Live another day',
        artist : 'Kordhell',
        music : './music/Live another day.mp3'
    },
    {
        img : './img/artworks-5UYmyfkrHXX0Xx1M-miKWhw-t500x500.jpg',
        name : 'Arkham',
        artist : 'stedry',
        music : './music/Arkham.mp3'
    },
    {
        img : './img/artworks-yxgGEU2mB6JMnqpz-JQ4Znw-t240x240.jpg',
        name : 'conversations.',
        artist : 'san, anko, mariin',
        music : './music/conversations.mp3'
    },
    {
        img : './img/ab67616d0000b2734d7cfa6ee20d2b0445b7dd1d.jpg',
        name : 'LUMBERJACKD!',
        artist : 'JsMn',
        music : './music/LUMBERJACKD!.mp3'
    },
    {
        img : './img/artworks-0XvzB1hnkD95OT4r-ZtzgMQ-t240x240.jpg',
        name : 'without forgiveness (clip)',
        artist : 'kedalos',
        music : './music/without forgiveness (clip).mp3'
    },
    {
        img : './img/artworks-CQMZByZQMiornQEs-Rt4u3A-t500x500.jpg',
        name : 'this hard ngl',
        artist : 'stxrm808',
        music : './music/this hard ngl.mp3'
    },
    {
        img : './img/shake.jpg',
        name : 'SHAKE.',
        artist : 'CRIMTEK, SYNGE, AXIUM',
        music : './music/SHAKE.mp3'
    },
    {
        img : './img/artworks-QQWd6zyK2GV8UgyF-eJK6Ag-t500x500.jpg',
        name : 'shaterred.',
        artist : 'stedry',
        music : './music/shattered.mp3'
    },
    {
        img : './img/artworks-tjGU21ErJl9UCyla-w8RaUw-t240x240.jpg',
        name : 'the truth',
        artist : 'that boi retroll',
        music : './music/the truth.mp3'
    },
    {
        img : './img/artworks-UWT7E8mtZv0GszTV-qtgzZw-t500x500.jpg',
        name : 'vertigo.',
        artist : 'Scorpiioh, south',
        music : './music/vertigo.mp3'
    },
    {
        img : './img/artworks-fAmuFQYGzKD78KdV-fGvRIw-t500x500.jpg',
        name : 'golden.',
        artist : 'Scorpiioh, TSK',
        music : './music/golden.mp3'
    },
    {
        img : './img/artworks-GeWYjgahnKRdkzKP-teU1qg-t240x240.jpg',
        name : 'revelation',
        artist : 'stedry',
        music : './music/revelation.mp3'
    }
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
}   

function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}

function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    playpause_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M208 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16zM352 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16z"/></svg>';
    track_art.style.opacity = '1';
    track_art.style.transform = 'scale(1)';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    playpause_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z"/></svg>';
    track_art.style.opacity = '.8';
    track_art.style.transform = 'scale(.8)';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    if (isPlaying == false) {
        pauseTrack();
    } else {
       playTrack();
    }
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    if (isPlaying == false) {
        pauseTrack();
    } else {
       playTrack();
    }
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
    
    if(volume_slider.value >= 71) {volumeIco.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M232 416a23.88 23.88 0 01-14.2-4.68 8.27 8.27 0 01-.66-.51L125.76 336H56a24 24 0 01-24-24V200a24 24 0 0124-24h69.75l91.37-74.81a8.27 8.27 0 01.66-.51A24 24 0 01256 120v272a24 24 0 01-24 24zm-106.18-80zm-.27-159.86zM320 336a16 16 0 01-14.29-23.19c9.49-18.87 14.3-38 14.3-56.81 0-19.38-4.66-37.94-14.25-56.73a16 16 0 0128.5-14.54C346.19 208.12 352 231.44 352 256c0 23.86-6 47.81-17.7 71.19A16 16 0 01320 336z"/><path d="M368 384a16 16 0 01-13.86-24C373.05 327.09 384 299.51 384 256c0-44.17-10.93-71.56-29.82-103.94a16 16 0 0127.64-16.12C402.92 172.11 416 204.81 416 256c0 50.43-13.06 83.29-34.13 120a16 16 0 01-13.87 8z"/><path d="M416 432a16 16 0 01-13.39-24.74C429.85 365.47 448 323.76 448 256c0-66.5-18.18-108.62-45.49-151.39a16 16 0 1127-17.22C459.81 134.89 480 181.74 480 256c0 64.75-14.66 113.63-50.6 168.74A16 16 0 01416 432z"/></svg>';}
    if(volume_slider.value <= 50) {volumeIco.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M264 416.19a23.92 23.92 0 01-14.21-4.69l-.66-.51-91.46-75H88a24 24 0 01-24-24V200a24 24 0 0124-24h69.65l91.46-75 .66-.51A24 24 0 01288 119.83v272.34a24 24 0 01-24 24zM352 336a16 16 0 01-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82 0-19.36-4.66-37.92-14.25-56.73a16 16 0 0128.5-14.54C378.2 208.16 384 231.47 384 256c0 23.83-6 47.78-17.7 71.18A16 16 0 01352 336z"/><path d="M400 384a16 16 0 01-13.87-24C405 327.05 416 299.45 416 256c0-44.12-10.94-71.52-29.83-103.95A16 16 0 01413.83 136C434.92 172.16 448 204.88 448 256c0 50.36-13.06 83.24-34.12 120a16 16 0 01-13.88 8z"/></svg>';}
    if(volume_slider.value <= 30) {volumeIco.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M296 416.19a23.92 23.92 0 01-14.21-4.69l-.66-.51-91.46-75H120a24 24 0 01-24-24V200a24 24 0 0124-24h69.65l91.46-75 .66-.51A24 24 0 01320 119.83v272.34a24 24 0 01-24 24zM384 336a16 16 0 01-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82 0-19.36-4.66-37.92-14.25-56.73a16 16 0 0128.5-14.54C410.2 208.16 416 231.47 416 256c0 23.83-6 47.78-17.7 71.18A16 16 0 01384 336z"/></svg>';}
    if(volume_slider.value == 0) {volumeIco.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M344 416a23.92 23.92 0 01-14.21-4.69c-.23-.16-.44-.33-.66-.51l-91.46-74.9H168a24 24 0 01-24-24V200.07a24 24 0 0124-24h69.65l91.46-74.9c.22-.18.43-.35.66-.51A24 24 0 01368 120v272a24 24 0 01-24 24z"/></svg>';}
}

function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
function volumeMute() {
    curr_track.volume = 0;
    volume_slider.value = 0;
    
    if(volume_slider.value >= 71) {volumeIco.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M232 416a23.88 23.88 0 01-14.2-4.68 8.27 8.27 0 01-.66-.51L125.76 336H56a24 24 0 01-24-24V200a24 24 0 0124-24h69.75l91.37-74.81a8.27 8.27 0 01.66-.51A24 24 0 01256 120v272a24 24 0 01-24 24zm-106.18-80zm-.27-159.86zM320 336a16 16 0 01-14.29-23.19c9.49-18.87 14.3-38 14.3-56.81 0-19.38-4.66-37.94-14.25-56.73a16 16 0 0128.5-14.54C346.19 208.12 352 231.44 352 256c0 23.86-6 47.81-17.7 71.19A16 16 0 01320 336z"/><path d="M368 384a16 16 0 01-13.86-24C373.05 327.09 384 299.51 384 256c0-44.17-10.93-71.56-29.82-103.94a16 16 0 0127.64-16.12C402.92 172.11 416 204.81 416 256c0 50.43-13.06 83.29-34.13 120a16 16 0 01-13.87 8z"/><path d="M416 432a16 16 0 01-13.39-24.74C429.85 365.47 448 323.76 448 256c0-66.5-18.18-108.62-45.49-151.39a16 16 0 1127-17.22C459.81 134.89 480 181.74 480 256c0 64.75-14.66 113.63-50.6 168.74A16 16 0 01416 432z"/></svg>';}
    if(volume_slider.value <= 50) {volumeIco.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M264 416.19a23.92 23.92 0 01-14.21-4.69l-.66-.51-91.46-75H88a24 24 0 01-24-24V200a24 24 0 0124-24h69.65l91.46-75 .66-.51A24 24 0 01288 119.83v272.34a24 24 0 01-24 24zM352 336a16 16 0 01-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82 0-19.36-4.66-37.92-14.25-56.73a16 16 0 0128.5-14.54C378.2 208.16 384 231.47 384 256c0 23.83-6 47.78-17.7 71.18A16 16 0 01352 336z"/><path d="M400 384a16 16 0 01-13.87-24C405 327.05 416 299.45 416 256c0-44.12-10.94-71.52-29.83-103.95A16 16 0 01413.83 136C434.92 172.16 448 204.88 448 256c0 50.36-13.06 83.24-34.12 120a16 16 0 01-13.88 8z"/></svg>';}
    if(volume_slider.value <= 30) {volumeIco.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M296 416.19a23.92 23.92 0 01-14.21-4.69l-.66-.51-91.46-75H120a24 24 0 01-24-24V200a24 24 0 0124-24h69.65l91.46-75 .66-.51A24 24 0 01320 119.83v272.34a24 24 0 01-24 24zM384 336a16 16 0 01-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82 0-19.36-4.66-37.92-14.25-56.73a16 16 0 0128.5-14.54C410.2 208.16 416 231.47 416 256c0 23.83-6 47.78-17.7 71.18A16 16 0 01384 336z"/></svg>';}
    if(volume_slider.value == 0) {volumeIco.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M344 416a23.92 23.92 0 01-14.21-4.69c-.23-.16-.44-.33-.66-.51l-91.46-74.9H168a24 24 0 01-24-24V200.07a24 24 0 0124-24h69.65l91.46-74.9c.22-.18.43-.35.66-.51A24 24 0 01368 120v272a24 24 0 01-24 24z"/></svg>';} 
}

//function volMin() {
//    volume_slider.style.width = '0';
//    document.querySelector('.volume-current').style.width = '35px';
//    document.querySelector('.volume-current').style.minWidth = '35px';
//}
//
//function volMax() {
//    volume_slider.style.width = '';
//    document.querySelector('.volume-current').style.width = '';
//    document.querySelector('.volume-current').style.minWidth = '';
//}

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