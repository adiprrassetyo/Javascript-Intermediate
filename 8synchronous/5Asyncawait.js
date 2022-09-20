// async, mengubah function synchronous menjadi asynchronous.
// await, menunda eksekusi hingga proses asynchronous selesai.

{
  // Berikut ini contoh penggunaan dari async :
  // async menggunakan keyword function
  // async function tesAsyncAwait() {
  //   return "Fulfilled";
  // }
  // console.log(tesAsyncAwait());
  // async menggunakan arrow function
  // const tesAsyncAwait = async () => {
  //   return "Fulfilled";
  // };
  // console.log(tesAsyncAwait());
}

{
  // Berikut ini contoh penggunaan dari async/await :
  // async function tesAsyncAwait() {
  //   await "Fulfilled";
  // }
}

{
  // Kita juga bisa memberikan error handling pada async/await. Contoh lengkap penggunaan async/await:

  // Definisikan dahulu promise yang ingin digunakan
  let condition = true;
  let tesAsyncAwait = async (condition) => {
    if (condition) {
      return "Condition is fulfilled!";
    } else {
      throw "Condition is rejected!";
    }
  };

  // Membuat fungsi run menjadi asynchronous menggunakan async/await
  const run = async (condition) => {
    try {
      const message = await tesAsyncAwait(condition);
      console.log(message); // Output: Condition is fulfilled!
      console.log("After condition is fulfilled"); // Output: After condition is fulfilled
    } catch (error) {
      console.log(error);
    }
  };

  run(false); //contoh lain dari promise

  // Dari kode di atas, kita dapat melihat bahwa run adalah sebuah fungsi async dan await dipanggil bersamaan dengan fungsi tesAsyncAwait(condition). await pada fungsi ini artinya, console.log pada message dan After condition is fulfilled tidak akan dijalankan (ditunda) hingga proses tesAsyncAwait(condition) selesai dijalankan.
}

{
  function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  }

  async function messages() {
    let msg = await helloWorld();
    console.log(msg);
  }

  messages();
}
