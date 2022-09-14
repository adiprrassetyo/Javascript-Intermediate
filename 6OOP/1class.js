{
  // Objek pada JavaScript, dapat langsung dibuat dengan cara menggunakan objek literal seperti berikut ini:
  let hewan = {
    nama: "Kucing",
    kaki: 4,
    tidur: function () {
      return `${this.nama} sedang tidur`;
    },
  };
}

{
  // Dengan cara di atas, kamu dapat langsung membuat properti ataupun method pada objek yang ingin dibuat. Ketika kamu ingin membuat objek yang serupa, pasti kamu membuatnya seperti ini:

  let hewan = {
    nama: "Kucing",
    kaki: 4,
    tidur: function () {
      return `${this.nama} sedang tidur`;
    },
  };

  let hewan2 = {
    nama: "Ayam",
    kaki: 2,
    tidur: function () {
      return `${this.nama} sedang tidur`;
    },
  };

  // Kode di atas mungkin masih terlihat sederhana karena objek yang dibuat masih sedikit. Tapi bagaimana jika objek yang ingin dibuat ada banyak? Pasti kode yang dimiliki menjadi tidak efisien karena ada banyak kode yang sama dibuat secara berulang-ulang.
}

{
  //   Untuk mengatasi hal tersebut, kamu dapat menggunakan fitur class yang terdapat pada JavaScript.
  // Penulisan class hadir pada JavaScript ES6. Dengan adanya class, kamu dapat membuat objek yang merupakan instance (perwujudan) dari sebuah class. Mudahnya, kamu akan membuat cetakannya terlebih dahulu sebelum kamu membuat objeknya. Berikut ini cara membuat suatu class:

  class NamaClass {
    constructor() {
      // properti
    }
    // method
  }

  class Hewan {
    constructor(nama, kaki) {
      this.nama = nama; // properti
      this.kaki = kaki; // properti
    }

    // Method
    tidur() {
      return `${this.nama} sedang tidur`;
    }
  }

  /**
  *!Dari kode di atas, ada beberapa komponen yang perlu kamu perhatikan ketika membuat class:

  **Constructor, yaitu method yang wajib ada pada class jika ingn menyimpan suatu properti. Ketika suatu objek dibuat menggunakan class, maka constructor-nya juga ikut terpanggil. Parameter pada constructor berguna untuk memberikan data kepada properti.

  **Properti, yaitu data objek yang akan disimpan. Properti berada di dalam constructor dan diawali oleh kata kunci this. Kata kunci this mewakili kepemilikan dari class itu sendiri.

  **Class method, merupakan method yang dapat dimiliki dari sebuah objek. Biasanya dibuat di bawah constructor.
  */
}

{
  //objek yang sudah berisi class
  // let namaObjek = new NamaKelas(args1, args2);
}

{
  class Hewan {
    constructor(nama, kaki) {
      this.nama = nama; // properti
      this.kaki = kaki; // properti
    }

    // Method
    tidur() {
      return `${this.nama} sedang tidur`;
    }
    makan() {
      return `${this.nama} sedang makan`;
    }
  }

  let hewan1 = new Hewan("Kucing", 4);
  let hewan2 = new Hewan("Ayam", 2);

  console.log(hewan1.nama); // Output: Kucing
  console.log(hewan2.nama); // Output: Ayam
  console.log(hewan1.tidur()); // Output: Kucing sedang tidur
  console.log(hewan2.tidur()); // Output: Ayam sedang tidur
  console.log(hewan1.makan()); // Output: Ayam sedang tidur
}

{
  class Orang {
    constructor(nama, umur) {
      this.nama = nama;
      this.umur = umur;
    }

    bekerja() {
      return `${this.nama} sedang bekerja seperti biasa`;
    }
  }

  let user1 = new Orang("auzan", 8);
  console.log(user1.bekerja());
}

{
  //dari binar
  class Human {
    // Add static property
    static isLivingOnEarth = true;

    // Add constructor method
    constructor(name, address) {
      this.name = name;
      this.address = address;
    }
    // Add instance method signature
    introduce() {
      return `Hi, My name is ${this.name}`;
    }
  }

  console.log(Human.isLivingOnEarth); //true

  //Add prototype/instance method
  Human.prototype.greet = function (name) {
    console.log(`Hi, ${name}, I'm ${this.name}`); // hi, donald, Im michael jackson
  };

  //Add static method
  Human.destroy = function (thing) {
    console.log(`Human is destroying ${thing}`); //Human is destroying amazon
  };

  //create new object with class
  let mj = new Human("Michael Jackson", "Isekai");
  console.log(mj);
  console.log(mj instanceof Human); // apakah mj class dari human
  console.log(mj.introduce()); // hi, my name is michael jackson
  mj.greet("donald"); //dia akan naik ke atas dikarenakan sudah di konsol di human prototype
  Human.destroy("amazon"); //console log di atas
}
