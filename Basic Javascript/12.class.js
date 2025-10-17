// ! Class

//  template of object used when multiple number of object are needed

// class Person {
//   name;
//   email;
//   //   private modifier
//   #password;
//   //   special function which we do not need to call  manually
//   constructor(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.#password = password;
//   }
//   //   add methood in class
//   getName() {
//     return this.name;
//   }
//   changeName(name) {
//     this.name = name;
//     console.log("your new name is", name);
//   }
// }

// // initialize object
// const student1 = new Person("Jaman ", "dfsghhj@jsdj.dji", 2070);

// console.log(student1);
// console.log(student1.getName);
// student1.changeName("Zeman");

// // ! Inheritance

// class Student  extends Person{

//   constructor(name, email, password, grade, faculty) {
// super()
// this.grade = grade
// this.faculty = faculty
//   getName() {
//     return this.name;
//   }
//   changeName(name) {
//     this.name = name;
//     console.log("your new name is", name);
// }
// }
// const student = new Student ("Ram", "sgh@hjw",  123456, "bachelors", "CSIT")

// console.log(student);

// static

class Calculator {
  static add(a, b) {
    return a + b;
  }
  static diff(a, b) {
    return a - b;
  }
}

console.log(Calculator.add(100, 50));
console.log(Calculator.diff(100, 50));


// Abstraction
// Hide middle process for user

class Drive{
    constructor () {}
    Start (){
this.#open_door()
this.#insert_key()
this.#ignition()
this.#clutch()
this.#accelator()
    }
    #open_door(){

    }
    #open_door(){
        
    }
    #insert_key(){
        
    }
    #ignition(){
        
    }
    #clutch(){
        
    }
    #accelator(){
        
    }
}


const drive = new Drive()
drive.Start()