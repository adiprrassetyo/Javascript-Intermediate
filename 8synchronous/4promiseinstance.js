fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) // Jika data berhasil didapatkan
  .then((json) => console.log(json))
  .catch((error) => console.log(error)) // Jika data tidak berhasil didapatkan
  .finally(() => {
    console.log(
      "Finally tetap terpanggil dalam kondisi fulfilled ataupun rejected"
    ); // Finally tetap terpanggil dalam kondisi fulfilled ataupun rejected
  });

/**
  **Dari kode di atas, kita dapat lihat bahwa .then() digunakan untuk mengantisipasi keadaan fulfilled, setelah response didapatkan dan menampilkan data array of object dari server.

*!Kemudian .catch() digunakan untuk mengantisipasi keadaan rejected, jika response gagal didapatkan atau terdapat error lain dari server, lantas apa yang ingin kita lakukan pada aplikasi? Menampilkan page error? Atau menampilkan alert?

*!Terakhir, .finally() digunakan untuk mengantisipasi apa yang akan aplikasi lakukan saat response berhasil ataupun gagal didapatkan. Namun, penggunaan .finally() biasanya jarang dilakukan.
  */
