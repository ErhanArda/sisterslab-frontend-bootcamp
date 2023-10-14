// if e soktugumda if karsilastiracagi sey bunlarin degerleri

if (person.name !== 'undefined' && person.name !== 'null') {
  console.log(person.name);
}

//yukaridaki code parcasiyla birebir ayni sey
if (person.name) console.log(person.name);

person.name = 'John'; //dogruluk degeri true

//bunun tam tersini alamk istedigimde
if (!person.name) console.log(person.name); //false

let emptyString = ''; // dogruluk degeri false

if (!emptyString) console.log(emptyString); //false
// type coersion(type tahminlemesi) yapiyor bos string kullaniyorsam bunu bir if te kullaniyorsam bos string in degeri de false geliyor

if (0) {
  console.log(emptyString);
} //0 da false degeri veriyor

//0, false, undefined, null. '' bunlari hepsi benim icin ayni degeri verecektir bunlari dogrulugu false

// 1,2,3, "Ali", [] ,{} bosta olsa bir array ya da obje true dur
//if e soktugumuzda bunlari boolean type indan degerini aliyor aslinda

//template literals

// old way
function greeting(name, lastName) {
  console.log('Hosgeldiniz isminiz' + name + 'soyadiniz' + lastName);
}
greetintg('Hayriye', 'Arda');
greeting('Ertan', 'Arda');

function greetingNew(name, lastName) {
  console.log(`Hosgeldiniz isminiz ${name} soyadiniz ${lastName}`);
}

greetintg('Hayriye', 'Arda');
greeting('Ertan', 'Arda');

// shorthand properties

//bir fonksiyon olacak bu, obje olacak ve fonksiyonu cagirdigimda bir kisi objesi olusturacak
//name lastName alacak ve bir kisi objesi olacak
function getPerson(name, lastName) {
  return {
    name: name,
    lastName: lastName,
  };
}
getPerson('Erhan', 'Arda');

//shorthand properties soyle diyor eger senin dondugun seyle yukardaki sey ayniysa
//name : name yazmana gerek yok bu aynidir diyor

function getPerson(name, lastName) {
  return {
    name,
    lastName,
  };
}
getPerson('Erhan', 'Arda');

function getPerson(name, lastName) {
  const fullName = `${name} ${lastName}`;

  return {
    name,
    lastName,
    yourFullName: fullName, // olarak yazmak zorundayiz
  };
}
getPerson('Erhan', 'Arda');
