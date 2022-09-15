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

  doFirst(data, function () {
    doSecond(data, function () {
      dothird(data, function () {
        // Callback Hell
      });
    });
  });
}
