let districtBtn = document.querySelector(".basset");
let districtCarList = document.querySelector(".district-cars-list");
let districtCar = document.querySelector(".district-cars");
let bassetCar = document.querySelector(".basset-cars");

districtBtn.addEventListener('click', () => {
    districtCarList.style.display="None";
    districtCar.style.display="None";
    bassetCar.classList.remove("basset-cars");
})