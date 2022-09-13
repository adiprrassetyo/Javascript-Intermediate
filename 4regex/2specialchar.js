{
  const kata = "skilvul";
  const pattern = /skil*l/;
  console.log(pattern.test(kata)); // Output: true
}

{
  /**
   *! notasi * setelah kata skil berfungsi untuk menggantikan karakter apa saja yang muncul setelahnya. * termasuk ke dalam special character dari regex.

  **Ada beberapa kategori di dalam special character regex:

    **Assertions
    *!Assertions melakukan pencocokan karakter di awal, akhir, serta batasan awal dan akhir dari suatu kata/baris.
    Contoh: ^, $, \b

    **Shorthand Character classes
    Membedakan berbagai jenis karakter. Contoh: membedakan huruf, simbol, dan angka.
    Contoh: \d, \w, \s, \

    **Quantifiers
    Menunjukkan jumlah karakter atau ekspresi yang cocok.
    Contoh: *, +, ?

    **Groups and ranges
    Menunjukkan grup dan range dari suatu ekspresi.
    Contoh: x|y, [xyz], [^xyz]

    **Unicode property escapes
    Membedakan berdasarkan karakter unicode, misalnya, huruf besar dan kecil, simbol matematika, dan tanda baca.
    Contoh: \p, \P

    ** g, 
    untuk mencari ke dalam seluruh string yang ingin dicari.

    **i, 
    untuk mengabaikan aturan case-sensitive. Tidak mempermasalahkan besar kecilnya sebuah karakter. Tidak membedakan antara A dan a.
  */
}
