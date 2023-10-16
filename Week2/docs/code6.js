//her bir npm projesinde zorunlu olmasi gereken bir dosya var
//package.json
//codesandbox da package.json dosyasi
//react projesi 3 paket gelmis

//react
//react-dom
//react-scripts

//https://react.dev/learn/thinking-in-react

//**İmperatif Kodlama**

//Ne yapılması gerektiğini adım adım belirtirsiniz.
//Nasıl yapılacağına dair ayrıntılı talimatlar verirsiniz.
//Daha fazla kod yazmanız gerekebilir.
//Örneğin, "Adım 1'de şunu yap, Adım 2'de bunu yap" gibi adımlarla ilerlersiniz.

//her bir elemanı tek tek döner iken

//Örnek (toplam hesaplama):
let toplam = 0;
for (let i = 0; i < 10; i++) {
  toplam += i;
}

//**Deklaratif Kodlama**:
// Ne yapılması gerektiğini söylersiniz, ancak nasıl yapılacağına dair ayrıntılara odaklanmazsınız.
// Kod daha soyut ve anlaşılır olabilir.
// Daha az kod kullanabilirsiniz.

//Örnek (toplam hesaplama):
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const toplam = numbers.reduce((acc, current) => acc + current, 0);

//react ile calisirken 2 onemli motivasyonumuz var
//1-deklaratif gidiyoruz tarif ederek state i guncelleyerek
//2- gordumuz tasarimi en kucuk ayirabildigimiz componentlere ayirmak
