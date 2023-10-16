const pokemons = [
  { id: 3, name: 'Bulbasaur', type: 'Grass', experience: 64 },
  { id: 7, name: 'Charmander', type: 'Fire', experience: 62 },
  { id: 13, name: 'Squirtle', type: 'Water', experience: 63 },
  { id: 56, name: 'Caterpie', type: 'Bug', experience: 39 },
  { id: 1408, name: 'Ekans', type: 'Poison', experience: 58 },
  { id: 63, name: 'Eevee', type: 'Normal', experience: 65 },
  { id: 27, name: 'Pikachu', type: 'Electric', experience: 112 },
  { id: 31, name: 'Pidgey', type: 'Flying', experience: 50 },
  { id: 21, name: 'Meowth', type: 'Normal', experience: 58 },
  { id: 22, name: 'Snorlax', type: 'Normal', experience: 154 },
  { id: 35, name: 'Psyduck', type: 'Water', experience: 64 },
];

//reduce
// dizideki tum elemanlari tek bir degerde toplar

const totalExperience = pokemons.reduce((total, pokemon) => {
  return total + pokemon.experience;
}, 0);

const sayilar = [1, 2, 3, 4];
const toplama = (oncekiDegerler, suankiDeger) => {
  console.log(
    `oncekiDegerler: ${oncekiDegerler} ve suankiDeger: ${suankiDeger}`
  );

  return oncekiDegerler + suankiDeger;
};

//1 icin girdi oncekiDegerler yok, suankiDeger 1
//2 icin girdi oncekiDegerler 1, suankiDeger 2
//3 icin girdi oncekiDegerler 3, suankiDeger 3
//4 icin girdi oncekiDegerler 6, suankiDeger 4
// 10 doner

console.log(sayilar.reduce(toplama));
// Expected output: 10

// her pokemonun type varsa count u 1 arttir

const typeCounts = pokemons.reduce((counts, pokemon) => {
  if (counts[pokemon.type]) {
    counts[pokemon.type] = counts[pokemon.type] + 1;
  } else {
    counts[pokemon.type] = 1;
  }
  return counts;
}, {});

console.log('typeCounts', typeCounts);

// https://arrayexplorer.netlify.app/ adresinden array methodlarini inceleyebilirsiniz

//push
//bir arrayin sonuna birsey eklemek istiyorsam

const numbers = [1, 2, 3, 4];

numbers.push(5);
console.log(numbers);

//push methodu numbersi mutate etti
//react ve redux gibi kisimlarda push gibi ,concat gibi mutate eden methodlari kullanmayacagiz

const newNumbers = [...numbers, 7];
console.log(newNumbers);

//slice
//bir arrayin belli bir kismini almak istiyorsam

// bir array var belirledigimiz araliktaki bir kismi almamizi sagliyor ve yeni bir array donuyor

const slicedNumbers = numbers.slice(0, 2);
console.log(slicedNumbers);

//splice
//bir arrayin belli bir kismini silmek istiyorsam

const splicedNumbers = numbers.splice(0, 2);
console.log(splicedNumbers);
console.log(numbers);

animals.splice(2, 4);
// splice
//array de istedigimiz yere istedimiz elemanlari eklemeye yariyor
// bir dizini iceriklerini yeni ogeler ekleyerek ve ya mevcut ogeleri silerek degistirir
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

animals.indexOf('duck');

//findIndex ile yazalim bunu
animals.findIndex((element) => {
  return (element = 'duck');
});

//indexOf
animals.indexOf('monkey');
// -1 doner
