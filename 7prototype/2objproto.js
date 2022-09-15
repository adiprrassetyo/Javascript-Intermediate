/**
 **Konsep objek dalam JavaScript dapat dipahami dalam kehidupan sehari-hari seperti sebuah barang yang memiliki properti. Kita akan jadikan piring sebagai contoh objek. Sebuah piring adalah objek dengan banyak properti. Piring memiliki warna, desain, berat, bahan, dan lainnya. Dengan cara sama, objek JavaScript juga punya banyak properti yang menjelaskan karakteristiknya.
 */

{
  // Mendeklarasikan fungsi baru
  function NamaObjek(parameter1, parameter2) {
    this.namaProperti1 = parameter1;
    this.namaProperti2 = parameter2;
  }

  // Menambahkan properti secara langsung menggunakan prototyping
  NamaObjek.prototype.namaProperti = "isi properti";

  // Melihat hasil data
  console.log(NamaObjek.prototype.namaProperti); // "isi properti"
}

{
  // Berikut ini adalah contoh sebuah kasus menambahkan properti dalam sebuah objek Person:

  function Person(name, age, hobby, job) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.job = job;
  }

  // Menambahkan properti secara langsung menggunakan prototyping
  Person.prototype.nationality = "Indonesia";

  // Buat instance ke dua
  let myFather = new Person("William", 30, "Play games", "Entrepreneur");
  let myMother = new Person("Jessica", 30, "Reading book", "Accountant");

  // Melihat hasil data
  console.log(myFather.name); // Output: 'William'
  console.log(myFather.nationality); // Output: 'Indonesia'
  console.log(myMother.name); // Output: 'Jessica'
  console.log(myMother.nationality); // Output: 'Indonesia'
}

{
  //   Menambahkan method/function prototyping
  // Kita juga bisa menambahkan method untuk constructor yang telah kita buat. Sehingga method akan bisa digunakan untuk semua instance objek.

  // Contoh struktur kode dasar untuk menambahkan method/function prototyping :

  function NamaObjek(parameter1, parameter2) {
    this.namaProperti1 = parameter1;
    this.namaProperti2 = parameter2;
  }

  // Menambahkan method
  NamaObjek.prototype.namaMethod = function () {
    return "hasil dari fungsi";
  };
}

{
  function Person(name, age, hobby, job) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
    this.job = job;
  }

  // Menambahkan properti secara langsung menggunakan prototyping
  Person.prototype.nationality = "Indonesia";

  // Menambahkan method menggunakan prototyping
  Person.prototype.greeting = function () {
    return "Hello " + this.name;
  };

  // Membuat instance ke dua
  let myFather = new Person("William", 30, "Play games", "Entrepreneur");
  let myMother = new Person("Jessica", 30, "Reading book", "Accountant");

  // Melihat hasil data
  console.log(myFather.name); // Output: 'William'
  console.log(myFather.nationality); // Output: 'Indonesia'
  console.log(myFather.greeting()); // Output: 'Hello William'
}

{
  function Student(name, grade, score) {
    this.name = name;
    this.grade = grade;
    this.score = score;
  }

  Student.prototype.school = "Skilvul";
  Student.prototype.greeting = function () {
    return "Hello " + this.name;
  };

  Student.prototype.study = function () {
    return "I study at " + this.school;
  };

  // Buat kode kamu dibawah ini
  let myStudent = new Student("Sarah", 20, 100);

  console.log(myStudent.name);
  console.log(myStudent.school);
  console.log(myStudent.greeting());
  console.log(myStudent.study());
}
