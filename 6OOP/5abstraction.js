/**
*!Abstraction adalah konsep untuk menyembunyikan suatu detil proses yang tidak perlu diketahui oleh pengguna. Abstraction mengatur kompleksitas sistem dengan menyembunyikan detail dari internal sistem dan membuatnya ke dalam beberapa sistem kecil. Sehingga pengguna hanya perlu memberi suatu input untuk mendapatkan output yang diinginkan.

**Sebenarnya kamu telah menerapkan konsep ini, seperti ketika kamu menggunakan built-in method pada JavaScript misalnya pada array, kamu menggunakan method map() untuk iterasi atau pada string, kamu menggunakan method indexOf() untuk mengetahui index pada sebuah string. Kamu tidak tahu kode seperti apa dibalik method tersebut. Yang kamu lakukan hanya menggunakannya untuk mendapatkan hasil yang diinginkan.

*/

{
  // Untuk memperjelasnya, kamu bisa perhatikan contoh kode di bawah ini:

  class Person {
    constructor({ firstName, lastName, job }) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.job = job;
    }

    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }

  class Job {
    constructor(company, position, salary) {
      this.company = company;
      this.position = position;
      this.salary = salary;
    }
  }

  const salah = new Person({
    firstName: "Muhammad",
    lastName: "Salah",
    job: new Job("Liverpool", "striker", 200000),
  });

  const christ = new Person({
    firstName: "Christiano",
    lastName: "Ronaldo",
    job: new Job("Juventus", "striker", 1000000),
  });

  console.log(christ.job.company);

  /**
   *!Dari contoh di atas, dapat kita lihat bahwa detil properti pada job disembunyikan ke dalam class Job. Dari sisi programmer, hal ini dilakukan agar kode terlihat lebih rapih dan terstruktur karena properti pada job dipisahkan ke dalam sistem yang lebih kecil, yaitu class Job. Namun dari segi pengguna, pengguna tidak dapat melihat dan tidak perlu mengetahui properti apa saja yang terdapat pada class Job.
   */
}

/**
 *!abstraction dalam konteks yang berbeda memiliki arti lain yaitu tidak mendefinisikan isi dari suatu method
 **Ini berarti method tersebut masih bersifat abstrak (tidak jelas). Konsep ini sering digunakan pada bahasa pemrograman yang kental OOP-nya.
 *?Seperti contoh , class Hewan memiliki method suara() yang mana masih belum jelas suara dari hewan apa. Setelah diturunkan ke class Kucing dan Sapi, method tersebut sudah dapat didefinisikan berdasarkan suara dari hewan yang diturunkan.
 */

{
  //binar
  class PersegiPanjang {
    constructor(panjang, lebar) {
      this.panjang = panjang;
      this.lebar = lebar;
    }
    luas() {
      let hasil = this.panjang * this.lebar;
      return hasil;
    }
    keliling() {
      let hasil = 2 * (this.panjang + this.lebar);
      return hasil;
    }
  }

  let persegiPanjang = new PersegiPanjang(4, 3);
  console.log(persegiPanjang.luas());
  console.log(persegiPanjang.keliling());
}

{
  class Human {
    constructor(props) {
      if (this.constructor === Human) {
        throw new Error("Cannot insantiate from Abstraction class");
      }
      //because its abstrac

      let { name, address } = props;
      this.name = name; //every human has name
      this.address = address; //and address
      this.profession = this.constructor.name;
    }

    //every human can work
    work() {
      console.log("Working...");
    }
    // and introduce
    introduce() {
      console.log(`Hello, my name is ${name}`);
    }
  }

  class Police extends Human {
    constructor(props) {
      super(props);
      this.rank = props.rank; //add new property rank
    }
    work() {
      console.log("Go to the police station");
      super.work();
    }
  }
  const Wiranto = new Police({
    name: "Wiranto",
    address: "Unknown",
    rank: "General",
  });
  console.log(Wiranto.profession); //police

  try {
    let Abstract = new Human({
      name: "Abstract",
      address: "Unknown",
    });
  } catch (err) {
    console.log(err.message); // cannot insantiate from abstraction class
  }
}
