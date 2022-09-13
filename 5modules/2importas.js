import color from "./2exportas";
import person from "./2exportas";
import sayHello from "./2exportas";
console.log(color);
console.log(person);
console.log(sayHello);

// // // kode di bawah ini akan error
// // import warna from "./2exportas";
// // import orang from "./2exportas";
// // import katakanHalo from "./2exportas";

import {
  warnaKesukaan as favoriteColor,
  orangBaru as newPerson,
  katakanHalo as sayHello,
} from "./2exportas";

console.log(favoriteColor); // Output: Merah
console.log(newPerson); // Output: {nama: "Thoriq", umur: 25, alamat: "Jl. Kemang Raya"}
sayHello(newPerson.nama); // Output: Hello, Thoriq!
