let account = document.querySelector('.account');
let accountBox = document.querySelector('.account-box');
let notif = document.querySelector('.notif')
let notifBox = document.querySelector('.messages-box');
let mask = document.querySelector('.mask');
let device = document.querySelector('.stroke');
let cntrlBtn = document.querySelector('.themeSwitch');
let glasses = document.querySelector('.monoSwitch');
var triggerJs = document.querySelector('.account');
var accountBoxTrigger = document.querySelector('.account-box');

account.addEventListener('click', () => {
    if(accountBox.classList.contains('active')) {
        accountBox.classList.remove('active');
        document.querySelector('.account .chevron').classList.remove('rotate');
        account.classList.remove('active');
    } else {
        accountBox.classList.add('active');
        document.querySelector('.account .chevron').classList.add('rotate');
        account.classList.add('active');
    }
});

window.addEventListener('click', function(e){
    accountBox.classList.remove('active');
    document.querySelector('.account .chevron').classList.remove('rotate');
    account.classList.remove('active');
 });

 triggerJs.addEventListener('click', function(e){
    e.stopPropagation();
 });

accountBoxTrigger.addEventListener('click', function(e){
    e.stopPropagation();
 });

notif.addEventListener('click', () => {
    notifBox.classList.add('active');
    mask.classList.add('active');
    document.querySelector('body').classList.add('lock');
});

document.querySelector('.close').addEventListener('click', () => {
    notifBox.classList.remove('active');
    mask.classList.remove('active');
    document.querySelector('body').classList.remove('lock');
});

mask.addEventListener('click', () => {
    notifBox.classList.remove('active');
    mask.classList.remove('active');
    document.querySelector('body').classList.remove('lock');
});

device.onclick = function() {
    document.querySelector('.device-error').classList.add('active');
}

document.querySelector('.device-error button').onclick = function() {
    document.querySelector('.device-error').classList.remove('active');
}

cntrlBtn.addEventListener('mousedown', () => {
    cntrlBtn.style.backgroundColor = '#000';
})

cntrlBtn.addEventListener('mouseup', () => {
    cntrlBtn.style.backgroundColor = '';
})

notif.addEventListener('mousedown', () => {
    notif.style.backgroundColor = '#000';
})

notif.addEventListener('mouseup', () => {
    notif.style.backgroundColor = '';
})

device.addEventListener('mousedown', () => {
    device.style.backgroundColor = '#000';
})

device.addEventListener('mouseup', () => {
    device.style.backgroundColor = '';
})

account.addEventListener('mousedown', () => {
    account.style.backgroundColor = '#000';
})

account.addEventListener('mouseup', () => {
    account.style.backgroundColor = '';
})

glasses.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('monochrome');
})

document.querySelector('.account-control .monoSwitch').addEventListener('mousedown', () => {
    document.querySelector('.account-control .monoSwitch').style.backgroundColor = '#000';
})

document.querySelector('.account-control .monoSwitch').addEventListener('mouseup', () => {
    document.querySelector('.account-control .monoSwitch').style.backgroundColor = '';
})

document.querySelector('.messages-box .controls button').addEventListener('mousedown', () => {
    document.querySelector('.messages-box .controls button').style.backgroundColor = '#000';
})

document.querySelector('.messages-box .controls button').addEventListener('mouseup', () => {
    document.querySelector('.messages-box .controls button').style.backgroundColor = '';
})

document.querySelector('.messages-box .controls .close').addEventListener('mousedown', () => {
    document.querySelector('.messages-box .controls .close').style.backgroundColor = '#000';
})

document.querySelector('.messages-box .controls .close').addEventListener('mouseup', () => {
    document.querySelector('.messages-box .controls .close').style.backgroundColor = '';
})

document.querySelector('.device-error .close').addEventListener('mousedown', () => {
    if( document.querySelector('html').classList.contains('light') ) {
    document.querySelector('.device-error .close').style.backgroundColor = '#bfbfbf';
    } else {
        document.querySelector('.device-error .close').style.backgroundColor = '#000';
    }
})

document.querySelector('.device-error .close').addEventListener('mouseup', () => {
    document.querySelector('.device-error .close').style.backgroundColor = '';
})