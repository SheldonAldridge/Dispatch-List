let bassetBtn = document.querySelector(".basset");
let bassetCarList = document.querySelector(".basset-cars-list");
let bassetCar = document.querySelector(".basset-cars"); // Image

let districtBtn = document.querySelector(".district");
let districtCarList = document.querySelector(".district-cars-list");
let districtCar = document.querySelector(".district-cars"); // Image

let cbarBtn = document.querySelector(".cbar");
let cbarCarList = document.querySelector(".cbar-cars-list");
let cbarCar = document.querySelector(".cbar-cars"); // Image

bassetBtn.addEventListener('click', () => {
    districtCarList.style.display = "none";
    districtCar.style.display = "none";

    bassetCarList.style.display = "block";
    bassetCar.style.display = "block";

    cbarCarList.style.display = "none";
    cbarCar.style.display = "none";

    cbarBtn.style.backgroundColor = "#F26835";
    districtBtn.style.backgroundColor = "#F26835";
    bassetBtn.style.backgroundColor = "#F26835";
})

districtBtn.addEventListener('click', () => {
    districtCarList.style.display = "block";
    districtCar.style.display = "block";

    bassetCarList.style.display = "none";
    bassetCar.style.display = "none";

    cbarCarList.style.display = "none";
    cbarCar.style.display = "none";

    districtBtn.style.backgroundColor = "#3264A6";
    bassetBtn.style.backgroundColor = "#3264A6";
    cbarBtn.style.backgroundColor = "#3264A6";
})

cbarBtn.addEventListener('click', () => {
    districtCarList.style.display = "none";
    districtCar.style.display = "none";

    bassetCarList.style.display = "none";
    bassetCar.style.display = "none";

    cbarCarList.style.display = "block";
    cbarCar.style.display = "block";
    cbarCar.style.marginTop = "10rem";

    districtBtn.style.backgroundColor = "#DB2304";
    bassetBtn.style.backgroundColor = "#DB2304";
    cbarBtn.style.backgroundColor = "#DB2304";
})

