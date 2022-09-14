/**
 *!Kucing adalah Hewan
 *!Anjing adalah Hewan
 **Anggora adalah Kucing
 *?Anggora adalah Hewan
 */

{
  class Hewan {
    constructor(nama) {
      this.nama = nama;
    }

    suara() {
      console.log("Ini suara hewan");
    }
  }

  class Kucing extends Hewan {
    constructor(nama) {
      super(nama);
    }
  }

  let kucing = new Kucing("TOM");
  kucing.suara(); //Output: Ini suara hewan

  /**
  **Dari contoh kode di atas, objek yang dibuat dari class Kucing, dapat menggunakan method suara() yang dimiliki oleh class Hewan. Tapi ternyata output suara() yang dimiliki oleh class Kucing adalah Ini suara hewan, berbeda dengan yang diharapkan. Lalu bagaimana caranya agar method suara() pada class Kucing dapat menghasilkan suara miaaaw?

  *?Untuk dapat melakukan hal tersebut, kamu perlu membuat method pada child class dengan nama yang sama pada parent class tetapi isinya berbeda. Cara seperti ini disebut dengan overriding.
  */
}

{
  // Sehingga kode yang seharusnya adalah seperti berikut ini:

  class Hewan {
    constructor(nama) {
      this.nama = nama;
    }

    suara() {
      console.log("suara hewan");
    }
  }

  class Kucing extends Hewan {
    constructor(nama) {
      super(nama);
    }

    // Overriding
    suara() {
      console.log("miaaaw");
    }
  }

  let kucing = new Kucing("TOM");
  kucing.suara(); // Output: miaaaw
}

{
  //binar
  class Hewan {
    constructor(nama) {
      this.nama = nama;
    }

    makan() {
      return "Hewan sedang makan";
    }
  }

  // Buat kode kamu di bawah ini
  class Harimau extends Hewan {
    constructor(nama) {
      super(nama);
    }

    makan() {
      return `${this.nama} makan daging`;
    }
  }

  let harimauSumatra = new Harimau("Harimau Sumatra");
  console.log(harimauSumatra.makan());
}

{
  //binar
  class Human {
    constructor(name, address) {
      this.name = name;
      this.address = address;
    }
    introduce() {
      console.log(`Hi, my name is ${this.name}`);
    }
    work() {
      console.log(`${this.constructor.name}:`, "working!");
    }
  }

  //public server module
  const PublicServer = (Base) =>
    class extends Base {
      save() {
        console.log("SFX: Thank You!");
      }
    };

  // Millitary module
  const Military = (Base) =>
    class extends Base {
      shoot() {
        console.log("DOR!");
      }
    };

  class Doctor extends PublicServer(Human) {
    constructor(props) {
      super(props);
    }
    work() {
      super.work(); // from human class
      super.save(); //from public server class
    }
  }

  class Police extends PublicServer(Military(Human)) {
    static workplace = "Police Station";
    constructor(props) {
      super(props);
      this.rank = props.rank;
    }
    work() {
      super.work();
      super.shoot(); //from millitary class
      super.save(); //from public server class
    }
  }

  class Army extends PublicServer(Military(Human)) {
    static workplace = "Police Station";
    constructor(props) {
      super(props);
      this.rank = props.rank;
    }
    work() {
      super.work();
      super.shoot();
      super.save();
    }
  }
  class Writer extends Human {
    work() {
      console.log("Write books");
      super.work();
    }
  }

  const Wiranto = new Police({
    name: "Wiranto",
    address: "Unknown",
    rank: "General",
  });
  const Prabowo = new Army({
    name: "Prabowo",
    address: "Undefined",
    rank: "General",
  });

  const Boyke = new Doctor({
    name: "Boyke",
    address: "Jakarta",
  });

  const Dee = new Writer({
    name: "Dee",
    address: "Bandung",
  });

  Wiranto.shoot(); //dor
  Prabowo.shoot(); //dor

  Wiranto.save(); //sfx:thx
  Prabowo.save(); //sfx:thx
  Boyke.save(); //sfx:thx

  Wiranto.work();
  //police:working ! dor! sfx : thx
  Prabowo.work();
  //police:working ! dor! sfx : thx
  Boyke.work();
  //police:working !  sfx : thx
  Dee.work();
  //write books. writer:working
}
