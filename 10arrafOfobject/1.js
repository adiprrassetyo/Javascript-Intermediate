{
  // Menggunakan for()
  const fruits = [
    {
      name: "strawberry",
      color: "red",
      qty: 5,
    },
    {
      name: "blueberry",
      color: "blue",
      qty: 10,
    },
    {
      name: "orange",
      color: "orange",
      qty: 5,
    },
    {
      name: "grape",
      color: "purple",
      qty: 2,
    },
  ];

  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i].name);
  }

  // Output:
  // strawberry
  // blueberry
  // orange
  // grape
}

{
  // Menggunakan .map()
  const fruits = [
    {
      name: "strawberry",
      color: "red",
      qty: 5,
    },
    {
      name: "blueberry",
      color: "blue",
      qty: 10,
    },
    {
      name: "orange",
      color: "orange",
      qty: 5,
    },
    {
      name: "grape",
      color: "purple",
      qty: 2,
    },
  ];

  fruits.map((data) => console.log(data.name));

  // Output:
  // strawberry
  // blueberry
  // orange
  // grape
}
