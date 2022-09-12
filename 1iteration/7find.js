// Mungkin terlihat hampir sama seperti .filter(). Namun .filter() memberikan hasil dalam bentuk array, sedangkan .find() hanya memberikan hasil single value.
{
  let people = [
    {
      name: "Jane",
      age: 20,
    },
    {
      name: "Doe",
      age: 15,
    },
  ];

  let janeFind = people.find((item) => item.name === "Jane");

  let janeFilter = people.filter((item) => item.name === "Jane");

  console.log(janeFind);
  // Output: {name: 'Jane', age: 20} --> bentuk object

  console.log(janeFilter);
  // Output: [{ name: 'Jane', age: 20 }] --> bentuk array of object
}

{
  let number = [1, 2, 3, 4, 5, 6, 7];

  let moreThanThree = number.find((data) => data > 3);
  let lebihDariTiga = number.filter((data) => data > 3);

  console.log(moreThanThree);
  // Output: 4

  console.log(lebihDariTiga);
  // Output: [4,5,6,7]
}

{
  let hewan = ["Harimau", "Gajah", "Jerapah", "Ular"];

  // Buat kode kamu di bawah ini
  let cariHewan = hewan.find((item) => {
    return item[0] == "J" && item[item.length - 1] == "h";
    // return item > "J" && item < "h"; // h tidak berfungsi
  });
  console.log(cariHewan);
}
