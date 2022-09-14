/**
*!Objek yang kamu buat selama ini sudah menerapkan konsep yang bernama encapsulation. Konsep ini dimaksudkan untuk membungkus data variabel dan fungsi menjadi satu kesatuan. Dengan membungkusnya, bisa menjadikannya sebuah objek yang memiliki properti dan method.

**Tujuan lain dari encapsulation adalah membatasi hak akses pada properti yang dimiliki oleh suatu objek. Sehingga data tetap terjaga dan hanya bisa diakses melalui method.
*/

{
  class NamaClass {
    constructor(nilai) {
      var _properti = nilai;

      // getter
      this.getProperti = function () {
        return _properti;
      };

      // setter
      this.setProperti = function (nilaiBaru) {
        _properti = nilaiBaru;
      };
    }

    // Method
  }
}

{
  class Hewan {
    //Deklarasikan properti seperti mendeklarasikan variabel biasa.
    constructor(nama) {
      //Kemudian beri tanda _ untuk membedakan antara properti dari parameter constructor
      let _nama = nama;
      //Method setter dan getter untuk mengakses nilai properti.
      this.getNama = function () {
        return _nama;
      };
      this.setNama = function (nama) {
        _nama = nama;
      };
    }
  }
  /**
  *!Sekarang properti pada class Hewan sudah tidak bisa diakses secara langsung seperti ini:

  ** let kucing = new Hewan("TOM");
  ** console.log(kucing.nama); // Output: undefined

  *?Untuk mengakses properti tersebut, kamu perlu menggunakan getter untuk mengambil nilai atau setter untuk mengubah nilai:
  */

  let kucing = new Hewan("TOM"); // membuat instance object
  console.log(kucing.getNama()); // memanggil getter. Output: TOM

  // Update nama hewan
  kucing.setNama("Delta"); // memanggil setter
  console.log(kucing.getNama()); // memanggil getter. Output: Delta
}

{
  class Pelajar {
    constructor(nama, sekolah) {
      let _nama = nama;
      let _sekolah = sekolah;

      this.getNama = function () {
        return _nama;
      };
      this.getSekolah = function () {
        return _sekolah;
      };
      this.setNama = function (nama) {
        _nama = nama;
      };
      this.setSekolah = function (sekolah) {
        _sekolah = sekolah;
      };
    }
    belajar() {
      return `${this.getNama()} belajar di ${this.getSekolah()}`;
    }
  }

  let pelajar = new Pelajar("Alpha", "Skilvul");
  console.log(pelajar.belajar());
}

{
  //private
  class Human {
    constructor(name, address) {
      this.name = name;
      this.address = address;
    }

    // #doGossip = () => {
    //   console.log(`My address will become viral ${thts.address}`);
    // };

    // talk() {
    //   console.log(this.#doGosslp()); //**Semua akan serror */
    // }
    // static #isHidingArea = true;
  }

  // let mj = new Human("Michael Jackson", "Isekai");
  // console.log(mj.talk());

  // try {
  //   Human.#isHidingArea;
  //   mj.#doGossip();
  // } catch (err) {
  //   console.error(err);
  // }
}

{
  //protected
  class Human {
    constructor(name, address) {
      this.name = name;
      this.address = address;
    }

    _call() {
      console.log(`Call me as a ${this.name}`);
    }
  }

  class Programmer extends Human {
    constructor(name, address, task, salary) {
      super(name, address);
      this.task = task;
      this.salary = salary;
    }
    doCall() {
      super._call(); //will run
    }
  }

  let sb = new Human("Sabrlna", "Jakarta");
  let job = new Programmer("Developer", "$1000");
  console.log(sb._call());
  console.log(job.doCall());
}

{
  class User {
    constructor(props) {
      //props is object, because it is better that way
      let { email, password } = props;
      this.email = email;
      this.encryptedPassword = this.#encrypt(password);
      //we wont save the plain password
    }
    //private method
    #encrypt = (password) => {
      return `encrypted-varsion-of-${password}`;
    };
    //getter
    #decrypt = () => {
      return this.encryptedPassword.split(`encrypted-version-of-
    `)[1];
    };
    authenticate(password) {
      return this.#decrypt() === password; // will return true or false
    }
  }

  let Bot = new User({
    email: "bot@mail.com",
    password: 1234,
  });

  const isAuthenticated = Bot.authenticate(1234);
  console.log(isAuthenticated); // true
}

{
  class Human {
    constructor(props) {
      if (this.constructor === Human) {
        throw new Error("Cannot instantiate from Abstract Class");
      }
      let { name, address } = props;
      this.name = name;
      this.address = address;
      this.profession = this.constructor.name;
    }
    work() {
      console.log("Working...");
    }

    introduce() {
      console.log(`Hello, my name is ${name}`);
    }
  }

  class Police extends Human {
    constructor(props) {
      super(props);
      this.rank = props.rank;
    }
    work() {
      console.log("Go to the police station");
      super.work();
    }
  }
  const Wiranto = new Police({
    name: "Niranto",
    address: "Unknown",
    rank: "General",
  });
  console.log(Wiranto.profession);

  try {
    let Abstract = new Human({
      name: "Abstract",
      address: "Unknown",
    });
  } catch (err) {
    console.log(err.message);
  }
}
