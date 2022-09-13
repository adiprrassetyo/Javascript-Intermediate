{
  // .match() sama seperti .exec() yaitu sebuah method bawaan (built-in) dari JavaScript. Namun .match() jika disisipkan suatu flag akan menghasilkan hasil yang beda dengan .exec(). Contoh penggunaan .match():

  const regex = /i/;
  const word = "Indonesia";
  console.log(word.match(regex)); // Output: ['i']
}

{
  //   Special Character yang sering digunakan untuk flag adalah:
  //     g, untuk mencari ke dalam seluruh string yang ingin dicari.
  //     i, untuk mengabaikan aturan case-sensitive. Tidak mempermasalahkan besar kecilnya sebuah karakter. Tidak membedakan antara A dan a.
  // Contoh penggunaan flag g:
  const regex = /n/g;
  const word = "Indonesia";
  console.log(word.match(regex)); // Output: ['n', 'n']
  // Flags juga bisa digunakan dengan menggabungkan beberapa special character. Contoh penggunaan flag g dan i:
  const regexx = /i/gi;
  const wordd = "Indonesia";
  console.log(wordd.match(regexx)); // Output: ['I', 'i']
  // Kamu bisa lihat kode di atas, kita sudah mengatasi permasalahan case-sensitive dengan menggunakan flag i. Maka program sudah bisa mendapatkan karakter I dan i.
}

{
  const myRegex = /skilvul/i;
  const words = "Saya belajar coding di Skilvul setiap hari";
  const result = words.match(myRegex);
  console.log(result);
}
