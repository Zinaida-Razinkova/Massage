const openModalAbout = document.querySelector('.about__button');
const closeModalAbout = document.querySelector('.modal-about_close');
const backdropAbout = document.querySelector('.about__backdrop');


openModalAbout.addEventListener('click', openAboutModal);
closeModalAbout.addEventListener('click', closeAboutModal);
backdropAbout.addEventListener('click', backdropAboutClick);
openModalAbout.addEventListener("click", toggleModal);
closeModalAbout.addEventListener("click", toggleModal);

function openAboutModal() {
  window.addEventListener('keydown', pressEscapeAbout);
  document.body.classList.add('about__modal-show');
}
function closeAboutModal() {
  window.removeEventListener('keydown', pressEscapeAbout);
  document.body.classList.remove('about__modal-show');
}
function backdropAboutClick(event) {
  if (event.target === event.currentTarget) {
    closeAboutModal();
    toggleModal()
  }
}
function pressEscapeAbout(event) {
  if (event.code === 'Escape') {
    closeAboutModal();
    toggleModal();
  }
}

  function toggleModal() {
    document.body.classList.toggle("modal-show");
  }