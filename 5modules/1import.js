//import
// import { data } from "./namaModul.js";
// index.js
import { name, orang, sayHello } from "./1Export";

// Menggunakan hasil import
console.log(name); // Output: Thoriq
console.log(orang); // Output: {nama: "Thoriq", umur: 25, alamat: "Jl. Kemang Raya"}
sayHello(orang.nama); // Output: Hello, Thoriq!
