{
  // Kita juga akan sering menghadapi callback di dalam callback dan seterusnya. Masalah seperti ini disebut dengan Callback Hell.

  // Contoh dari callback hell :

  const verifyUser = (username, password, callback) => {
    dataBase.verifyUser(username, password, (error, userInfo) => {
      if (error) {
        callback(error);
      } else {
        dataBase.getRoles(username, (error, roles) => {
          if (error) {
            callback(error);
          } else {
            dataBase.logAccess(username, (error) => {
              if (error) {
                callback(error);
              } else {
                callback(null, userInfo, roles);
              }
            });
          }
        });
      }
    });
  };

  // Contoh lain dari callback hell:

  // doFirst(data, function () {
  //   doSecond(data, function () {
  //     dothird(data, function () {
  //       // Callback Hell
  //     });
  //   });
  // });
}

/**
 *!Pending / tertunda = Jika kita belum melewati batas waktu dilaksanakan dan belum mengetahui janji tersebut bisa ditepati atau tidak.
 *!Fulfilled / terpenuhi = Jika janji berhasil dipenuhi sebelum batas waktu yang ditentukan.
 *!Rejected / gagal = Jika janji gagal ditepati karena suatu hal dan kita melakukan rencana lain.
 *!Settled / terselesaikan = Jika semua janji sudah selesai terpenuhi kita sudah bebas melakukan hal lainnya.



 *?Pada promise analogi di atas bisa diartikan seperti:
  **pending, jika data sedang diproses.
  **fulfilled, jika data telah berhasil didapatkan.
  **rejected, jika data gagal didapatkan.
 */

{
  let newPromise = new Promise((resolve, reject) => {
    if (true) {
      // apa yang dilakukan jika promise fulfilled
      resolve("Berhasil"); //resolve(), jika proses berhasil atau fullfilled.
    } else {
      // apa yang dilakukan jika promise rejected
      reject("Gagal"); //reject(), jika proses gagal atau rejected.
    }
  });
}

{
  // Untuk fulfilled hanya bisa tereksekusi jika kita kondisi berhasil pada saat kita melakukan async. Kita set condition menjadi true untuk simulasi fulfilled
  const condition = true;

  let newPromise = new Promise((resolve, reject) => {
    if (condition) {
      // apa yang dilakukan jika promise 'fulfilled'
      resolve("Berhasil");
    } else {
      // apa yang dilakukan jika promise 'rejected'
      reject(new Error("Error Gagal"));
    }
  });

  // Untuk bisa mengeksekusi promise yang sudah dibuat kita bisa memanggil promise tersebut menggunakan .then():
  newPromise
    .then((result) => {
      return result;
    })
    .then((result2) => {
      console.log(result2 + "!!"); // Output: Berhasil!!
    });
}

{
  const condition = false;

  let newPromise = new Promise((resolve, reject) => {
    if (condition) {
      // apa yang dilakukan jika promise 'fulfilled'
      resolve("Berhasil");
    } else {
      // apa yang dilakukan jika promise 'rejected'
      reject(new Error("Error Gagal"));
    }
  });

  newPromise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error.message); // Output: "Error Gagal"
    });
}

{
  // Untuk rejected hanya bisa tereksekusi jika kita mengalami error pada saat kita melakukan proses asynchronous. Kita set condition menjadi false untuk simulasi rejected.:
  const condition = true;

  let newPromise = new Promise((resolve, reject) => {
    if (condition) {
      // apa yang dilakukan jika promise 'fulfilled'
      resolve("Berhasil"); //jika true maka akan berhasil
    } else {
      // apa yang dilakukan jika promise 'rejected'
      reject(new Error("Error Gagal"));
    }
  });

  newPromise
    .then((result) => {
      console.log(result); // Output: Berhasil
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log(
        "Finally tetap terpanggil dalam kondisi fulfilled ataupun rejected"
      ); // Output: Finally tetap terpanggil dalam kondisi fulfilled ataupun rejected
    });
}

{
  let condition = true;
  let tesPromise = new Promise((resolve, reject) => {
    if (condition) {
      resolve("Condition is fulfilled!");
    } else {
      reject(new Error("Condition is rejected!"));
    }
  });

  tesPromise
    .then((result) => {
      console.log(result); // Condition is fulfilled!
      console.log("After condition is fulfilled"); // After condition is fulfilled
    })
    .catch((error) => {
      console.log(error);
    }); //contoh lain dari async
}
