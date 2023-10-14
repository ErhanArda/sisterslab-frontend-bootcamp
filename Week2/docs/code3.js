//array methodlari

//find
//some
//every
//includes
//map
//filter
//reduce

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

//forEach
// methodu dizideki her eleman icin verilen methodu calistirir

pokemons.forEach((pokemon) => {
  console.log(pokemon.name);
});
//foreach herhangi bir return opsiyonu yok dolayisiyla birsey return etmiyor
//newArray burada undefined a esit olacak
//aklimizda soyle kalsin foreach karsilinda hicbirsey return etmez

//undefined
const newArray = pokemons.forEach((pokemon) => {
  console.log(pokemon.name);
});

//map
//Dizinin her elemanı için, parametre olarak verilen fonksiyonu çağırır ve oluşan sonuçlarla da yeni bir dizi oluşturur.

//her bir pokemon name ini console a yazdirmak istedigimde foreach ile bunu yapabilirim
//ama her bir pokemon ismiyle yeni bir array olusturmak icin map kullaniyoruz return ediyor

const names = pokemons.map((pokemon) => {
  return pokemon.name;
});

console.log('pokemon names array', names);

//mesela her bir pokemona renkte ekleyelim ve yeni bir array olusturalim
const coloredPokemons = pokemons.map((pokemon, index) => {
  const newPokemon = pokemon;
  newPokemon.color = 'red';
  return newPokemon;
});

console.log('coloredPokemons', coloredPokemons);
//coloredPokemons artik color eklemis normalde datamda yok, cunku naptim
//donerken o objeyi aldim buna birde color ekledim
//ama burada cok onemli bir konu var ,varolan datayi mutate etmis oluyoruz

console.log(pokemons);

//halbuki ben pokemons u degistirmeden color i ekleyerek yeni bir array olusturmasini istiyordum

//ozaman const newPokemon = pokemon; demek yerine ne yapmak lazim direkt onu almaktansa

const coloredPokemonsCopy = pokemons.map((pokemon, index) => {
  const newPokemon = { ...pokemon };
  newPokemon.color = 'red';
  return newPokemon;
});

console.log('coloredPokemons', coloredPokemonsCopy);
console.log('pokemons', pokemons);

//filter
//Sağlanan fonlsiyon tarafından uygulanan testi geçen tüm öğelerle birlikte yeni bir dizi oluşturur.
// Callback görevi: verilen koşulu test etmek.

const moreThan80Boolean = pokemons.filter((pokemon) => {
  return true;
});

const moreThan80 = pokemons.filter((pokemon) => {
  return pokemon.experience > 80;
});

console.log('moreThan80', moreThan80);
console.log('moreThan80', moreThan80);

//true hepsini doner, false bos [] doner
//arka planda bu aslinda bir if kosulu

if (pokemon.experience > 80) {
  //array e ekle
} else {
  //hicbirsey yapma
}

// type normal olanlarin name lerini yazdiralim
const normalPokemons = pokemons
  .filter((pokemon) => {
    return pokemon.type === 'Normal';
  })
  .map((pokemon) => {
    return pokemon.name;
  });

console.log('normalPokemons', normalPokemons);

//find
//Test fonksiyonunu karşılayan dizi içerisindeki ilk elemanın kendisini döndürür. Aksi halde undefined döndürür.

const pokemon1408 = pokemons.find((pokemon) => {
  return pokemon.id === 1408;
});

const moreThan80Find = pokemons.find((pokemon) => {
  return pokemon.experience > 80;
});

console.log('moreThan80', moreThan80Find);

// findIndex
// find ile ayni isi yapar ama index i dondurur

const pokemon1408Index = pokemons.findIndex((pokemon) => {
  return pokemon.id === 1408;
});

//some
// dizideki elemanlardan biri bile verilen sarti sagliyorsa true doner

const hasGrassPokemon = pokemons.some((pokemon) => {
  return pokemon.type === 'Grass';
});

//every
// dizideki tum elemanlar verilen sarti sagliyorsa true doner

const allPokemonsAreGrass = pokemons.every((pokemon) => {
  return pokemon.type === 'Grass';
});
