/**
*!nicode property escapes digunakan untuk membedakan berdasarkan karakter unicode misalnya, huruf besar kecil, simbol matematika, dan tanda baca. Contoh: \p, \P.

**Karakter yang digunakan dalam unicode property escapes ini adalah:
*?Karakter ** \p**

*!Ada 2 jenis penggunaan \p ini, yaitu:
**Non-binary values
*?\p{UnicodePropertyValue} atau \p{UnicodePropertyName=UnicodePropertyValue} dimana UnicodePropertyName terdiri dari General_Category (gc), Script (sc), Script_Extensions (scx), sedangkan untuk UnicodePropertyValue terdiri dari: Letter (L), Symbol (S), Separator (Z), Number (N), dan lain sebagainya.

*!📝  Catatan: Regular expression unicode property \p{...} hanya bisa dilakukan dengan diikuti flag u di akhir pola.

*/

{
  // Contoh penggunaan \p  {UnicodePropertyName=UnicodePropertyValue}:

  const regex = /\p{General_Category=Letter}/gu; // --> ada flag u
  const word = "Skilvul";
  console.log(word.match(regex));
  // Output: ["S", "k", "i", "l", "v", "u", "l"]

  // Hasil yang sama dengan kode di atas akan kita dapatkan jika kita menggunakan pattern /\p{sc=Latin}/gu.
}

{
  const regex = /\p{Script=Latin}/gu;
  const word = "Skilvul";
  console.log(word.match(regex)); // Output: ["S", "k", "i", "l", "v", "u", "l"]

  // Lalu berikut contoh penggunaan /\p{Script_Extensions=Hira}/gu:
}

{
  const regex = /\p{Script_Extensions=Hira}/gu;
  const word = "あ";
  console.log(regex.test(word)); // Output: true

  // Berbeda dengan Script, Script_Extensions kebanyakan digunakan untuk simbol-simbol bahasa.
}

/**
 **Binary & non-binary values
 *!UnicodeBinaryPropertyName sering digunakan untuk kode ASCII (American Standard Code for Information Interchange).
 */

{
  // Contoh penggunaan {UnicodeBinaryPropertyName}:

  const regex = /\u0024/gu;
  const word = "PS5 seharga $499";
  console.log(word.match(regex)); // Output: ["$"]

  // u0024 adalah kode ASCII dari $.
}

/**
 *?Karakter ** \P**
 *!Seperti karakter pada topik-topik sebelumnya, \P adalah negasi dari \p.
 */
{
  // Contoh penggunaan \P:

  const regex = /\P{General_Category=Letter}/gu;
  const word = "Skilvul";
  console.log(word.match(regex)); // Output: null

  const regex2 = /\P{scx=Hira}/gu;
  const word2 = "あ";
  console.log(regex2.test(word2)); // Output: false
}

{
  const regex = /\0x1f604/gu;
  const word = "PS5 seharga $499";

  console.log(word.match(regex));
}

{
  const word = "Skilvul123";

  // agar kita dapat menghasilkan keluaran:

  ["1", "2", "3"];
  // /\p{N}/gu;
}
