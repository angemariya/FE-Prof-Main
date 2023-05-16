const {btnLeft, btnRight} = document.querySelectorAll('button');
const wrapper = document.querySelector('.wrapper');
displacementAmount = 200;
btnLeft.addEventListener('click', ()=>{
  wrapper.style.left = `${displacementAmount}px`;
})

function moveGallery() {
    wrapper.style.left = 
  }