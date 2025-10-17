//  sync ---- > blocking nature
//  async ---- >  non-blocking nature

// console.log("start");
// console.log("processing");
// console.log("end");

//! setTimeOut
// console.log("start");

// setTimeout(
//   (userId, name) => {
//     console.log("processing", userId, name);
//   },
//   1000, // starts after 1 sec
//   10, // user ID
//   "Async"   // name
// );

// console.log("end");

// !
// console.log("start");

// const timerId = setTimeout(
//   (userId, name) => {
//     console.log("processing", userId, name);
//   },
//   1000, // starts after 1 sec
//   10, // user ID
//   "Async" // name
// );

// console.log(timerId);

// console.log("end");

//! clear timer or cancel process

// console.log("start");

// const timerId = setTimeout(
//   (userId, name) => {
//     console.log("processing", userId, name);
//   },
//   1000, // starts after 1 sec
//   10, // user ID
//   "Async" // name
// );

// //* clear timer

// clearTimeout(timerId);

// console.log(timerId);

// console.log("end");

// ! task to be in loop but async

// console.log("start");

// const timerId = setTimeout(
//   (userId, name) => {
//     console.log("processing", userId, name);
//   },
//   1000, // starts after 1 sec
//   10, // user ID
//   "Async" // name
// );

// setInterval(Task, interval)

// setInterval(() => {
//   console.log("loop");
// });
// console.log(timerId);

// console.log("end");

// !clear loop
// let count = 0;
// const id = setInterval(() => {
//   count++;
//   console.log(count);
//   if (count === 10) {
//     clearInterval(id);
//   }
// }, 1000);

// !

// const getUser = (userId) => {
//   setTimeout(() => {
//     const user = { id: userId, name: "Jaman Shrestha" };
//     console.log("user fetched :", user);
//   }, 1000);
// };

// const getOrder = (userId) => {
//   setTimeout(() => {
//     const orders = [
//         { id: 1, userId : user.id,totalAmt : 100, productId : 10},
//         { id: 1, userId : user.id,totalAmt : 100, productId : 10},
//     ];
//     console.log("Orders :", orders);
//   }, 1000);
// };
// const getOrderDetail= (userId) => {
//   setTimeout(() => {
//     const order {id: orders.id,
//     totalAmt : orders.totalAmt,
//     };
//     console.log("order Detail", orders);
//   }, 1000);

// };

// * call back hell
// a problem when in async is a nested
