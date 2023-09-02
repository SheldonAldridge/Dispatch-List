/*District Watch*/
const dwAreasContainer = document.querySelector('.areadw');

const optionValues = ['DW1', 'DW2', 'DW3', 'DW4', 'DW5', 'DW6'];


for (let i = 0; i < 19; i++) {
    const dwAreaDiv = document.createElement('div');
    dwAreaDiv.classList.add('dw-area-one');

    const dwplaceholderOne = document.createAttribute('placeholder')
    dwplaceholderOne.textContent = 'Area 1'

    const dwAreaTwoDiv = document.createElement('div');
    dwAreaTwoDiv.classList.add('dw-area-two');

    const dwplaceholderTwo = document.createAttribute('placeholder')
    dwplaceholderTwo.textContent = 'Area 2'

    const selectElement1 = document.createElement('select');
    selectElement1.name = `dw-area`;
    selectElement1.id = `dw-area`;

    const selectElement2 = document.createElement('select');
    selectElement2.name = `dw-area`;
    selectElement2.id = `dw-area`;

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

const optionCarValues = ['RR01', 'RR02', 'RR03', 'RR04', 'RR05', 'RR06','RR07','RR08','RR09','RR10','RR11','RR12'];

const dwCarsContainer = document.querySelector('.dw-cars');

for (let i = 0; i < 19; i++){
    const dwcarsdiv = document.createElement('div');
    dwcarsdiv.classList.add('dw-cars');

    const selectElement = document.createElement('select');
    selectElement.name = `dw-cars`;
    selectElement.id = `dw-cars`;

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

for (let i = 0; i < 19; i++) {
    const dwAreaDiv = document.createElement('div');
    dwAreaDiv.classList.add('db-area-one');

    const dwAreaTwoDiv = document.createElement('div');
    dwAreaTwoDiv.classList.add('db-area-two');

    const selectElement1 = document.createElement('select');
    selectElement1.name = `db-area`;
    selectElement1.id = `db-area`;

    const selectElement2 = document.createElement('select');
    selectElement2.name = `db-area`;
    selectElement2.id = `db-area`;

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

const optionDBCars = ['BR01', 'BR02', 'BR03', 'BR04', 'BR05', 'BR06','BR07',
'BR08','BR09','BR10','BR11'];

for (let i = 0; i < 19; i++){
    const dwcarsdiv = document.createElement('div');
    dwcarsdiv.classList.add('db-cars');

    const selectElement = document.createElement('select');
    selectElement.name = `db-cars`;
    selectElement.id = `db-cars`;

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

for (let i = 0; i < 19; i++) {
    const cbarAreaDiv = document.createElement('div');
    cbarAreaDiv.classList.add('cbar-area-one');

    const cbarAreaTwoDiv = document.createElement('div');
    cbarAreaTwoDiv.classList.add('cbar-area-two');

    const selectElement1 = document.createElement('select');
    selectElement1.name = `cbar-area`;
    selectElement1.id = `cbar-area`;

    const selectElement2 = document.createElement('select');
    selectElement2.name = `cbar-area`;
    selectElement2.id = `cbar-area`;

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

for (let i = 0; i < 19; i++){
    const cbarcarsdiv = document.createElement('div');
    cbarcarsdiv.classList.add('db-cars');

    const selectElement = document.createElement('select');
    selectElement.name = `cbar-cars`;
    selectElement.id = `cbar-cars`;

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

/*Vigilant*/
const vigAreasContainer = document.querySelector('.areavig');

const optionVigArea = ['BEL', 'BLU', 'BRA', 'DUR', 'HIL', 'KLP','KRA',
'KUI','PIN','SEA','STE','STR','V1A','V1B','V1C', 'V1D', 'V1E'];

for (let i = 0; i < 19; i++) {
    const vigAreaDiv = document.createElement('div');
    vigAreaDiv.classList.add('vig-area-one');

    const vigAreaTwoDiv = document.createElement('div');
    vigAreaTwoDiv.classList.add('vig-area-two');

    const selectElement1 = document.createElement('select');
    selectElement1.name = `vig-area`;
    selectElement1.id = `vig-area`;

    const selectElement2 = document.createElement('select');
    selectElement2.name = `vig-area`;
    selectElement2.id = `vig-area`;

    const defaultOption = document.createElement('option');
    defaultOption.value = ' ';
    defaultOption.textContent = ' ';
    selectElement1.appendChild(defaultOption.cloneNode(true));
    selectElement2.appendChild(defaultOption.cloneNode(true));

    for (const value of optionVigArea) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement1.appendChild(option);
        selectElement2.appendChild(option.cloneNode(true));
    }

    vigAreaDiv.appendChild(selectElement1)
    vigAreaTwoDiv.appendChild(selectElement2)

    const pairDiv = document.createElement('div');
    pairDiv.classList.add('pair-div')
    pairDiv.appendChild(vigAreaDiv);
    pairDiv.appendChild(vigAreaTwoDiv);

    vigAreasContainer.appendChild(pairDiv);
}

const vigcarsContainer = document.querySelector('.vig-cars');

const optionVigCars = ['R01','R02', 'R03','R04','R05','R06'];

for (let i = 0; i < 19; i++){
    const vigcarsdiv = document.createElement('div');
    vigcarsdiv.classList.add('vig-cars');

    const selectElement = document.createElement('select');
    selectElement.name = `vig-cars`;
    selectElement.id = `vig-cars`;

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = '';
    selectElement.appendChild(defaultOption);

    for (const value of optionVigCars){
        const option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        selectElement.appendChild(option);
    }

    vigcarsContainer.appendChild(selectElement);
}


