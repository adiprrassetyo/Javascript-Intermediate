{
  let inventory = [
    ["Kaos Polos", 21],
    ["Jaket Hoodie", 13],
    ["Topi", 7],
  ];

  // total produk dikurangi data yg terjual
  for (let i = 0; i < inventory.length; i++) {
    let stokTersisa = 100 - inventory[i][1];
    inventory[i].push(stokTersisa);
  }
}

{
  let inventory = [
    ["Kaos Polos", 21],
    ["Jaket Hoodie", 13],
    ["Topi", 7],
  ];

  // total produk dikurangi data yg terjual
  inventory.forEach((dataInventory) => {
    let stokTersisa = 100 - dataInventory[1];
    dataInventory.push(stokTersisa);
  });
}

{
  let inventory = [
    ["Kaos Polos", 21],
    ["Jaket Hoodie", 13],
    ["Topi", 7],
  ];

  // total produk dikurangi data yg terjual
  inventory.map((dataInventory) => {
    let stokTersisa = 100 - dataInventory[1];
    dataInventory.push(stokTersisa);
  });
}
//jika kita lakukan console log
// Output:
[
  ["Kaos Polos", 21, 79],
  ["Jaket Hoodie", 13, 87],
  ["Topi", 7, 93],
];

{
  let buah = [
    ["Apel", 7],
    ["Jeruk", 4],
    ["Mangga", 2],
  ];

  // Kolom 0, nama buah
  // Kolom 1, buah yang sudah dimakan
  // Tulis kode kamu di bawah ini
  buah.forEach((item) => {
    let sisa = 50 - item[1];
    item.push(sisa);
  });

  console.log(buah);
}
