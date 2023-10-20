//button click to toggle navbar to open/close

const navButton = document.querySelector('.btn-dark');
const navbar = document.querySelector('nav');
const arrowOpen = document.querySelector('#arrow');
let isOpen = false

navButton.addEventListener('click', () =>{

    isOpen = !isOpen
    
    if(isOpen){
        navbar.classList.add('close-nav');
        navbar.classList.remove('open-nav');
        arrowOpen.classList.add('rotate-close');
        arrowOpen.classList.remove('rotate-open');
    }
    else{
        navbar.classList.add('open-nav');
        navbar.classList.remove('close-nav');
        arrowOpen.classList.add('rotate-open');
        arrowOpen.classList.remove('rotate-close');
    }

})

