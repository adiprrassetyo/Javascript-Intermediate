{
  const namaVariablee = /pola/;
  const namaVariable = new RegExp("pola");
}

{
  // Digunakan untuk mencari string yang kita inginkan pada pola regex yang tersedia dengan mengembalikan nilai array atau null. Contoh penggunaan *method *.exec():
  // .exec()
  const stringg = "Saya suka kopi";
  const pattern = /kopi/;
  const resultt = pattern.exec(stringg);
  console.log(resultt);
  // Output: ["kopi", index: 10, input: "Saya suka kopi", groups: undefined]

  const string = "Indonesia Tanah Air Ku";
  const words = ["Tanah", "Air"];
  const result = new RegExp(words.join(" ")).exec(string);
  console.log(result);
  // Output: ["Tanah Air", index: 10, input: "Indonesia Tanah Air Ku", groups: undefined]
}

{
  // Digunakan untuk string matching dari pencarian teks pada pola regex yang tersedia dengan mengembalikan nilai boolean (true/false).
  const regex = /Testt/;
  console.log(regex.test("Testt")); // Output: true

  // Contoh jika string yang dicari ditemukan:
  const words = ["Tes", "Tess", "Test"];
  console.log(new RegExp(words[2]).test("Tes")); // Output: true
  // Contoh jika string yang dicari tidak ditemukan:
  const wordss = ["Tes", "Tess", "Test"];
  console.log(new RegExp(wordss[2]).test("Tess")); // Output: false
}

{
  // Buat kode kamu di bawah ini
  const string = "saya belajar di skilvul.com";
  const pattern = new RegExp("skilvul.com");
  const result = pattern.exec(string);
  const status = pattern.test(string);

  console.log(result);
  console.log(status);
}

{
  const kata = "Saya belajar JavaScript di Skilvul.com";
  const pattern = /Belajar/;
  const result = pattern.exec(kata);
  const test = pattern.test(kata);

  console.log(result); //null
  console.log(test); // false
}
