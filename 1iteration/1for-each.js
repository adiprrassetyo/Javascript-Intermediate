// // array.forEach((value, index, array) => {
// // kode program
// })

{
  let arr = [1, 2, 3, 4, 5];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

{
  let colors = ["blue", "red", "yellow", "green"];

  colors.forEach((data) => {
    console.log(data);
  });

  // Dari kode di atas dapat kita lihat bahwa variabel data merepresentasikan elemen dari array colors.
}

{
  // Kita juga dapat menggunakan parameter index untuk mendapatkan/mengakses index dari setiap elemen array:
  let colors = ["blue", "red", "yellow", "green"];

  colors.forEach((data, idx) => {
    if (idx % 2 === 0) {
      // melakukan pengecekan jika index elemen adalah bilangan genap
      console.log(data, idx);
    } else {
      console.log("not allowed", idx);
    }
  });

  // terdapat variabel idx sebagai callback yang mewakili index setiap elemen array.
  // Sama halnya dengan menggunakan for, while, dan do-while, kita dapat melakukan berbagai macam action saat iterasi dalam elemen array yang sedang berjalan.
  // Penggunaan .forEach() dan perulangan lainnya untuk memberikan pilihan bagi programmer dalam kemudahan menulis serta membaca kode.
}

{
  let hewan = ["Ayam", "Buaya", "Cicak", "Domba"];

  hewan.forEach((item) => {
    if (item[0] < "C") {
      console.log(item);
    }
  });
  //   "Ayam"
  // "Buaya"
}
