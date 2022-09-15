let demo = document.getElementById("demo");
demo.onclick = showMessage;
//Di baris demo.onclick = showMessage;, kita menambahkan event onclick ke element <button id="demo"> dan memberi nilai showMessage yang merupakan fungsi untuk menampilkan alert dengan tulisan "Hello, World!".

function showMessage() {
  alert("Hello, World!");
}
