/*District Watch*/
const dwAreasContainer = document.querySelector('.areadw');
const dwValues = ['DW1', 'DW2', 'DW3', 'DW4', 'DW5', 'DW6', ' '];

for (let i = 0; i < dwValues.length; i++) {

    const dwAreaDiv = document.createElement('div');
    dwAreaDiv.classList.add('dw-area');
    dwAreaDiv.textContent = dwValues[i];
    dwAreasContainer.appendChild(dwAreaDiv);
}


const optionCarValues = ['RR 1', 'RR 2', 'RR 3', 'RR 4', 'RR 5',
 'RR 6','RR 7','RR 8','RR 9','RR 10','RR 11','RR 12'];

const dwCarsContainer = document.querySelector('.dw-cars');

for (let i = 0; i < 6; i++){
    const dwcarsdiv = document.createElement('div');
    dwcarsdiv.classList.add('dw-cars');

    const selectElement = document.createElement('select');
    selectElement.name = `dw-cars`;
    selectElement.id = `dw-cars`;

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Car';
    selectElement.appendChild(defaultOption);

    for (const value of optionCarValues){
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    }

    dwCarsContainer.appendChild(selectElement);
}

const dwCarstwoContainer = document.querySelector('.dw-cars-two');

for (let i = 0; i < 6; i++){
    const dwcarsdiv = document.createElement('div');
    dwcarsdiv.classList.add('dw-cars-two');

    const selectElement = document.createElement('select');
    selectElement.name = `dw-cars-two`;
    selectElement.id = `dw-cars-two`;

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Car';
    selectElement.appendChild(defaultOption);

    for (const value of optionCarValues){
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    }

    dwCarstwoContainer.appendChild(selectElement);
}

const dwCarsthreeContainer = document.querySelector('.dw-cars-three');

for (let i = 0; i < 6; i++){
    const dwcarsdiv = document.createElement('div');
    dwcarsdiv.classList.add('dw-cars-three');

    const selectElement = document.createElement('select');
    selectElement.name = `dw-cars-three`;
    selectElement.id = `dw-cars-three`;

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Car';
    selectElement.appendChild(defaultOption);

    for (const value of optionCarValues){
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    }

    dwCarsthreeContainer.appendChild(selectElement);
}

/*District Basset*/
const dbAreasContainer = document.querySelector('.areadb');

const dbValues = ['DB1', 'DB2', 'DB3', 'DB4', 'DB5', 'DB6','DB7',
'DB8'];

for (let i = 0; i < dbValues.length; i++) {

    const dbAreaDiv = document.createElement('div');
    dbAreaDiv.classList.add('db-area');
    dbAreaDiv.textContent = dbValues[i];
    dbAreasContainer.appendChild(dbAreaDiv);
}

const dbcarsContainer = document.querySelector('.db-cars');

const optionDBCars = ['BR 01', 'BR 02', 'BR 03', 'BR 04', 'BR 05', 'BR 06','BR 07',
'BR 08','BR 09','BR 10','BR 11'];

for (let i = 0; i < 8; i++){
    const dbcarsdiv = document.createElement('div');
    dbcarsdiv.classList.add('db-cars');

    const selectElement = document.createElement('select');
    selectElement.name = `db-cars`;
    selectElement.id = `db-cars`;

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Car';
    selectElement.appendChild(defaultOption);

    for (const value of optionDBCars){
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    }

    dbcarsContainer.appendChild(selectElement);
}

const dbcarstwoContainer = document.querySelector('.db-cars-two');

for (let i = 0; i < 8; i++){
    const dwcarsdiv = document.createElement('div');
    dwcarsdiv.classList.add('db-cars-two');

    const selectElement = document.createElement('select');
    selectElement.name = `db-cars-two`;
    selectElement.id = `db-cars-two`;

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Car';
    selectElement.appendChild(defaultOption);

    for (const value of optionDBCars){
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    }

    dbcarstwoContainer.appendChild(selectElement);
}

const dbcarsthreeContainer = document.querySelector('.db-cars-three');

for (let i = 0; i < 8; i++){
    const dwcarsdiv = document.createElement('div');
    dwcarsdiv.classList.add('db-cars-three');

    const selectElement = document.createElement('select');
    selectElement.name = `db-cars-three`;
    selectElement.id = `db-cars-three`;

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Car';
    selectElement.appendChild(defaultOption);

    for (const value of optionDBCars){
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    }

    dbcarsthreeContainer.appendChild(selectElement);
}

/*CBAR*/
const cbarAreasContainer = document.querySelector('.areacbar');

const cbarValues = ['A01', 'A02', 'A03', 'A04', 'A05', 'A06','A07',
'A08','A09','A10','A11','A12','A13'];

for (let i = 0; i < cbarValues.length; i++) {

    const cbarAreaDiv = document.createElement('div');
    cbarAreaDiv.classList.add('cbar-area');
    cbarAreaDiv.textContent = cbarValues[i];

    cbarAreasContainer.appendChild(cbarAreaDiv);
}

const CbarcarsContainer = document.querySelector('.cbar-cars');

const optionCBARCars = ['RR 43', 'RR 44', 'RR 45', 'RR 46', 'RR 47'];

for (let i = 0; i < 13; i++){
    const cbarcarsdiv = document.createElement('div');
    cbarcarsdiv.classList.add('cbar-cars');

    const selectElement = document.createElement('select');
    selectElement.name = `cbar-cars`;
    selectElement.id = `cbar-cars`;

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Car';
    selectElement.appendChild(defaultOption);

    for (const value of optionCBARCars){
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    }

    CbarcarsContainer.appendChild(selectElement);
}

const CbarcarstwoContainer = document.querySelector('.cbar-cars-two');

for (let i = 0; i < 13; i++){
    const cbarcarsdiv = document.createElement('div');
    cbarcarsdiv.classList.add('cbar-cars-two');

    const selectElement = document.createElement('select');
    selectElement.name = `cbar-cars-two`;
    selectElement.id = `cbar-cars-two`;

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Car';
    selectElement.appendChild(defaultOption);

    for (const value of optionCBARCars){
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    }

    CbarcarstwoContainer.appendChild(selectElement);
}

const CbarcarsthreeContainer = document.querySelector('.cbar-cars-three');

for (let i = 0; i < 13; i++){
    const cbarcarsdiv = document.createElement('div');
    cbarcarsdiv.classList.add('cbar-cars-three');

    const selectElement = document.createElement('select');
    selectElement.name = `cbar-cars-three`;
    selectElement.id = `cbar-cars-three`;

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Car';
    selectElement.appendChild(defaultOption);

    for (const value of optionCBARCars){
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    }

    CbarcarsthreeContainer.appendChild(selectElement);
}



/*Vigilant*/
const vigAreasContainer = document.querySelector('.areavig');

const vigValues = ['V1A','V1B','V1C', 'V1D', 'V1E'];

for (let i = 0; i < vigValues.length; i++) {

    const vigAreaDiv = document.createElement('div');
    vigAreaDiv.classList.add('vig-areas');
    vigAreaDiv.textContent = vigValues[i];

    vigAreasContainer.appendChild(vigAreaDiv);
}


const vigcarsContainer = document.querySelector('.vig-cars');

const optionVigCars = ['V 1','V 2', 'V 3','V 4',
'V 5','V 6'];

for (let i = 0; i < 5; i++){
    const vigcarsdiv = document.createElement('div');
    vigcarsdiv.classList.add('vig-cars');

    const selectElement = document.createElement('select');
    selectElement.name = `vig-cars`;
    selectElement.id = `vig-cars`;

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Car';
    selectElement.appendChild(defaultOption);

    for (const value of optionCBARCars){
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    }

    vigcarsContainer.appendChild(selectElement);
}

const vigcarstwoContainer = document.querySelector('.vig-cars-two');

for (let i = 0; i < 5; i++){
    const vigcarsdiv = document.createElement('div');
    vigcarsdiv.classList.add('vig-cars-two');

    const selectElement = document.createElement('select');
    selectElement.name = `vig-cars-two`;
    selectElement.id = `vig-cars-two`;

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Car';
    selectElement.appendChild(defaultOption);

    for (const value of optionCBARCars){
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    }

    vigcarstwoContainer.appendChild(selectElement);
}

const vigcarsthreeoContainer = document.querySelector('.vig-cars-three');

for (let i = 0; i < 5; i++){
    const vigcarsdiv = document.createElement('div');
    vigcarsdiv.classList.add('vig-cars-three');

    const selectElement = document.createElement('select');
    selectElement.name = `vig-cars-three`;
    selectElement.id = `vig-cars-three`;

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Select Car';
    selectElement.appendChild(defaultOption);

    for (const value of optionCBARCars){
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    }

    vigcarsthreeoContainer.appendChild(selectElement);
}

const dateTime = document.querySelector('.date-time');

function updateTime(){

const date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

hour = String(hour).padStart(2, '0');
minutes = String(minutes).padStart(2, '0');
seconds = String(seconds).padStart(2, '0');

let time = `${hour}:${minutes}:${seconds}`

const timeNode = document.createTextNode(time)

dateTime.textContent = time

}

updateTime()

setInterval(updateTime, 1000)
