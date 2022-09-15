//mengambil elemend id demo
let demo = document.getElementById("demo");

//memanggil isi dari demo
console.log(demo.innerHTML); // Output: Hello, World!

// Ubah konten <p id="demo"> menjadi Hello, Dunia!
demo.innerHTML = "Hello, Dunia!";

console.log(demo.innerHTML); // Output: Hello, Dunia!

let catImage = document.getElementById("cat-image");

console.log(catImage.src); // Output: https://bit.ly/2FKluzq
console.log(catImage.alt); // Output: Cat

catImage.src = "https://bit.ly/3j6YdWJ";
catImage.alt = "Fish";
catImage.width = "400";

console.log(catImage.src); // Output: https://bit.ly/3j6YdWJ
console.log(catImage.alt); // Output: Fish
console.log(catImage.width); // Output: 400
