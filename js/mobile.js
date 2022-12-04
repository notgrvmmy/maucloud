let saA = document.querySelector('.sa-11 a');
let sa = document.querySelector('.sa-11');
let cl = document.querySelector('.sa-11 .close');
let accBtn = document.querySelector('.ac-10');
let accCloseBtn = document.querySelector('.uns .account-info .close');
let uns = document.querySelector('.uns');

let homeB = document.querySelector('.nav-menu-footer.home');
let albumsB = document.querySelector('.nav-menu-footer.albums');
let libraryB = document.querySelector('.nav-menu-footer.library');
let dotB = document.querySelector('.dot-footer');

saA.addEventListener('click', () => {
    sa.classList.toggle('at-11');
    document.querySelector('.sa-in').focus();
    accBtn.classList.toggle('aс-01');
    document.querySelector('.l-9').classList.toggle('vis');
    document.querySelector('.player').classList.toggle('hid');
    document.querySelector('footer').classList.toggle('hide');
});

accBtn.addEventListener('click', () => {
    uns.classList.add('vis');
    document.querySelector('body').classList.add('lock');
})

accCloseBtn.addEventListener('click', () => {
    uns.classList.remove('vis');
    document.querySelector('body').classList.remove('lock');
})

homeB.addEventListener('click', () => {
    albumsB.classList.remove('active');
    homeB.classList.add('active');
    libraryB.classList.remove('active');
    dotB.style.left = '16.3%';
    document.title = "MauCloud" + " " + "-" + " " + "Home";
})

albumsB.addEventListener('click', () => {
    albumsB.classList.add('active');
    homeB.classList.remove('active');
    libraryB.classList.remove('active');
    dotB.style.left = '49.5%';
    document.title = "MauCloud" + " " + "-" + " " + "Albums";
})

libraryB.addEventListener('click', () => {
    albumsB.classList.remove('active');
    homeB.classList.remove('active');
    libraryB.classList.add('active');
    dotB.style.left = '83%';
    document.title = "MauCloud" + " " + "-" + " " + "Library";
})

document.querySelector('.player').addEventListener('click', () => {
    document.querySelector('.player').classList.add('full');
})