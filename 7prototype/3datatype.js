{
  // Digunakan untuk melihat properti apa saja yang dimiliki oleh prototype String
  console.log(String.prototype);
  //all of data type can prototype
}

{
  // dataType.prototype.namaMethod = function (n) {
  // kode program
  // };
}

{
  // Tipe data string memiliki prototype method repeat(). Sekarang kita akan membuat method baru dengan menggunakan method repeat() :

  // Kita membuat properti tambahan untuk String
  // Method untuk mengulang string selama yang kita butuhkan

  String.prototype.repeatString = function (n) {
    return this.repeat(n);
  };
  console.log("Skilvul".repeatString(3)); //SkilvulSkilvulSkilvul
}

{
  String.prototype.tambahKata = function (str) {
    return this.concat(str);
  };

  console.log("Belajar ".tambahKata("coding"));
}
