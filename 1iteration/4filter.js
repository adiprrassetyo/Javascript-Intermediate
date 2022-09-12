{
  let arrAngka = [1, 2, 3, 4, 5];

  let filterArr = arrAngka.filter((item) => {
    return item > 2;
  });
  // let filterArr = arrAngka.filter((item) => item > 2);

  console.log(filterArr);
  // Output: [3, 4, 5]
}

{
  const fruits = [
    "Jambu",
    "Jeruk",
    "Apel",
    "Mangga",
    "Strawberry",
    "Jeruk",
    "Apel",
  ];

  const apples = fruits.filter((item) => {
    return item === "Apel"; // hanya menampilkan elemen array fruits yang bernama 'Apel'
  });

  console.log(apples);
  // Output: ['Apel', 'Apel']
}

{
  let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let genap = angka.filter((item) => {
    return item % 2 === 0;
  });
  console.log(genap);
}
