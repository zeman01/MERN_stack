
//* control flow
// order at which program executes the instructions

// control statements

//* conditionals

const print = true;
// if

if (print) {
  console.log("hello");
}
// console.log('hi')

// if else
const age = 16;

if (age >= 18) {
  console.log("you can vote");
} else {
  console.log("you can not vote");
}

//  if.. else if .. else
const score = 90;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

// switch case

const day = 8


switch(day){
    case 1 :{
        console.log('Sunday')
        break;
    }
    case 2 :{
        console.log('Monday')
        break;
    }
    case 3 :{
        console.log('Tuesday')
        break
    }

}



switch(day){
    case 1 :
    case 7 :{
        console.log('weekend')
        break;
    }
    case 2 :
    case 3 :
    case 4 :
    case 5 :
    case 6 :{
        console.log('work day')
        break
    }
    default:{
        console.log('enter day between 1-7')
    } 
}


// loops
