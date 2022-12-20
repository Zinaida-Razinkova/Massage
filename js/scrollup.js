const btnTop = document.querySelector('.scrollup');

btnTop.addEventListener('click', (e) =>
  
window.scrollTo({
    top,
    behavior: "smooth"
})
)