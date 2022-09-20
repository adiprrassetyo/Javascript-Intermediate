// Buat kode kamu di bawah ini
var searchList = ["kucing", "anjing", "kambing"];
localStorage.setItem("search", "pencarian 1");

var searchListString = JSON.stringify(searchList);
localStorage.setItem("hewan", searchListString);
