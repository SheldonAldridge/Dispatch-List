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


arCarsArray = []
//drag and Drop logo's

let dragged = null

const logos = document.querySelectorAll('li img');

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

    if(event.target.className === 'dropzone'){
        dragged.parentNode.removeChild(dragged)
        event.target.appendChild(dragged)
    }
   
    districtList()
})


//Armed Response data set functions

function districtList(){
    const dispatchParent = document.querySelector('.dispatch-list')
    dispatchParent.classList.remove('dispatch-hide');
    dispatchParent.classList.add('dropzone');

    const districtContainerEl = document.createElement('div');
    districtContainerEl.classList.add('district-container');
    districtContainerEl.classList.add('transformAppear');
    
    districtContainerEl.setAttribute('id', 'district-hide');

    districtContainerEl.innerHTML = `
    <div class="bg-primary dropzone" id="district-watch">

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
    <div class="car-area-container" id = "custom-table"></div>
  </div>

</div>`;

        const removeDrgDrp = document.querySelector('#drag-container')
        removeDrgDrp.style.display="none";
        
        districtContainerEl.removeAttribute('id', 'district-hide')

        dispatchParent.appendChild(districtContainerEl)

        const carareaContainer = document.querySelector('.car-area-container')
       
        
        //Array for table headings
        const tableHeadingarray = ["Area","Car 1", "Car 2", "Car 3"];

        const tableEl = document.createElement('table');
        tableEl.classList.add('table');

        const theadEl = document.createElement('thead');
        const trEl = document.createElement('tr');
        

        for (let i = 0; i < tableHeadingarray.length; i++) {
            
            const thEl = document.createElement('th');
            thEl.setAttribute('scope', 'col');
            thEl.textContent = tableHeadingarray[i]
            trEl.appendChild(thEl);
        }

        
        //Array for District Watch area
        const dwArea = ["DW1","DW2","DW3","DW4","DW5","DW6"];
        //List of District Watch Cars Array
        const dwcars = [" ","RR1","RR2", "RR3", "RR4","RR5", "RR6", "RR7","RR8", "RR9", "RR10","RR11", "RR12"];

        const tbodyEl = document.createElement('tbody');
        
        for (let a = 0; a < dwArea.length; a++) {

            const trEl = document.createElement('tr');

            const disTD = document.createElement('th');

            disTD.setAttribute('scope', 'row');

            disTD.textContent = dwArea[a];

            trEl.appendChild(disTD);

            
            console.log(disTD);
           
            
            for (let s = 0; s < tableHeadingarray.length - 1; s++) {

                const tdEl = document.createElement('td');
                const selEl = document.createElement('select');
                
                trEl.append(tdEl)
                tdEl.appendChild(selEl)

                console.log(tdEl);

                for (let c = 0; c < dwcars.length; c++){
                    const optEl = document.createElement('option');
                    optEl.append(dwcars[c]);
                    selEl.appendChild(optEl);
                }

            }
        
            tbodyEl.appendChild(trEl);
            
        }
        
        tableEl.appendChild(theadEl);
        theadEl.appendChild(trEl);
        tableEl.appendChild(tbodyEl);
        
        carareaContainer.appendChild(tableEl);
        arCarsArray.push(carareaContainer);
}

console.log(arCarsArray)