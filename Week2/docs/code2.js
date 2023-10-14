//destructing
//codegetCar diye bir method tanimlayalim

function getCar(car) {
  console.log(car.name);
  console.log(car.color);
  console.log(car.date);
}

const car = {
  name: 'TOGG',
  color: 'blue',
  date: '2023',
};
getCar(car);

//eger objeden bekledigim sey benim degiskenimle birebir ayni sey ise bu sekilde yazabilirim
function getCar(car) {
  const { name, color, date } = car;
  console.log(name);
  console.log(color);
  console.log(date);
}

//array icin 
const fruit =['apple','green']

//ilk elemanin name ini yazdirmak istiyorum
//old version
const getFruit(fruit){
    console.log(fruit[0]);
    console.log(fruit[1]);
    }
    getFruit(fruit);

//new version
const getFruit(fruit){
    const [name,color]=fruit;
    console.log(name);
    console.log(color);
    }
    getFruit(fruit);
//template literal and parameter default values
function greetingNew(name,lastName='soyad'){
    console.log(`Hosgeldiniz isminiz ${name} soyadiniz ${lastName}`)
    }
    
    greetingNew('Hayriye', 'Arda');
    greetingNew('Ertan', 'Arda');
    greetingNew('Mahmut')

// rest and sprad operators ...

//rest operator
//... ile baslayan bir sey varsa rest operator dur
 
const person ={
	name:'John',
	lastName:"Doe" 
}
//old version
const personCopy =JSON.parse(JSON.stringify(person));
console.log(personCopy);

//new version
const personCopy2 = {...person};

console.log(personCopy2)

const personCopyWithAge = {age:25,...person};

//array icin
const numbers =[1,2];
const otherNumbers=[3,4,5];

const allNumbers =[...numbers,... otherNumbers]

// old version
[].concat(numbers).concat(otherNumbers)
//ya da 

[].concat(numbers,otherNumbers)


 //arrow functions

// function declaration

function hello() {
    console.log('hello word');
  }
  
  // function expression
  
  const hello = function () {
    console.log('hello word');
  };
  
  //arrow function
  
  const hello = () => {
    console.log('hello word');
  };
  //ya da
  const hello = () => console.log('hello word');
  