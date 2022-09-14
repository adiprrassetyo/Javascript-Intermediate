/**
*!Sebelum mewariskan suatu class, pastikan kamu sudah memiliki:

**Parent class, yang akan menurunkan properti dan method-nya kepada class lain.
**Child class, yang akan menerima turunan dari parent class.
class NamaClassB extends NamaKelasA {
  // method
}
*/

{
  // class NamaClassB extends NamaKelasA {
  //   constructor() {
  //     super(); //Method super() digunakan untuk memanggil constructor pada parent class
  // properti
  //   }
  // method
  // }
}

{
  class Hewan {
    constructor(nama, kaki) {
      this.nama = nama;
      this.kaki = kaki;
    }

    tidur() {
      return `${this.nama} sedang tidur`;
    }
  }

  // class Hewan mewarisi class Kucing
  class Kucing extends Hewan {
    constructor(nama, kaki, makanan) {
      super(nama, kaki); //Class Kucing menggunakan method super() dan memberikan argumen berupa nama dan kaki. Method ini seolah memanggil constructor milik parent class serta memberikan parameter yg dibutuhkan.
      this.makanan = makanan;
    }
    //class Hewan mewarisi semua properti dan method miliknya kepada class Kucing dengan menggunakan kata kunci extends.
    mencuri() {
      return `${this.nama} mencuri ${this.makanan}`;
    }
  }

  // membuat objek dari class Kucing
  let kucing = new Kucing("Tom", 4, "ikan");
  console.log(kucing.nama);
  console.log(kucing.tidur());
  console.log(kucing.mencuri());

  // Output:
  // Tom
  // Tom sedang tidur
  // Tom mencuri ikan
}

{
  //contoh pertama binar
  class Orang {
    constructor(nama, umur) {
      this.nama = nama;
      this.umur = umur;
    }

    tidur() {
      return `${this.nama} sedang tidur`;
    }

    makan() {
      return `${this.nama} sedang makan`;
    }
  }

  class Pelajar extends Orang {
    constructor(nama, umur, namaSekolah) {
      super(nama, umur);
      this.namaSekolah = namaSekolah;
    }

    belajar() {
      return `${this.nama} belajar di ${this.namaSekolah}`;
    }
  }

  let user = new Pelajar("Terra", 17, "Skilvul");
  console.log(user);
}

{
  //contoh dua
  class Human {
    constructor(name, address) {
      this.address = address;
      this.name = name;
    }
    introduce() {
      console.log(`Hi, my name is ${this.name}`);
    }

    work() {
      console.log("Work!");
    }
  }

  // Create a child class from Human

  class Programmer extends Human {
    constructor(name, address, programmingLanguages) {
      super(name, address);
      /* Call the super/parent class constructor,
   in this case Person.constructor; */
      this.programmingLanguages = programmingLanguages;
    }

    // introduce() {
    //   super.introduce();
    // Call the super class introduce instance method.
    //overriding
    //   console.log(`I can write`, this.programmingLanguages);
    // }

    //overloading method
    introduce(withDetail) {
      super.introduce();
      Array.isArray(withDetail)
        ? console.log(`${this.programmingLanguages}`)
        : console.log("Wrong input");
    }

    code() {
      console.log(
        "Code some",
        this.programmingLanguages[
          Math.floor(Math.random() * this.programmingLanguages.length)
        ]
      );
    }
  }

  //Initiate from Human directly
  let Obama = new Human("Barrack Obama", "Washington DC");
  Obama.introduce(); // Hi, my name is Barack Obama

  let Isyana = new Programmer("Isyana", "Jakarta", [
    "Javascript",
    "Kotlin",
    "Python",
  ]);
  Isyana.introduce(); // Hi, my name is Isyana; I can write ["Javascript", "Kotlin", "Python"]
  Isyana.code(); // Code some Javascript/Ruby/... Isyana.work() // Call super class method that isn't overrided or overloaded

  try {
    // Obama can't code since Obama Ls an direct instance of Human, which don't have code method
    Obama.code(); // Error: Undefined method "code"
  } catch (err) {
    console.log(err.message);
  }

  console.log(Isyana instanceof Human); //true
  console.log(Isyana instanceof Programmer); // true
}
