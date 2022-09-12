// .findIndex() memberikan nilai balik berupa nomor index dari elemen pertama yang ditemukan jika memenuhi kondisi pada return statement atau -1 jika tidak ditemukan.
{
  // Anggap saja kita memiliki variabel array yang isinya terdapat data string nama-nama hewan. Kita ingin mendapatkan nomor index dari elemen pertama yang memiliki awalan huruf "B". Dengan menggunakan .indexOf(), kita hanya bisa melakukan hal seperti ini:
  let arrHewan = ["Kucing", "Burung", "Gajah", "Singa", "Jerapah"];

  let index = arrHewan.indexOf("Burung");

  console.log(index);
  // Output: 2
}

{
  // Untuk melakukan hal tersebut, kita dapat menggunakan .findIndex()sehingga kita dapat melakukan pencarian berdasarkan kondisi yang diinginkan. Misal, kita hendak mencari nama hewan dengan awalan huruf string "B":
  let arrHewan = ["Kucing", "Burung", "Gajah", "Singa", "Jerapah"];

  let index = arrHewan.findIndex((value) => {
    return value[0] === "B"; // Huruf pertama dari value
  });

  console.log(index);
  // Output: 1
}

{
  let angka = [14, 24, 55, 60, 32, 85];

  // Buat kode kamu di bawah ini
  let cariIndexAngka = angka.findIndex((item) => {
    return item % 5 === 0 && item % 10 === 0; //habis jika dibagi dengan 5 dan 10
  });
  console.log(cariIndexAngka);
}
