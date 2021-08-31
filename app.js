'use strict'

let container = document.getElementById('container');
let tableEl = document.createElement('table');
container.appendChild(tableEl);
let car = [];
let carOrder = [];


function cars (custName, carModel) {

    this.custName = custName;
    this.carModel = carModel;
    car.push(this);


    


cars.prototype.randPrice = function (min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.randPrice = Math.floor((Math.random() * 1000) +1);

    
}
cars.prototype.render = function() {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let tdEl1 = document.createElement('td');
    trEl.appendChild(tdEl1);
    tdEl1.textContent = this.custName;

    let tdEl2 = document.createElement('td');
    trEl.appendChild(tdEl2);
    tdEl1.textContent = this.carModel;

};

function saveToLocalStorge(){
    let data = JSON. stringify(car);
    localStorage.setItem('rentCar', data);
  }
   
  function readFromLocalStorge(){
    let stringObj = localStorage.getItem('rentCar');
    let normalObj = JSON.parse(stringObj);
   
    if(normalObj){
      car = normalObj;
      orderes();
   
    }

function tableHeader() {
    let trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    let thEl1 = document.createElement('th');
    trEl.appendChild(thEl1);
    thEl1.textContent = "Order Image";

    let thEl2 = document.createElement('th');
    trEl.appendChild(thEl2);
    thEl2.textContent = "Order Details";

}


let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', addCar);

function addCar(event) {
    event.preventDefault();

    let custName = event.target.custName.value;
    let carModel = event.target.carModel.value;

    let newCar = new cars (custName,carModel);
    newCar.render();

}

}
tableHeader();
render();







