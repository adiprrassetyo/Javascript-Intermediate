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

{
  let input = [100, 50, 60, 10];
  let output = [];

  input.forEach((item) => {
    output.push(item / 10);
  });

  console.log(output);
  // Output [10, 5, 6, 1]
  // dapat di permudah menggunakan map yaitu membuat array baru
}

{
  let arrAngka = [1, 2, 3, 4, 5];
  let hasil = 0;

  arrAngka.forEach((value) => {
    hasil += value;
  });

  console.log(hasil);
  // Output: 15
  // dapat dipermudah menggunakan reduce
}

{
  let arrBuah = ["Jeruk", "Apel", "Semangka", "Apel"];
  let indexApel = 0;

  arrBuah.forEach((item, index) => {
    if (item == "Apel") {
      indexApel = index;
    }
  });

  console.log(indexApel);
  // Output: 3
  //dapat dipermudah menggunakan indexof

  // Kode di atas terdapat 2 elemen string Apel pada index ke-1 dan index ke-3. Hasil nomor index yang didapatkan adalah 3, tidak sesuai dengan yang kita harapkan. Ini terjadi karena .forEach() akan melakukan iterasi pada seluruh data. Akibatnya yang kita dapatkan adalah nomor index dari buah Apel yang terakhir.
}
