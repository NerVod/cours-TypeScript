const object1 = {
  a: "somestring",
  b: 42,
};

for (let [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed

var obj = { toto: "truc", machin: 42 };
console.log(Object.values(obj)); // ['truc', 42]

// un objet semblable à un tableau
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// un objet semblable à un tableau
// dont les clés sont ordonnées aléatoirement
// lorsque des clés numériques sont utilisées, les valeurs sont
// renvoyées selon l'ordre numérique des clés
var un_obj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(un_obj)); // ['b', 'c', 'a']

// getToto est une propriété qui
// n'est pas énumérable
var mon_obj = Object.create(
  {},
  {
    getToto: {
      value: function () {
        return this.toto;
      },
    },
  }
);
mon_obj.toto = "truc";
console.log(Object.values(mon_obj)); // ['truc']

// un argument de type primitif sera
// converti en un objet
console.log(Object.values("toto")); // ['t', 'o', 't', 'o']
