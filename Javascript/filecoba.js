/**
 * Buatlah logika if untuk mengevaluasi nilai score dengan ketentuan:
 *  1. Jika score bernilai 90 atau lebih
 *      - Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
 *  2. Jika score bernilai 80 hingga 89
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai B.'
 *  3. Jika score bernilai 70 hingga 79
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai C.'
 *  4. Jika score bernilai 60 hingga 69:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai D.'
 *  5. Jika score bernilai di bawah 60:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai E.'
 *
 *
 *  Note: - Mohon untuk tidak menghapus kode yang sudah ada sebelumnya.
 *        - Anda tidak perlu membuat variabel result dan score secara manual.
 *          Gunakan variabel yang sudah disediakan.
 *
 */

function scoreChecker(score) {
  let result;

  // TODO
    if (score >= 90) {
        result="A";
    } else if (score <= 89 && score >= 80) {
        result="B";
    }else if (score <= 79 && score >= 70) {
        result="B";
    }else if (score <= 69 && score >= 60) {
        result="B";
    }else if(score < 60){
        result="E";
    }
  // Jangan hapus kode ini
  return result;
}

/**
 * Jangan hapus kode di bawah ini
 */
module.exports = scoreChecker;
console.log(module.exports);

const restaurant ={
    name : "Bakso Mang Dicoding",
    city : "Bandung",
    "favorite drink" : "Es Teh",
    "favorite food" : "Bakso",
    isVegan : false
}

let name = restaurant.name;
let favoriteDrink = restaurant["favorite drink"];

console.log(name);
console.log(favoriteDrink);




    let evenNumber=[];
  
    for (let i = 1; i <=100; i++) {
      if (i % 2 == 0) {
        evenNumber.push(i);
      }
    }
    
    
    console.log(evenNumber);
 
   let currency = new Map ([
    ["USD", 14000],
    ["JPY",  131],
    ["SGD", 11000],
    ["MYR", 3500]
   ]);

   let priceInIDR = priceInJPY*currency.get("JPY");

function minimal(a,b) {
    let result = 0;
  if (a > b) {
        result = b;
    } else if (b > a) {
        result=a;
    }else if (b == a) {
        result=a;
    }
  
  return result;
}
console.log(minimal(7,2));

function findIndex(arr=[],c){
let result = 0;
if (arr.includes(c)) {
    result =arr.indexOf(c);
}else{
    result = -1;
}
return result;
}

console.log(findIndex([1, 2, 3, 4, 5], 5));

class Animal{
  constructor(name, age, isMammal){
    this.name=name;
    this.age=age;
    this.isMammal=isMammal;
  }

}

class Rabbit extends Animal {
  constructor(name, age) {
  super(name, age, true);
  }
  
  eat() {
  return `${this.name} sedang makan!`;
  }
}

class Eagle extends Animal {
  constructor(name, age) {
  super(name, age, false);
  }
  
  fly() {
  return `${this.name} sedang terbang!`;
  }
}
const myRabbit = new Rabbit("Labi", 2);
const myEagle = new Eagle("Elo", 4);

// TODO 1 (Tiger.js)
class Tiger {
  constructor() {
  this.strength = Math.floor(Math.random() * 100);
  }
  
  growl() {
  return 'grrrrrrr';
  }
  }
  
  module.exports = Tiger;
  
  // TODO 2 (Wolf.js)
  class Wolf {
  constructor() {
  this.strength = Math.floor(Math.random() * 100);
  }
  
  howl() {
  return 'Auuuuuuuuu';
  }
  }
  
  module.exports = Wolf;
  
  // TODO 3 (main.js)
  const Tiger = require('./Tiger');
  const Wolf = require('./Wolf');
  
  const fight = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
  return tiger.growl();
  }
  if (wolf.strength > tiger.strength) {
  return wolf.howl();
  }
  return 'Harimau dan serigala sama-sama kuat!';
  };
  
  const myTiger = new Tiger();
  const myWolf = new Wolf();
  
  const result = fight(myTiger, myWolf);
  
  // TODO 4 (main.js)
  module.exports = {
  fight,
  myTiger,
  myWolf,
  result,
  };



  // TODO 1
class ValidationError extends Error {
  constructor(message) {
  super(message);
  this.name = "ValidationError";
  }
  }
  
  // TODO 2
  const validateNumberInput = (a, b, c) => {
  if (typeof a !== "number") {
  throw new ValidationError("Argumen pertama harus number");
  }
  if (typeof b !== "number") {
  throw new ValidationError("Argumen kedua harus number");
  }
  if (typeof c !== "number") {
  throw new ValidationError("Argumen ketiga harus number");
  }
  }
  
  const detectTriangle = (a, b, c) => {
  // TODO 3
  try {
  validateNumberInput(a, b, c);
  } catch (error) {
  return error.message;
  }
  
  if (a === b && b === c) {
  return 'Segitiga sama sisi';
  }
  
  if (a === b || a === c || b === c) {
  return 'Segitiga sama kaki';
  }
  
  return 'Segitiga sembarang';
  };


  const util = require('util');

  function getProvinces(countryId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (countryId === 'id') {
          resolve([
            { id: 'id-jk', name: 'Jakarta' },
            { id: 'id-bt', name: 'Banten' },
            { id: 'id-jr', name: 'Jawa Barat' },
          ]);
          return;
        }
  
        reject(new Error('Country not found'));
      }, 1000);
    });
  }
  
  module.exports = { getProvinces: util.promisify(getProvinces) };
  