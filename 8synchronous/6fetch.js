{
  // Berikut ini contoh request data dengan fetch() menggunakan promise:

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
      return response.json();
    })
    .then(function (post) {
      console.log(post);
    });
  // Kode di atas mengambil data end-point dari API JSONPlaceholder . Berikut ini tampilan dari console.log() untuk data yang kita panggil:
}

{
  // Berikut contoh request data dengan fetch() menggunakan async/await:

  const tesFetchAsync = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    response = await response.json();
    console.log(response);
  };
  tesFetchAsync();
  // Kita masih mengambil data dari sumber end-point yang sama dengan fetch() sebelumnya yang menggunakan promise sehingga hasilnya pun masih sama persis seperti sebelumnya.

  // Dalam penggunaan di dunia kerja dan aplikasi berskala besar kita bisa memilih menggunakan promise ataupun async/await tetapi kita lihat jika menggunakan async/await, kode kita terlihat lebih clean dan mudah dibaca.
}

{
  function ambilDataUser() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        return response.json();
      })
      .then(function (users) {
        console.log(users);
      });
  }

  ambilDataUser();
}
