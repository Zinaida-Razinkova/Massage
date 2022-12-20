const openModalHero = document.querySelector('.hero__button');
const closeModalHero = document.querySelector('.hero__close');
const backdropHero = document.querySelector('.hero__backdrop');


openModalHero.addEventListener('click', openHeroModal);
closeModalHero.addEventListener('click', closeHeroModal);
backdropHero.addEventListener('click', backdropHeroClick);
openModalHero.addEventListener("click", toggleModal);
closeModalHero.addEventListener("click", toggleModal);

function openHeroModal() {
  window.addEventListener('keydown', pressEscapeHero);
  document.body.classList.add('hero__modal-show');
}
function closeHeroModal() {
  window.removeEventListener('keydown', pressEscapeHero);
  document.body.classList.remove('hero__modal-show');
}
function backdropHeroClick(event) {
  if (event.target === event.currentTarget) {
    closeHeroModal();
  }
}
function pressEscapeHero(event) {
  if (event.code === 'Escape') {
    closeHeroModal();
  }
}

 function toggleModal() {
    document.body.classList.toggle("modal-show");
  }


