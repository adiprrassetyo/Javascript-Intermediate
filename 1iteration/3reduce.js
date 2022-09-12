// memodifikasi array menjadi:

//  Sebuah data/nilai baru
//  truktur data baru sesuai kebutuhan kita. Umumnya digunakan untuk melakukan operasi matematika.
{
  // arr.reduce((total, value, index, array) => {
  //   // kode program
  // }, initialValue);
}

{
  let arrAngka = [1, 2, 3, 4, 5];

  let hasil = arrAngka.reduce((total, value) => {
    // Setiap angka akan dijumlahkan dengan variabel total dan kemudian akan dikembalikan hasilnya.
    return total + value;
  });
  // let hasil = arrAngka.reduce((total, value) => total + value); //memperpendek coding

  console.log(hasil);
  // Output: 15
}

{
  //Menggunakan initial value pada .reduce()
  let arrAngka = [1, 2, 3, 4, 5];

  let hasil = arrAngka.reduce((total, value) => {
    return total + value;
  }, 5); // initial valuenya adalah 5

  console.log(hasil);
  // Output: 20
}

{
  let fruits = ["Jambu", "Apel", "Mangga", "Jambu", "Jeruk", "Apel"];

  let fruitList = fruits.reduce((list, fruit) => {
    if (list[fruit]) {
      // memeriksa apakah buah tersebut sudah ada dalam objek atau belum
      list[fruit] = list[fruit] + 1; // jika ada, nilainya + 1
    } else {
      list[fruit] = 1; // jika belum ada, beri nilai 1
    }
    return list; // mengembalikan objek
  }, {}); // initial valuenya adalah objek

  console.log(fruitList);

  // Output:
  // {
  //   Jambu:2,
  //   Apel:2,
  //   Mangga:1,
  //   Jeruk:1
  // }
}

{
  let nilai = [100, 80, 80, 70, 90];

  // Buat kode kamu di bawah ini
  let jumlahNilai = nilai.reduce((total, item) => {
    return total + item;
  });

  let rataRata = jumlahNilai / nilai.length;
  console.log(rataRata);
}
