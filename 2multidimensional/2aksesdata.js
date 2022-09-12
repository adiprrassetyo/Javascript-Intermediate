{
  // namaArray[indexBaris][indexKolom];
}

{
  let inventory = [
    ["Kaos Polos", 21],
    ["Jaket Hoodie", 13],
    ["Topi", 7],
  ];

  console.log(inventory[0][0]); // Output: Kaos Polos
  console.log(inventory[2][0]); // Output: Topi
  console.log(inventory[1][1]); // Output: 13
}

{
  let inventory = [
    ["Kaos Polos", 21],
    ["Jaket Hoodie", 13],
    ["Topi", 7],
  ];

  inventory.push(["Celana Jeans", 18]);

  console.log(inventory);
  // Output:
  // [
  //   ["Kaos Polos", 21],
  //   ["Jaket Hoodie", 13],
  //   ["Topi", 7],
  //   ["Celana Jeans", 18]
  // ];
}

{
  let inventory = [
    ["Kaos Polos", 21],
    ["Jaket Hoodie", 13],
    ["Topi", 7],
  ];

  let item = inventory[2][0];
  let jumlahTerjual = inventory[2][1];

  // Buat kode kamu di bawah ini
  var removed = inventory.splice(1, 1);

  console.log(item);
  console.log(jumlahTerjual);
  console.log(`Total penjualan ${item} ada sebanyak ${jumlahTerjual} item`);
}
