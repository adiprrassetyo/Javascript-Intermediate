/**
*!Assertion digunakan untuk mencocokan karakter yang terdapat dalam suatu kata/kalimat.

**Beberapa karakter spesial yang sering digunakan dalam assertion adalah:
*/

{
  // Contoh penggunaan karakter spesial ^: Digunakan untuk **mencocokkan awal **dari suatu string. Karakter spesial ini berbeda penggunaannya ketika digunakan dalam kategori Group and Ranges.
  const regex = /^I/g;
  const word = "Indonesia";
  console.log(word.match(regex)); // Output: ['I']

  const regexx = /^i/g;
  const wordd = "Indonesia";
  console.log(wordd.match(regexx)); // Output: null
}

{
  // Contoh penggunaan karakter spesial $: Digunakan untuk **mencocokkan akhir **dari suatu string.
  const regex = /a$/g;
  const word = "Indonesia";
  console.log(word.match(regex)); // Output: ['a']

  const regexx = /A$/g;
  const wordd = "Indonesia";
  console.log(wordd.match(regexx)); // Output: null
}

{
  // Contoh penggunaan karakter spesial \b:  Digunakan untuk memberi batasan dari suatu string. Huruf karakter sesudah karakter spesial ini harus tidak diikuti oleh huruf karakter lain.
  const regex = /ee\b/gi;
  const word = "Tree";
  console.log(word.match(regex)); // Output: ['ee']
}

{
  // /b tidak boleh diikut oleh karakter lain setelah oo (n)

  const regex = /oo\b/gi;
  const word = "Moon";
  console.log(word.match(regex)); // Output: null
  // Kode di atas akan menghasilkan null karena masih ada huruf n dalam kalimat Moon.
}

{
  // Contoh penggunaan x(?=y) (lookahead): Hasilnya akan berupa 'x' hanya jika setelah 'x' diikuti oleh 'y' tanpa spasi.kekanan
  const regex = /Moon(?=Child)/;
  const word = "MoonChild";
  console.log(word.match(regex)); // Output: ["Moon"]

  const regexx = /Moon(?=Child)/;
  const wordd = "Moon child";
  console.log(wordd.match(regexx)); // Output: null
}

{
  // Contoh penggunaan (?<=y)x (lookbehind): Hasilnya akan berupa 'x' hanya jika sebelum 'x' adalah 'y' tanpa spasi.kekiri
  const regex = /(?<=Jekyll)Hyde/;
  const word = "JekyllHyde";
  console.log(word.match(regex)); // Output: ["Hyde"]

  const regexx = /(?<=Jekyll)Hyde/;
  const wordd = "HydeJekyll";
  console.log(wordd.match(regexx)); // Output: null
}

{
  const word = "Cakes";
  const firstChar = /^C/;
  const lastChar = /s$/;
  const lastTwoChars = /es\b/;
  console.log(word.match(firstChar));
  console.log(word.match(lastChar));
  console.log(word.match(lastTwoChars));
}
