'use strict';



let table = document.getElementById('cookiedata');


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(location, min, max, average) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.average = average;
  this.cookiesEachHourArr = [];
  this.dailyTotal = 0;
}




Store.prototype.getRandomCookies = function () {
  let cookiesforOneHour = Math.ceil(getRandomCust(this.min, this.max) * this.average);
  return cookiesforOneHour;
};

Store.prototype.calcCookiesEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let cookies = this.getRandomCookies();
    this.cookiesEachHourArr.push(cookies);
    this.dailyTotal += cookies;
  }
};


// create table
Store.prototype.render = function () {
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  td.textContent = this.location;
  tr.appendChild(td);
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.cookiesEachHourArr[i];
  }
  td = document.createElement('td');
  td.textContent = this.dailyTotal;
  tr.appendChild(td);
  table.appendChild(tr);
};

function renderHeader() {
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  tr.appendChild(th);
  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement('th');
    th.textContent = hours[i];
    tr.appendChild(th);
  }
  th = document.createElement('th');
  th.textContent = 'Daily Total';
  tr.appendChild(th);
  table.appendChild(tr);
}


let seattle = new Store('Seattle', 23, 65, 6.3, []);
let tokyo = new Store('Tokyo', 3, 24, 1.2, []);
let dubai = new Store('Dubai', 11, 38, 3.7, []);
let paris = new Store('Paris', 20, 38, 2.3, []);
let lima = new Store('Lima', 2, 16, 4.6, []);

renderHeader();
seattle.getRandomCookies();
seattle.calcCookiesEachHour();
seattle.render();

tokyo.getRandomCookies();
tokyo.calcCookiesEachHour();
tokyo.render();

dubai.getRandomCookies();
dubai.calcCookiesEachHour();
dubai.render();

paris.getRandomCookies();
paris.calcCookiesEachHour();
paris.render();

lima.getRandomCookies();
lima.calcCookiesEachHour();
lima.render();

function getRandomCust(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


// Add new shop
const storeForm = document.getElementById('add-store');


function handleSubmit(event) {
  event.preventDefault();

  let storelocation = event.target.storelocation.value;
  let min = event.target.min.value;
  let max = event.target.min.value;
  let avg = event.taget.avg.value;


  const newStore = new Store(storelocation, min, max, avg);

  newStore.render();
  storeForm.reset ();
}

storeForm.addEventListener('submit', handleSubmit);
