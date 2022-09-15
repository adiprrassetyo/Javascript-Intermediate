{
  // Mendeklarasikan function baru
  function namaObject() {}

  // Menambahkan properti secara langsung menggunakan prototyping
  namaObject.prototype.namaProperti = "isi properti";

  //Melihat prototype dari function
  console.log(namaObject.prototype); //namaObject{ namaProperti}

  // Melihat hasil data
  console.log(namaObject.prototype.namaProperti); //isi properti
}

{
  // Function Constructor
  // Membuat constructor
  function Person(name, age, hobby, job) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.job = job;
  }

  // Membuat instance
  let myFather = new Person("William", 30, "Play games", "Entrepreneur");
  let myMother = new Person("Jessica", 30, "Reading book", "Accountant");

  // Melihat hasil data
  console.log(myFather.name); // 'William'
  console.log(myMother.name); // 'Jessica'
}

{
  // amun saat ini kita tidak bisa menambahkan data constructor secara langsung. Perhatikan kode di bawah ini:

  function Person(name, age, hobby, job) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.job = job;
  }

  // Tidak bisa menambahkan properti secara langsung
  Person.nationality = "Indonesia";

  let myFather = new Person("William", 30, "Play games", "Entrepreneur");
  let myMother = new Person("Jessica", 30, "Reading book", "Accountant");

  // Melihat hasil data
  console.log(myFather.name); // Output: 'William'
  console.log(myFather.nationality); // Output: undefined
}

{
  function Skilvul(courseName, duration) {
    this.courseName = courseName;
    this.duration = duration;
  }

  Skilvul.price = 200000;

  let jsIntermediate = new Skilvul("JS Intermediate", 3600);

  // Melihat hasil data
  console.log(jsIntermediate.courseName);
  console.log(jsIntermediate.price);
}
