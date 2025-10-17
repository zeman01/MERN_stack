//! Starting scope
// * accessibility or visibility of variables


//* global Scope --->  a variable which can be accessed form anywhere in the code

let global_let = "Global let"
var global_var = "Globa var"
const global_const = "Global const"

// these variables can be accessed from any where in the code

console.log(global_const, global_let, global_var)



// * function Scope

function Scope () {
    let funct_let = "finction let"
    var funct_var = "finction var"
    let funct_const = "finctionconst"
//  global variable cann be accessed from any where
console.log(global_const)
console.log(global_let)
console.log(global_var)


console.log(funct_const)
console.log(funct_let)
console.log(funct_var)
}
Scope()

// console.log(funct_const)         ReferenceError: funct_const is not defined
// console.log(funct_let)           ReferenceError: funct_let is not defined
console.log(funct_var)          // ReferenceError: funct_const is not defined



// * block Scope
//  block (true){



//  }



//  * lexical scope

// inheritance


function lexical_scope()  {
    let x = "parent variable"
    function child()  {

        let y ="child variable"


        console.log(x);
        console.log(y);
    }

    child()
}

lexical_scope()





// * Scope chaining
// variable is accessed from same block --> panent scope ............  --> global scope