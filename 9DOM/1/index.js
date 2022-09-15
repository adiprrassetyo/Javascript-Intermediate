let umur = document.getElementById("umur").value;

console.log(umur); // Output: 20

let semuaTagH1 = document.getElementsByTagName("h1");

console.log(semuaTagH1); // Output: HTMLCollection(2) [h1#title, h1.subtitle]
console.log(semuaTagH1[0]); // Output: <h1 id="title">Hello, World!</h1>
console.log(semuaTagH1[1]); // Output: <h1 class="subtitle">Mari Belajar JavaScript</h1>
