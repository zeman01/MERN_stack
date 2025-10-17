// let user1 = 'user1'
// let user2 = user1
// let user3 = 'user3'
// let user4 = 'user4'


const users = ['user1','user2','user3','user4']
// list
// numbered index
// console.log(users[0])
const last_el = users[3]
console.log('last el ',last_el)

console.log(users)


// * adding new element
// ? from end index
users.push('user5','user6')
// users.push('user7')

// ? from start indexconst last_el = users[3]
console.log('last el ',last_el)
// users.unshift('user7')


// * remove element 
// ? form end index
// const ele = users.pop()
// console.log('pop returned',ele)
// console.log(users[0])
// ? from start index 
// console.log(users.shift())


const last_el_1 = users[users.length - 1]
console.log('last el ',last_el_1)

//at

// console.log(users[1],users.at(1))
// console.log(users[-1],users.at(-1))


// modify element
users[1] = 'user111'



console.log(users)