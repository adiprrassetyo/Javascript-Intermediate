function rekursif() {
  // kode lainnya
  rekursif();
}

function faktorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * faktorial(n - 1);
  }
}

console.log(faktorial(4));
// Prosesnya menjadi
// 4*faktorial(3) // faktorial(3) = 3*faktorial(2)
// 4*3*faktorial(2) // faktorial(2)= 2*faktorial(1)
// 4*3*2*faktorial(1) //faktorial(1) = 1 --> masuk ke kondisi n==1
// sehingga didapatkan hasil
// 4*3*2*1=24

{
  // Buat kode kamu di bawah ini
  function balikKata(str) {
    // mengembalikan string kosong ""
    if (str == "") {
      return "";
    } else {
      // me-return function balikKata() dengan argumen str yang dimulai dari index ke-1 (gunakan method substr()).
      // Kemudian gabungkan dengan statement str index ke-0
      // (contoh: str[0]) menggunakan operator +.
      // Contoh menggunakan substr():
      // let nama = "Terra";
      // console.log(nama.substr(1));
      // Output: "erra"
      return balikKata(str.substr(1)) + str[0];
    }
  }
  console.log(balikKata("Skilvul"));
}
