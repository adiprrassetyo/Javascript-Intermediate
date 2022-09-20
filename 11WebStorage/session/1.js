(randomName) => "John Doe";
(people) => [
  { name: "Sherlock Holmes", age: 38 },
  { name: "John Watson", age: 40 },
];
//mengambil
sessionStorage.getItem("randomName");
JSON.parse(sessionStorage.getItem("people"));
//menyimpan
sessionStorage.setItem("carts", JSON.stringify(cartList));
sessionStorage.removeItem("key");

// menghapus seluruh session storage sekaligus
sessionStorage.clear();
