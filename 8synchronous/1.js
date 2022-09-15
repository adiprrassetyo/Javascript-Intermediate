/**
 *!Synchronous adalah saat kita mengeksekusi perintah satu persatu dan berurutan

  console.log("antrian 1");
  console.log("antrian 2");
  console.log("antrian 3");

  // output
  // antrian 1
  // antrian 2
  // antrian 3

  *!Asynchronous yang biasa dikenal juga dengan sebutan non-blocking mengizinkan komputer kita untuk memproses perintah lain sambil menunggu suatu proses lain yang sedang berlangsung
 */

{
  // Contoh asynchronous menggunakan setTimeout():

  setTimeout(() => {
    console.log("Cuci baju"); // proses asynchronous
  }, 1000);
  console.log("Menyapu");
  console.log("Mengepel");
  console.log("Memasak");

  // 1000 ms = 1 second

  // Output:
  // Menyapu
  // Mengepel
  // Memasak
  // Cuci baju
}

{
  // Contoh asynchronous menggunakan setInterval():

  setInterval(() => {
    console.log("Cuci baju"); // proses asynchronous
  }, 3000);
  console.log("Menyapu");
  console.log("Mengepel");
  console.log("Memasak");

  // 3000 ms = 3 second

  // Output:
  // Menyapu
  // Mengepel
  // Memasak
  // Cuci baju (x time)

  // Cuci baju akan dijalankan setiap 3 detik sekali

  //Kita bisa lihat bahwa hasilnya urutan pertama adalah Menyapu, Mengepel, Memasak, dan Cuci Baju. Ini terjadi karena cara kerja asynchronous tidak akan menunggu suatu perintah sampai selesai, namun langsung mengeksekusi perintah lainnya.
}
