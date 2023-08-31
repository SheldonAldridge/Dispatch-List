/*District Watch*/
const dwAreasContainer = document.querySelector('.areadw');

const optionValues = ['DW1', 'DW2', 'DW3', 'DW4', 'DW5', 'DW6'];


for (let i = 0; i < 6; i++) {
    const dwAreaDiv = document.createElement('div');
    dwAreaDiv.classList.add('dw-area-one');

    const dwAreaTwoDiv = document.createElement('div');
    dwAreaTwoDiv.classList.add('dw-area-two');

    const selectElement1 = document.createElement('select');
    selectElement1.name = `dw-area-${i}-1`;
    selectElement1.id = `dw-area-${i}-1`;

    const selectElement2 = document.createElement('select');
    selectElement2.name = `dw-area-${i}-2`;
    selectElement2.id = `dw-area-${i}-2`;

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = '';
    selectElement1.appendChild(defaultOption.cloneNode(true));
    selectElement2.appendChild(defaultOption.cloneNode(true));

    

    for (const value of optionValues) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement1.appendChild(option);
        selectElement2.appendChild(option.cloneNode(true));
    }

    dwAreaDiv.appendChild(selectElement1)
    dwAreaTwoDiv.appendChild(selectElement2)

    const pairDiv = document.createElement('div');
    pairDiv.classList.add('pair-div')
    pairDiv.appendChild(dwAreaDiv);
    pairDiv.appendChild(dwAreaTwoDiv);

    dwAreasContainer.appendChild(pairDiv);
}

const optionCarValues = ['RR1', 'RR2', 'RR3', 'RR4', 'RR5', 'RR6','RR7','RR8','RR9','RR10','RR11','RR12'];

const dwCarsContainer = document.querySelector('.dw-cars');

for (let i = 0; i < 6; i++){
    const dwcarsdiv = document.createElement('div');
    dwcarsdiv.classList.add('dw-cars');

    const selectElement = document.createElement('select');
    selectElement.name = `dw-cars-${i}`;
    selectElement.id = `dw-cars-${i}`;

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = '';
    selectElement.appendChild(defaultOption);

    for (const value of optionCarValues){
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    }

    dwCarsContainer.appendChild(selectElement);
}

/*District Basset*/
const dbAreasContainer = document.querySelector('.areadb');

const optionDBArea = ['DB1', 'DB2', 'DB3', 'DB4', 'DB5', 'DB6','DB7',
'DB8'];

for (let i = 0; i < 8; i++) {
    const dwAreaDiv = document.createElement('div');
    dwAreaDiv.classList.add('db-area-one');

    const dwAreaTwoDiv = document.createElement('div');
    dwAreaTwoDiv.classList.add('db-area-two');

    const selectElement1 = document.createElement('select');
    selectElement1.name = `db-area-${i}-1`;
    selectElement1.id = `db-area-${i}-1`;

    const selectElement2 = document.createElement('select');
    selectElement2.name = `db-area-${i}-2`;
    selectElement2.id = `db-area-${i}-2`;

    const defaultOption = document.createElement('option');
    defaultOption.value = ' ';
    defaultOption.textContent = ' ';
    selectElement1.appendChild(defaultOption.cloneNode(true));
    selectElement2.appendChild(defaultOption.cloneNode(true));

    

    for (const value of optionDBArea) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement1.appendChild(option);
        selectElement2.appendChild(option.cloneNode(true));
    }

    dwAreaDiv.appendChild(selectElement1)
    dwAreaTwoDiv.appendChild(selectElement2)

    const pairDiv = document.createElement('div');
    pairDiv.classList.add('pair-div')
    pairDiv.appendChild(dwAreaDiv);
    pairDiv.appendChild(dwAreaTwoDiv);

    dbAreasContainer.appendChild(pairDiv);
}

const dbcarsContainer = document.querySelector('.db-cars');

const optionDBCars = ['BR1', 'BR2', 'BR3', 'BR4', 'BR5', 'BR6','BR7',
'BR8','BR9','BR10','BR11'];

for (let i = 0; i < 8; i++){
    const dwcarsdiv = document.createElement('div');
    dwcarsdiv.classList.add('db-cars');

    const selectElement = document.createElement('select');
    selectElement.name = `db-cars-${i}`;
    selectElement.id = `db-cars-${i}`;

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = '';
    selectElement.appendChild(defaultOption);

    for (const value of optionDBCars){
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    }

    dbcarsContainer.appendChild(selectElement);
}

/*CBAR*/
const cbarAreasContainer = document.querySelector('.areacbar');

const optionCBARArea = ['A01', 'A02', 'A03', 'A04', 'A05', 'A06','A07',
'A08','A09','A10','A11','A12','A13'];

for (let i = 0; i < 13; i++) {
    const cbarAreaDiv = document.createElement('div');
    cbarAreaDiv.classList.add('cbar-area-one');

    const cbarAreaTwoDiv = document.createElement('div');
    cbarAreaTwoDiv.classList.add('cbar-area-two');

    const selectElement1 = document.createElement('select');
    selectElement1.name = `cbar-area-${i}-1`;
    selectElement1.id = `cbar-area-${i}-1`;

    const selectElement2 = document.createElement('select');
    selectElement2.name = `cbar-area-${i}-2`;
    selectElement2.id = `cbar-area-${i}-2`;

    const defaultOption = document.createElement('option');
    defaultOption.value = ' ';
    defaultOption.textContent = ' ';
    selectElement1.appendChild(defaultOption.cloneNode(true));
    selectElement2.appendChild(defaultOption.cloneNode(true));

    for (const value of optionCBARArea) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement1.appendChild(option);
        selectElement2.appendChild(option.cloneNode(true));
    }

    cbarAreaDiv.appendChild(selectElement1)
    cbarAreaTwoDiv.appendChild(selectElement2)

    const pairDiv = document.createElement('div');
    pairDiv.classList.add('pair-div')
    pairDiv.appendChild(cbarAreaDiv);
    pairDiv.appendChild(cbarAreaTwoDiv);

    cbarAreasContainer.appendChild(pairDiv);
}

const CbarcarsContainer = document.querySelector('.cbar-cars');

const optionCBARCars = ['R43', 'R44', 'R45', 'R46', 'R47'];

for (let i = 0; i < 13; i++){
    const cbarcarsdiv = document.createElement('div');
    cbarcarsdiv.classList.add('db-cars');

    const selectElement = document.createElement('select');
    selectElement.name = `cbar-cars-${i}`;
    selectElement.id = `cbar-cars-${i}`;

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = '';
    selectElement.appendChild(defaultOption);

    for (const value of optionCBARCars){
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    }

    CbarcarsContainer.appendChild(selectElement);
}

const optionVigArea = ['', 'A02', 'A03', 'A04', 'A05', 'A06','A07',
'A08','A09','A10','A11','A12','A13'];

const optionCBVigCars = ['R43', 'R44', 'R45', 'R46', 'R47'];