// *Arthematic
//  +  -  * /  %(modulus)  **(exponent)


let a = 10 
let b = 20

console.log(a + b)

let sum = a + b
let diff =a - b
let prod = a*b
let frac = a/b
console.log(sum)
console.log(diff)
console.log(prod)
console.log(frac)
let squ = a ** 2
console.log(squ)


// Assignment
//  =  
a = a + b
a+=b

// *Comparision   ( Value is a boolean value)
// ==   ===  <   >   !=  !==  <=  >=

let c = 10, d = 10

console.log(c == d)
// it compaires only the value
console.log(c ===d)
// it compaires both value and data type


// * Logical ( Value is a boolean )
//  AND (&&)  result is True 
// only when both operations are true
// else the value is false
    const IsStudent = true 
    const IsTutor = false

    let IsStudentAndTutor = IsStudent && IsTutor
    console.log(IsStudentAndTutor)
// OR (||) result is True 
// only when any operations are true
// else the value is false i.e both operation gives false
    IsStudentAndTutor = IsStudent || IsTutor
    console.log(IsStudentAndTutor)

// NOT (!) change True value to False & vice versa
    console.log(!IsStudent)
    console.log(!IsTutor)


// typeof  used to know the datatype of variable
    console.log(typeof IsStudent) 

    let x =10
    let y = 20
    console.log(typeof x - y)


// ternary operator (Is Else operation)
//  __?___:___
// condition ? Satatement1 : Statement2
 const Person = IsStudent? "Student" : "Tutor"


//  Bitwise (& and   |  or    ^  nor)
// converts into binary and performs logic operation

console.log(2 & 6)
console.log(32 | 23)
console.log( 3 ^ 42)


