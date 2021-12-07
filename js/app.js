'use strict';



let seattleList = document.getElementById('seattle');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let seattle = {
  location: 'Seattle',
  min: 23,
  max: 65,
  average: 6.3,
  cookiesEachHourArr: [],
  dailyTotal: 0,
  getRandomCookies: function () {
    let cookiesforOneHour = Math.ceil(getRandomCust(this.min, this.max) * this.average);
    return cookiesforOneHour;
  },
  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookies = this.getRandomCookies();
      this.cookiesEachHourArr.push(cookies);
      this.dailyTotal += cookies;
    }
  },
  render: function () {
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]} : ${this.cookiesEachHourArr[i]} cookies`;
      seattleList.appendChild(li);
    }
    let li = document.getElementById ('seattle total');
    li.textContent = `Total: ${this.dailyTotal}`;
  }
};

seattle.getRandomCookies();
seattle.calcCookiesEachHour();
seattle.render();








let tokyoList = document.getElementById('tokyo');

let tokyo = {
  location: 'Tokyo',
  min: 3,
  max: 24,
  average: 1.2,
  cookiesEachHourArr: [],
  dailyTotal: 0,
  getRandomCookies: function () {
    let cookiesforOneHour = Math.ceil(getRandomCust(this.min, this.max) * this.average);
    return cookiesforOneHour;
  },
  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookies = this.getRandomCookies();
      this.cookiesEachHourArr.push(cookies);
      this.dailyTotal += cookies;
    }
  },
  render: function () {
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]} : ${this.cookiesEachHourArr[i]} cookies`;
      tokyoList.appendChild(li);
    }
    let li = document.getElementById ('tokyo total');
    li.textContent = `Total: ${this.dailyTotal}`;
  }
};

tokyo.getRandomCookies();
tokyo.calcCookiesEachHour();
tokyo.render();


let dubaiList = document.getElementById('dubai');

let dubai = {
  location: 'Dubai',
  min: 11,
  max: 38,
  average: 3.7,
  cookiesEachHourArr: [],
  dailyTotal: 0,
  getRandomCookies: function () {
    let cookiesforOneHour = Math.ceil(getRandomCust(this.min, this.max) * this.average);
    return cookiesforOneHour;
  },
  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookies = this.getRandomCookies();
      this.cookiesEachHourArr.push(cookies);
      this.dailyTotal += cookies;
    }
  },
  render: function () {
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]} : ${this.cookiesEachHourArr[i]} cookies`;
      dubaiList.appendChild(li);
    }
    let li = document.getElementById ('dubai total');
    li.textContent = `Total: ${this.dailyTotal}`;
  }
};

dubai.getRandomCookies();
dubai.calcCookiesEachHour();
dubai.render();

let parisList = document.getElementById('paris');

let paris = {
  location: 'Paris',
  min: 20,
  max: 38,
  average: 2.3,
  cookiesEachHourArr: [],
  dailyTotal: 0,
  getRandomCookies: function () {
    let cookiesforOneHour = Math.ceil(getRandomCust(this.min, this.max) * this.average);
    return cookiesforOneHour;
  },
  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookies = this.getRandomCookies();
      this.cookiesEachHourArr.push(cookies);
      this.dailyTotal += cookies;
    }
  },
  render: function () {
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]} : ${this.cookiesEachHourArr[i]} cookies`;
      parisList.appendChild(li);
    }
    let li = document.getElementById ('paris total');
    li.textContent = `Total: ${this.dailyTotal}`;
  }
};

paris.getRandomCookies();
paris.calcCookiesEachHour();
paris.render();


let limaList = document.getElementById('lima');

let lima = {
  location: 'Lima',
  min: 2,
  max: 16,
  average: 4.6,
  cookiesEachHourArr: [],
  dailyTotal: 0,
  getRandomCookies: function () {
    let cookiesforOneHour = Math.ceil(getRandomCust(this.min, this.max) * this.average);
    return cookiesforOneHour;
  },
  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let cookies = this.getRandomCookies();
      this.cookiesEachHourArr.push(cookies);
      this.dailyTotal += cookies;
    }
  },
  render: function () {
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hours[i]} : ${this.cookiesEachHourArr[i]} cookies`;
      limaList.appendChild(li);
    }
    let li = document.getElementById ('lima total');
    li.textContent = `Total: ${this.dailyTotal}`;
  }
};

lima.getRandomCookies();
lima.calcCookiesEachHour();
lima.render();





function getRandomCust(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}



