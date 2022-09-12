// .includes() digunakan untuk memeriksa apakah terdapat salah satu data yang kita ingikan dalam elemen array yang kita terima, jika tidak ada maka .includes() akan membalikan nilai false dan menjadi true jika sebaliknya.

// Struktur kode dari .includes():

// // array.includes("--data yang kita cari--");

{
  const foods = ["siomay", "dimsum", "gyoza", "pangsit"];

  const isThereDimsum = foods.includes("dimsum");
  const isTherePizza = foods.includes("pizza");

  console.log(isThereDimsum);
  // Output: true
  console.log(isTherePizza);
  // Output: false
  console.log(!!foods.find((data) => data === "dimsum"));
  // Output: true --> menggunakan find
  //Sebagai info tambahan, dari kode di atas, kita dapat melihat penulisan tanda double negasi !!, ini adalah trik penulisan kode JavaScript yang artinya, tanda seru pertama (negasi pertama) mengubah data (tipe data apapun) ke bentuk boolean, lalu tanda seru kedua (negasi kedua), mengubah boolean menjadi nilai boolean yang kita harapkan.
}
//Sebagai contoh untuk melihat fungsi dari operator double negasi !!:
{
  const foods = ["siomay", "dimsum", "gyoza", "pangsit"];

  const pizza = foods.find((data) => data === "pizza");

  console.log(pizza);
  // Output: undefined

  // Jika undefined diberi negasi
  console.log(!undefined);
  // Output: true --> sedangkan kita mengharapkan jika undefined, berarti kondisi false.

  // maka agar hasilnya negatif, kita beri double negasi
  console.log(!!undefined);
  // Output: false
}

{
  const foods = ["siomay", "dimsum", "gyoza", "pangsit"];

  // Buat kode kamu di bawah ini
  function checkFood(foodName) {
    // isNotEmptyString untuk memastikan foodName bukan string kosong
    const isNotEmptyString = foodName !== " ";
    // foodIsIncluded untuk mengecek keberadaan foodName di dalam array foods menggunakan .includes().
    const foodIsIncluded = foods.includes(foodName);
    // mengecek kebenaran dari dua variabel yaitu isNotEmptyString dan foodIsIncluded
    if (isNotEmptyString && foodIsIncluded) {
      console.log("Makanan sudah tersedia");
      console.log(foods);
    } else {
      foods.push(foodName);
      console.log(foods);
    }
  }

  checkFood("dimsum");
}
