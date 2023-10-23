//button click to toggle navbar to open/close

const navButton = document.querySelector('.btn-dark');
const navbar = document.querySelector('nav');
const arrowOpen = document.querySelector('#arrow');
const menutoggle = document.querySelector('#toggle-menu');
let isOpen = false

navButton.addEventListener('click', () =>{

    isOpen = !isOpen
    
    if(isOpen){
        navbar.classList.add('close-nav');
        navbar.classList.remove('open-nav');
        arrowOpen.classList.add('rotate-close');
        arrowOpen.classList.remove('rotate-open');
        menutoggle.classList.add('close-nav-btn');
        menutoggle.classList.remove('open-nav-btn');
        
    }
    else{
        navbar.classList.add('open-nav');
        navbar.classList.remove('close-nav');
        arrowOpen.classList.add('rotate-open');
        arrowOpen.classList.remove('rotate-close');
        menutoggle.classList.add('open-nav-btn');
        menutoggle.classList.remove('close-nav-btn');
    }
})

//drag and Drop logo's

let dragged = null

const logos = document.querySelectorAll('li img');
console.log(logos)

logos.forEach(logo =>{

    logo.addEventListener('dragstart', (event) =>{
    event.target.classList.add('dragstart')
    dragged = event.target
})

logo.addEventListener('drag', (event) =>{
    event.target.classList.add('drag-start')
    dragged = event.target
})

})

const dragover = document.getElementById('drag-container');

dragover.addEventListener('dragover', (event) =>{
    event.target.classList.add('dragover')
    event.target.classList.add('dragover')
    event.preventDefault();
})

dragover.addEventListener('drop', (event) =>{

    event.preventDefault();

    if(event.target.className === 'dropzone'){
        dragged.parentNode.removeChild(dragged)
        event.target.appendChild(dragged)

       
    }

    console.log("logo dropped");
})

//Armed Response data set functions

function DistrictList(){
    
}

