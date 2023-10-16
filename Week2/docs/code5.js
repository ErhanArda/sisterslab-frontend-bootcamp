//asenkron islemler

//setTimeout

console.log(1);

setTimeout(() => {
  console.log(2);
}, 1000);

setTimeout(() => {
  console.log(3);
}, 0);

console.log(4);

//normalde line dan gider ama asenkron birsey ise onu sona atiyor bu yuzden 1 4 3 2 oluyor

//getUsers diye async bir istegim var diyelim

getUsers();
users.length;

//users undefined olur cunku asenkron bir islem yapiyoruz
//async birseyi sync bir sekilde yapmak istiyorsak

//promise
//async await
//callback

//promise
//bir islemi yaparken bir sonuc dondurmek istiyorsak
//bu sonucun olumlu olmasini bekliyorsak resolve
//olumsuz olmasini bekliyorsak reject
//promise 3 durumda olabilir

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});

console.log(promise);

///Promise nesnesi Resolve ve Reject adında iki tane parametre alır ve
//resolve ,basarili durumlarda resolve edecegim, basarisiz durumlarda da reject edecegim

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Bitti');
  }, 1000);
});
console.log(promise);
setTimeout(() => {
  console.log(promise);
}, 2000);

//promise bittiginde degeri nasil yakalarim peki
//promise te then diye bir keyword var

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Bitti');
  }, 1000);
});
promise.then((result) => {
  alert(result);
});

//reject edildiginde ne olacak
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Bitti');
  }, 1000);
});
promise.then((result) => {
  alert(result);
});

// then ile reject islemi yapamayiz
//reject islemi icin catch kullanilir

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Bitti');
  }, 1000);
});
promise
  .then((result) => {
    alert(result);
  })
  .catch((err) => {
    alert(err);
  });

//fetch

fetch('/users');

//fetch ile bir istek yaptigimizda bize bir promise doner
//then ile bu promise i yakalayabiliriz


//async await

const getUser = fetch('/users')

//async await ile promise i yakalayabiliriz
//async keyword u ile bir fonksiyonu async hale getiriyoruz
//await ekledigimizde ise o fonksiyonun icindeki islemler asenkron olarak calisiyor

async function logUser()=>{
	const user = await getUser();
	console.log(user)
}
