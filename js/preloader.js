function loadData() {
  return new Promise((resolve, reject) => {

    setTimeout(resolve, 1500);
  })
}

loadData()
  .then(() => {
    let preloaderEl = document.querySelector('.preloader');
    preloaderEl.classList.add('hidden');
    preloaderEl.classList.remove('visible');
    document.querySelector('body').classList.remove('lock');
    preloaderEl.classList.add('loaded');
  });