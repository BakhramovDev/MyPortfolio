const burger = document.querySelector('.burger')
const header_nav = document.querySelector('.header_nav')

function burgeractive(){
    header_nav.classList.toggle('active');
     
}
burger.addEventListener('click' , burgeractive);

 