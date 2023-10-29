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

const arArray = []

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

    DistrictList()
    console.log("logo dropped");
})

//Armed Response data set functions

function DistrictList(){
    
    const dispatchParent = document.querySelector('.dispatch-list')
    
    const districtContainerEl = document.createElement('div');
    districtContainerEl.classList.add('district-container');
    districtContainerEl.classList.add('transformAppear');
    districtContainerEl.setAttribute('id', 'district-hide');

    districtContainerEl.innerHTML = `
    <div class="bg-primary" id="district-watch">

    <img
      src="./resources/Icons/close.svg"
      class="img-fluid"
      id="close"
      alt="close-icon"
    />

  <div class="center-content">
    
    <img
      src="./resources/images/District Watch.png"
      class="img-fluid"
      alt="District Watch Logo"
      draggable="false"
    />

    <h5>District Watch Armed Response</h5>
    <p></p>
    <div class="car-area-container"></div>
  </div>

</div>`;

        const removeDrgDrp = document.querySelector('#drag-container')
        
        districtContainerEl.removeAttribute('id', 'district-hide')

        dispatchParent.appendChild(districtContainerEl)



    console.log("District Function triggered")
    
}



