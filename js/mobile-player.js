let track_art = document.querySelector('.player .track-info .cover');
let player_bg = document.querySelector('.player .bg');
let track_name = document.querySelector('.player .track-info .info .name');
let track_artist = document.querySelector('.player .track-info .info .artist');

let playpause_btn = document.querySelector('.player .controls .playpause');

let curr_time = document.querySelector('.player .controls .curr-time');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : '../img/artworks-24UT7UzWHbeNAya7-4R911Q-t500x500.jpg',
        name : 'Murder In My Mind',
        artist : 'Kordhell',
        music : '../music/Murder In My Mind.mp3'
    },
    {
        img : '../img/artworks-tuB9VPmWG9KyRAff-GNkdwQ-t240x240.jpg',
        name : 'Good Luck*+_ :)',
        artist : 'stedry',
        music : '../music/Good luck.mp3'
    },
    {
        img : '../img/artworks-018tcsaNdUylK6ZG-Zqmzmg-t500x500.jpg',
        name : 'Just for you.',
        artist : 'bsterthegawd',
        music : '../music/Just for you.mp3'
    },
    {
        img : '../img/20221203_101037.jpg',
        name : 'monika.',
        artist : 'grammy',
        music : '../music/monika.mp3'
    },
    {
        img : '../img/artworks-xIKYFG7WxtMucLZg-WXHkEw-t500x500.jpg',
        name : 'Live another day',
        artist : 'Kordhell',
        music : '../music/Live another day.mp3'
    },
    {
        img : '../img/artworks-5UYmyfkrHXX0Xx1M-miKWhw-t500x500.jpg',
        name : 'Arkham',
        artist : 'stedry',
        music : '../music/Arkham.mp3'
    },
    {
        img : '../img/artworks-yxgGEU2mB6JMnqpz-JQ4Znw-t240x240.jpg',
        name : 'conversations.',
        artist : 'san, anko, mariin',
        music : '../music/conversations.mp3'
    },
    {
        img : '../img/ab67616d0000b2734d7cfa6ee20d2b0445b7dd1d.jpg',
        name : 'LUMBERJACKD!',
        artist : 'JsMn',
        music : '../music/LUMBERJACKD!.mp3'
    },
    {
        img : '../img/artworks-0XvzB1hnkD95OT4r-ZtzgMQ-t240x240.jpg',
        name : 'without forgiveness (clip)',
        artist : 'kedalos',
        music : '../music/without forgiveness (clip).mp3'
    },
    {
        img : '../img/artworks-CQMZByZQMiornQEs-Rt4u3A-t500x500.jpg',
        name : 'this hard ngl',
        artist : 'stxrm808',
        music : '../music/this hard ngl.mp3'
    },
    {
        img : '../img/shake.jpg',
        name : 'SHAKE.',
        artist : 'CRIMTEK, SYNGE, AXIUM',
        music : '../music/SHAKE.mp3'
    },
    {
        img : '../img/artworks-QQWd6zyK2GV8UgyF-eJK6Ag-t500x500.jpg',
        name : 'shaterred.',
        artist : 'stedry',
        music : '../music/shattered.mp3'
    },
    {
        img : '../img/artworks-tjGU21ErJl9UCyla-w8RaUw-t240x240.jpg',
        name : 'the truth',
        artist : 'that boi retroll',
        music : '../music/the truth.mp3'
    },
    {
        img : '../img/artworks-UWT7E8mtZv0GszTV-qtgzZw-t500x500.jpg',
        name : 'vertigo.',
        artist : 'Scorpiioh, south',
        music : '../music/vertigo.mp3'
    },
    {
        img : '../img/artworks-fAmuFQYGzKD78KdV-fGvRIw-t500x500.jpg',
        name : 'golden.',
        artist : 'Scorpiioh, TSK',
        music : '../music/golden.mp3'
    },
    {
        img : '../img/artworks-GeWYjgahnKRdkzKP-teU1qg-t240x240.jpg',
        name : 'revelation',
        artist : 'stedry',
        music : '../music/revelation.mp3'
    }
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    player_bg.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
}

function reset(){
    curr_time.textContent = "00:00";
}

function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    playpause_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M208 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16zM352 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16z"/></svg>';
    player_bg.style.opacity = '.2';
    track_art.style.transform = 'scale(1)';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    playpause_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z"/></svg>';
    player_bg.style.opacity = '.1';
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
    playTrack();
    player_bg.style.opacity = '0';
    setTimeout(animBg, 1000);
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}

function nextTrackSwipe(){
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
        player_bg.style.opacity = '.1';
    } else {
       playTrack();
       player_bg.style.opacity = '.2';
    }
    player_bg.style.opacity = '0';
    setTimeout(animBg, 1000);
}
function prevTrackSwipe(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    if (isPlaying == false) {
        pauseTrack();
        player_bg.style.opacity = '.1';
    } else {
       playTrack();
        player_bg.style.opacity = '.2';
    }
}

function animBg() {
    player_bg.style.opacity = '.2';
}

function setUpdate(){
    if(!isNaN(curr_track.duration)){

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
    }
}

document.querySelector('.player').addEventListener('touchstart', handleTouchStart, false);
document.querySelector('.player').addEventListener('touchmove', handleTouchMove, false);
document.querySelector('.player').addEventListener('touchend', handleTouchEnd, false);

let x1 = null;
let y1 = null;

function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
}

function handleTouchEnd(event) {
    const touch = event.touches[0];
}

function handleTouchMove(event) {
    if(!x1 || !y1) {
        return false;
    }
    
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;
    
    if(Math.abs(xDiff) > Math.abs(yDiff)) {
        if(xDiff > 0) {
            prevTrackSwipe();
            player_bg.style.opacity = '0';
            setTimeout(animBg, 1000);
            document.querySelector('.player').classList.add('right');
            setTimeout(swipeR, 300);
        }
        else {
            nextTrackSwipe();
            player_bg.style.opacity = '0';
            setTimeout(animBg, 1000);
            document.querySelector('.player').classList.add('left');
            setTimeout(swipeL, 300);
        }
    } else {
        
    }
    
    x1 = null;
    y1 = null;
}

function swipeR() {
    document.querySelector('.player').classList.remove('right');
}

function swipeL() {
    document.querySelector('.player').classList.remove('left');
}