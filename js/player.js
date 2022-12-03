let track_art = document.querySelector('.player .track-info .cover');
let track_name = document.querySelector('.player .track-info .track-name .name');
let track_artist = document.querySelector('.player .track-info .track-name .artist');

let playpause_btn = document.querySelector('.player .player-controlls .play');
let next_btn = document.querySelector('.player .player-controlls .play-next');
let prev_btn = document.querySelector('.player .player-controlls .play-back');

let seek_slider = document.querySelector('.player .current-wrap .slider-range');
let volume_slider = document.querySelector('.player .volume-wrap .slider-range');
let curr_time = document.querySelector('.player .current-wrap .current-time');
let total_duration = document.querySelector('.player .current-wrap .total-time');
let curr_track = document.createElement('audio');
let volumeIco = document.querySelector('.player .volume-wrap .volume-ico');
let repeatBtn = document.querySelector('.player .play-type');

let dwnlBtn = document.querySelector('.downloadBtn');
let dwnlWin = document.querySelector('.download-window');
let dwnlArt = document.querySelector('.download-window .info .cover');
let dwnlName = document.querySelector('.download-window .info .track-info .track-name');
let dwnlArtist = document.querySelector('.download-window .info .track-info .artist');
let dwnlCancel = document.querySelector('.download-window .buttons .cancel');
let dwnlApply = document.querySelector('.download-window .buttons .download');
var triggerjs = document.querySelector('.account');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

window.addEventListener('click', function(e){
    dwnlWin.classList.remove('active');
 });

 triggerjs.addEventListener('click', function(e){
    e.stopPropagation();
 });

dwnlWin.addEventListener('click', function(e){
    e.stopPropagation();
 });

dwnlBtn.addEventListener('click', function(e){
    e.stopPropagation();
 });

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
    dwnlArt.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    dwnlName.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    dwnlArtist.textContent = music_list[track_index].artist;

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
    playpause_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Pause</title><path d="M208 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16zM352 432h-48a16 16 0 01-16-16V96a16 16 0 0116-16h48a16 16 0 0116 16v320a16 16 0 01-16 16z"/></svg>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    playpause_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z"/></svg>';
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
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
    
    if(volume_slider.value >= 70) {volumeIco.innerHTML = '<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3_50)"><path d="M45.3125 81.25C44.314 81.25 43.3419 80.9296 42.5391 80.3359C42.4944 80.3049 42.4514 80.2717 42.4102 80.2363L24.5625 65.625H10.9375C9.6943 65.625 8.50201 65.1311 7.62294 64.2521C6.74386 63.373 6.25 62.1807 6.25 60.9375V39.0625C6.25 37.8193 6.74386 36.627 7.62294 35.7479C8.50201 34.8689 9.6943 34.375 10.9375 34.375H24.5605L42.4062 19.7637C42.4475 19.7283 42.4905 19.6951 42.5352 19.6641C43.2332 19.1506 44.06 18.8407 44.9236 18.7688C45.7872 18.6969 46.6538 18.8658 47.4272 19.2568C48.2006 19.6477 48.8504 20.2454 49.3046 20.9834C49.7588 21.7214 49.9995 22.5709 50 23.4375V76.5625C50 77.8057 49.5061 78.998 48.6271 79.8771C47.748 80.7561 46.5557 81.25 45.3125 81.25ZM62.5 65.625C61.9667 65.6249 61.4424 65.4883 60.9768 65.2283C60.5113 64.9682 60.12 64.5934 59.8402 64.1394C59.5605 63.6854 59.4016 63.1674 59.3786 62.6346C59.3556 62.1019 59.4693 61.5721 59.709 61.0957C61.5625 57.4102 62.502 53.6738 62.502 50C62.502 46.2148 61.5918 42.5898 59.7188 38.9199C59.3599 38.1838 59.3044 37.3362 59.5641 36.5595C59.8238 35.7828 60.3781 35.1391 61.1076 34.7669C61.8371 34.3948 62.6836 34.3238 63.4649 34.5694C64.2461 34.815 64.8998 35.3575 65.2852 36.0801C67.6152 40.6484 68.75 45.2031 68.75 50C68.75 54.6602 67.5781 59.3379 65.293 63.9043C65.0327 64.4218 64.6336 64.8567 64.1404 65.1606C63.6472 65.4644 63.0793 65.6252 62.5 65.625Z"/><path d="M71.875 75C71.3264 75.0001 70.7874 74.8558 70.3123 74.5816C69.8371 74.3074 69.4425 73.9129 69.1681 73.4378C68.8938 72.9627 68.7493 72.4238 68.7493 71.8752C68.7493 71.3266 68.8937 70.7876 69.168 70.3125C72.8613 63.8848 75 58.498 75 50C75 41.373 72.8652 36.0234 69.1758 29.6992C68.7712 28.984 68.6645 28.1383 68.8789 27.345C69.0933 26.5518 69.6115 25.8749 70.3213 25.4609C71.0311 25.047 71.8754 24.9292 72.6714 25.1332C73.4674 25.3372 74.151 25.8465 74.5742 26.5508C78.6953 33.6152 81.25 40.002 81.25 50C81.25 59.8496 78.6992 66.2676 74.584 73.4375C74.3095 73.913 73.9146 74.3077 73.439 74.582C72.9634 74.8563 72.424 75.0005 71.875 75V75Z"/></g></svg>';}
    if(volume_slider.value <= 50) {volumeIco.innerHTML = '<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3_51)"><path d="M45.3125 81.25C44.314 81.25 43.3419 80.9296 42.5391 80.3359C42.4944 80.3049 42.4514 80.2717 42.4102 80.2363L24.5625 65.625H10.9375C9.6943 65.625 8.50201 65.1311 7.62294 64.2521C6.74386 63.373 6.25 62.1807 6.25 60.9375V39.0625C6.25 37.8193 6.74386 36.627 7.62294 35.7479C8.50201 34.8689 9.6943 34.375 10.9375 34.375H24.5605L42.4062 19.7637C42.4475 19.7283 42.4905 19.6951 42.5352 19.6641C43.2332 19.1506 44.06 18.8407 44.9236 18.7688C45.7872 18.6969 46.6538 18.8658 47.4272 19.2568C48.2006 19.6477 48.8504 20.2454 49.3046 20.9834C49.7588 21.7214 49.9995 22.5709 50 23.4375V76.5625C50 77.8057 49.5061 78.998 48.6271 79.8771C47.748 80.7561 46.5557 81.25 45.3125 81.25ZM62.5 65.625C61.9667 65.6249 61.4424 65.4883 60.9768 65.2283C60.5113 64.9682 60.12 64.5934 59.8402 64.1394C59.5605 63.6854 59.4016 63.1674 59.3786 62.6346C59.3556 62.1019 59.4693 61.5721 59.709 61.0957C61.5625 57.4102 62.502 53.6738 62.502 50C62.502 46.2148 61.5918 42.5898 59.7188 38.9199C59.3599 38.1838 59.3044 37.3362 59.5641 36.5595C59.8238 35.7828 60.3781 35.1391 61.1076 34.7669C61.8371 34.3948 62.6836 34.3238 63.4649 34.5694C64.2461 34.815 64.8998 35.3575 65.2852 36.0801C67.6152 40.6484 68.75 45.2031 68.75 50C68.75 54.6602 67.5781 59.3379 65.293 63.9043C65.0327 64.4218 64.6336 64.8567 64.1404 65.1606C63.6472 65.4644 63.0793 65.6252 62.5 65.625Z"/></g></svg>';}
    if(volume_slider.value == 0) {volumeIco.innerHTML = '<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3_52)"><path d="M45.1875 81.25C44.1882 81.2493 43.2155 80.9283 42.4121 80.334C42.3672 80.3027 42.3262 80.2695 42.2832 80.2344L24.4199 65.6055H10.8125C9.5693 65.6055 8.37701 65.1116 7.49794 64.2325C6.61886 63.3535 6.125 62.1612 6.125 60.918V39.0762C6.125 37.833 6.61886 36.6407 7.49794 35.7616C8.37701 34.8825 9.5693 34.3887 10.8125 34.3887H24.416L42.2793 19.7598C42.3223 19.7246 42.3633 19.6914 42.4082 19.6602C43.1066 19.146 43.9339 18.8356 44.7981 18.7635C45.6623 18.6915 46.5296 18.8606 47.3035 19.2521C48.0773 19.6436 48.7274 20.2421 49.1814 20.981C49.6354 21.7199 49.8755 22.5703 49.875 23.4375V76.5625C49.875 77.8057 49.3811 78.998 48.5021 79.8771C47.623 80.7561 46.4307 81.25 45.1875 81.25Z"/><path d="M59 40L69 50M79 60L69 50M69 50L79 40L59 60" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></g></svg>';}
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

document.onkeydown = function(event) {
    if(event.code == 'Space') {
        playpauseTrack();
    }
    if(event.code == 'KeyP') {
        playpauseTrack();
    }
    if(event.code == 'ArrowRight') {
        nextTrack()
    }
    if(event.code == 'ArrowLeft') {
        prevTrack()
    }
}

repeatBtn.addEventListener('click', () => {
    document.querySelector('.player .play-type span').classList.toggle('active');
    if(document.querySelector('.player .play-type span').classList.contains('active')) {
        curr_track.loop = true;
    } else {
        curr_track.loop = false;
    }
})

function actDwnlWin() {
    dwnlWin.classList.add('active');
}

function cancelDownload() {
    dwnlWin.classList.remove('active');
}

var link = document.createElement('a');

function applyDownload() {
    link.setAttribute('href', music_list[track_index].music);
    link.setAttribute('download', music_list[track_index].artist + " " + "-" + " " + music_list[track_index].name);
    onload=link.click();
}