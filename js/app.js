'use strict';



let table = document.getElementById('cookiedata');


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(location, min, max, average, cookiesEachHourArr) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.average = average;
  this.cookiesEachHourArr = cookiesEachHourArr;
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

// Store.prototype.render = function () {
//   for (let i = 0; i < hours.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = `${hours[i]} : ${this.cookiesEachHourArr[i]} cookies`;
//     section.appendChild(li);
//   }
//   let li = document.getElementById('seattle total');
//   li.textContent = `Total: ${this.dailyTotal}`;
// };




// create table
Store.prototype.render = function () {
  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement('th');
    th.textContent = hours [i];
    table.appendChild(th);
  }
  for (let i = 0; i < hours.length; i++) {
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.textContent = this.location;
    tr.appendChild(td);
    td.textContent = this.calcCookiesEachHour;
  }
};




let seattle = new Store('Seattle', 23, 65, 6.3, []);
let tokyo = new Store ('Tokyo', 3, 24, 1.2, []);
let dubai =new Store ('Dubai', 11, 38, 3.7, []);
let paris = new Store ('Paris', 20, 38, 2.3, []);
let lima = new Store ('Lima', 2, 16, 4.6, []);

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

// let seattle = {
//   location: 'Seattle',
//   min: 23,
//   max: 65,
//   average: 6.3,
//   cookiesEachHourArr: [],
//   dailyTotal: 0,
//   getRandomCookies: function () {
//     let cookiesforOneHour = Math.ceil(getRandomCust(this.min, this.max) * this.average);
//     return cookiesforOneHour;
//   },
//   calcCookiesEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookies = this.getRandomCookies();
//       this.cookiesEachHourArr.push(cookies);
//       this.dailyTotal += cookies;
//     }
//   },
//   render: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]} : ${this.cookiesEachHourArr[i]} cookies`;
//       seattleList.appendChild(li);
//     }
//     let li = document.getElementById('seattle total');
//     li.textContent = `Total: ${this.dailyTotal}`;
//   }
// };

// seattle.getRandomCookies();
// seattle.calcCookiesEachHour();
// seattle.render();






// let tokyoList = document.getElementById('tokyo');

// let tokyo = {
//   location: 'Tokyo',
//   min: 3,
//   max: 24,
//   average: 1.2,
//   cookiesEachHourArr: [],
//   dailyTotal: 0,
//   getRandomCookies: function () {
//     let cookiesforOneHour = Math.ceil(getRandomCust(this.min, this.max) * this.average);
//     return cookiesforOneHour;
//   },
//   calcCookiesEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookies = this.getRandomCookies();
//       this.cookiesEachHourArr.push(cookies);
//       this.dailyTotal += cookies;
//     }
//   },
//   render: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]} : ${this.cookiesEachHourArr[i]} cookies`;
//       tokyoList.appendChild(li);
//     }
//     let li = document.getElementById ('tokyo total');
//     li.textContent = `Total: ${this.dailyTotal}`;
//   }
// };



// let dubaiList = document.getElementById('dubai');

// let dubai = {
//   location: 'Dubai',
//   min: 11,
//   max: 38,
//   average: 3.7,
//   cookiesEachHourArr: [],
//   dailyTotal: 0,
//   getRandomCookies: function () {
//     let cookiesforOneHour = Math.ceil(getRandomCust(this.min, this.max) * this.average);
//     return cookiesforOneHour;
//   },
//   calcCookiesEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookies = this.getRandomCookies();
//       this.cookiesEachHourArr.push(cookies);
//       this.dailyTotal += cookies;
//     }
//   },
//   render: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]} : ${this.cookiesEachHourArr[i]} cookies`;
//       dubaiList.appendChild(li);
//     }
//     let li = document.getElementById ('dubai total');
//     li.textContent = `Total: ${this.dailyTotal}`;
//   }
// };


// let parisList = document.getElementById('paris');

// let paris = {
//   location: 'Paris',
//   min: 20,
//   max: 38,
//   average: 2.3,
//   cookiesEachHourArr: [],
//   dailyTotal: 0,
//   getRandomCookies: function () {
//     let cookiesforOneHour = Math.ceil(getRandomCust(this.min, this.max) * this.average);
//     return cookiesforOneHour;
//   },
//   calcCookiesEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookies = this.getRandomCookies();
//       this.cookiesEachHourArr.push(cookies);
//       this.dailyTotal += cookies;
//     }
//   },
//   render: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]} : ${this.cookiesEachHourArr[i]} cookies`;
//       parisList.appendChild(li);
//     }
//     let li = document.getElementById ('paris total');
//     li.textContent = `Total: ${this.dailyTotal}`;
//   }
// };

// paris.getRandomCookies();
// paris.calcCookiesEachHour();
// paris.render();


// let limaList = document.getElementById('lima');

// let lima = {
//   location: 'Lima',
//   min: 2,
//   max: 16,
//   average: 4.6,
//   cookiesEachHourArr: [],
//   dailyTotal: 0,
//   getRandomCookies: function () {
//     let cookiesforOneHour = Math.ceil(getRandomCust(this.min, this.max) * this.average);
//     return cookiesforOneHour;
//   },
//   calcCookiesEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let cookies = this.getRandomCookies();
//       this.cookiesEachHourArr.push(cookies);
//       this.dailyTotal += cookies;
//     }
//   },
//   render: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]} : ${this.cookiesEachHourArr[i]} cookies`;
//       limaList.appendChild(li);
//     }
//     let li = document.getElementById ('lima total');
//     li.textContent = `Total: ${this.dailyTotal}`;
//   }
// };

// lima.getRandomCookies();
// lima.calcCookiesEachHour();
// lima.render();





function getRandomCust(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}



