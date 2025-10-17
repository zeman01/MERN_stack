// * behaviour of js moving variables or function declaration part to the top of scope





// ! var

console.log(a) // undefined

 var a= 10
// a=10

console.log (a)  //10


// !let

// hoisted but is in TDZ (Temporal Dead Zone)

// console.log(b)   // can't access before initilization

// let b = 10
// console.log(b)



// !const

// hoisted but is in TDZ (Temporal Dead Zone)

// console.log(c)   // can't access before initilization

// const c =10

// console.log(c)



// Function Declaration

greet()    //hello  

function greet (){

    console.log("hello")
}

greet()  //hello


// Function Expression

// myfunction()   // typeError : myfunction is not a function

// var myfunction = function(){

//     console.log("var function")
// }

// myfunction()

