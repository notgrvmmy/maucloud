let custom = document.querySelector('.link-nav');
let general = document.querySelector('.general');
let cus = document.querySelector('.customize');
let back = document.querySelector('.customize .back');
let topSet = document.querySelector('.customize .sets .top');
let bottomSet = document.querySelector('.customize .sets .bottom');
let player = document.querySelector('.player');
let footer = document.querySelector('footer');

let player_bgc = document.querySelector('.player .track-current .background');
let checkThumb = document.querySelector('.check-thumb');
let checkThumbAnim = document.querySelector('.check-thumb.anim');

custom.addEventListener('click', () => {
    general.classList.add('hide');
    cus.classList.add('act');
})

back.addEventListener('click', () => {
    general.classList.remove('hide');
    cus.classList.remove('act');
})

bottomSet.addEventListener('click', () => {
    bottomSet.classList.add('active');
    topSet.classList.remove('active');
    player.classList.add('pos-b');
    footer.classList.add('pos-t');
    setTimeout(opacityNullUns, 0);
    setTimeout(opacityFullUns, 700);
    saA.addEventListener('click', () => {
        document.querySelector('.player').classList.toggle('hidTwo');
        footer.classList.toggle('dwn');
    })
})

topSet.addEventListener('click', () => {
    bottomSet.classList.remove('active');
    topSet.classList.add('active');
    player.classList.remove('pos-b');
    footer.classList.remove('pos-t');
    setTimeout(opacityNullUns, 0);
    setTimeout(opacityFullUns, 700);
})

function opacityNullUns() {
    uns.style.opacity = '0';
    uns.style.transform = 'translateY(200%)';
}

function opacityFullUns() {
    uns.style.opacity = '1';
    uns.style.transform = 'translateY(0)';
}

function profLight() {
    if(checkThumb.checked) {
        player_bgc.style.display = 'block';
        uns.style.background = '';
    } else {
        if (document.querySelector('html').classList.contains('dark')) {
            player_bgc.style.display = 'none';
            uns.style.background = '#000';
        } else {
            player_bgc.style.display = 'none';
            uns.style.background = '#fff';
        }
    }
}

function anim() {
    if(checkThumbAnim.checked) {
        document.querySelector('html').classList.remove('noAnim');
    } else {
        document.querySelector('html').classList.add('noAnim');
    }
}