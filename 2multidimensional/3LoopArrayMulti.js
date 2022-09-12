{
  let inventory = [
    ["Kaos Polos", 21],
    ["Jaket Hoodie", 13],
    ["Topi", 7],
  ];

  console.log(inventory[0][0]); // Output: Kaos Polos
  console.log(inventory[0][1]); // Output: 21
  console.log(inventory[1][0]); // Output: Jaket Hoodie
  console.log(inventory[1][1]); // Output: 13
  console.log(inventory[2][0]); // Output: Topi
  console.log(inventory[2][1]); // Output: 7
}
// Di bawah ini merupakan contoh penggunaan beberapa perulangan yang dapat digunakan ketika kamu ingin mengakses data pada masing-masing elemen:
// // Menggunakan .for():

{
  //menggunakan for
  let inventory = [
    ["Kaos Polos", 21],
    ["Jaket Hoodie", 13],
    ["Topi", 7],
  ];

  for (let i = 0; i < inventory.length; i++) {
    for (let j = 0; j < inventory[i].length; j++) {
      console.log(inventory[i][j]);
    }
  }

  // Output:
  // Kaos Polos
  // 21
  // Jaket Hoodie
  // 13
  // Topi
  // 7
}

{
  //foreach
  let inventory = [
    ["Kaos Polos", 21],
    ["Jaket Hoodie", 13],
    ["Topi", 7],
  ];

  inventory.forEach((baris) => {
    baris.forEach((kolom) => {
      console.log(kolom);
    });
  });

  // Output:
  // Kaos Polos
  // 21
  // Jaket Hoodie
  // 13
  // Topi
  // 7

  let hewan = [
    ["Harimau", "Karnivora"],
    ["Gajah", "Herbivora"],
    ["Gorila", "Omnivora"],
  ];

  // Buat kode kamu dibawah ini
  hewan.forEach((baris) => {
    baris.forEach((kolom) => {
      console.log(kolom);
    });
  });
}

{
  //map
  let inventory = [
    ["Kaos Polos", 21],
    ["Jaket Hoodie", 13],
    ["Topi", 7],
  ];

  inventory.map((baris) => {
    baris.map((kolom) => {
      console.log(kolom);
    });
  });

  // Output:
  // Kaos Polos
  // 21
  // Jaket Hoodie
  // 13
  // Topi
  // 7
}
