let triggerJs = document.querySelector('header input');
let triggerJsS = document.querySelector('header button');

let home = document.querySelector('footer .home');
let library = document.querySelector('footer .library');
let more = document.querySelector('footer .more');

document.querySelector('header button').addEventListener('click', () => {
    document.querySelector('header input').classList.add('search');
    document.querySelector('header input').focus();
    document.querySelector('header button').classList.add('search');
})

window.addEventListener('click', function(e){
    if(triggerJs.value.length >= 1) {
        document.querySelector('header button').classList.add('search');
        document.querySelector('header input').classList.add('search');
    } else {
        document.querySelector('header button').classList.remove('search');
        document.querySelector('header input').classList.remove('search');
    }
 });

 triggerJs.addEventListener('click', function(e){
    e.stopPropagation();
 });

triggerJsS.addEventListener('click', function(e){
    e.stopPropagation();
 });

home.addEventListener('click', () => {
    home.classList.add('active');
    library.classList.remove('active');
    more.classList.remove('active');
})

library.addEventListener('click', () => {
    home.classList.remove('active');
    library.classList.add('active');
    more.classList.remove('active');
})

more.addEventListener('click', () => {
    home.classList.remove('active');
    library.classList.remove('active');
    more.classList.add('active');
})