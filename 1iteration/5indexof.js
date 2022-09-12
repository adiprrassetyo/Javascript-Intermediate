{
  let arrBuah = ["Jeruk", "Apel", "Semangka", "Apel"];

  let indexApel = arrBuah.indexOf("Apel");

  console.log(indexApel);
  // Output: 1
}

// Tapi bagaimana jika kita ingin mendapatkan buah Apel yang terakhir? Kita dapat menambahkan argumen ke-2 pada .indexOf(), sehingga kodenya menjadi seperti berikut:

{
  let arrBuah = ["Jeruk", "Apel", "Semangka", "Apel", "Mangga"];

  let indexApel = arrBuah.indexOf("Apel", 2);

  console.log(indexApel);
  // Output: 3
}

{
  // Perbaiki kode berikut
  let hewan = ["Ayam", "Domba", "Ayam", "Rubah"];

  let indexAyam = hewan.indexOf("Ayam");
  console.log(indexAyam);
}
