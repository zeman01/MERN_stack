// // ! Promise
// // * is a object {} which represents eventual completion or failure of any async task / operation

// // const { reject } = require("async");

// // const { reject } = require("async");

// // ! State of promise
// // ? pending
// // ? Fulfilled -- if succeed
// // ? Rejected   -- error message (failure)

// // ! Syntax
// // console.log("STart");

// // const promise = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     // task completion
// //     resolve("task completed");

// //     // Task Failure
// //     // reject("Something went WRONG");
// //   }, 1000);
// // });

// // console.log(promise);
// // // handling promise

// // promise
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });

// // console.log("end");

// const getUser = (userId) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const user = {
//         id: userId,
//         name: " Jaman",
//       };
//       resolve(user);
//       //   reject({ message: "User Fetching error" });
//     }, 1000);
//   });
// };

// const getOrder = (userId) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const orders = [
//         { id: 1, userId: user.id, totalAmt: 100, productId: 10 },
//         { id: 1, userId: user.id, totalAmt: 100, productId: 10 },
//       ];
//       resolve(orders);
//       //   reject({ message: "User Fetching error" });
//     });
//   });
// };

// const getOrderDetail = (order) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const orders = [{ id: orders.id, totalAmt: 100, productId: 10 }];
//       resolve(orders);
//       //   reject({ message: "User Fetching error" });
//     });
//   });
// };

// // ! Promise Chaining
// // getUser(100)
// //   .then((user) => {
// //     console.log(user);
// //     return getOrder(user);
// //   })
// //   .then((orders) => {
// //     console.log(orders);
// //     return getOrderDetail(orders[0]);
// //   })
// //   .then((detail) => {
// //     console.log("final result", detail);
// //   })
// //   .catch((error) => {
// //     console.log("Catch error");
// //     console.log(error);
// //   })
// //   .finally(() => {
// //     console.log("finally completed");
// //   });

// //   ! async await /  try - catch

// const getOrdersDetail = async () => {
//   try {
//     const user = await getUser(100);
//     const orders = await getOrder(user);
//     const detail = await getOrderDetail(orders[0]);
//     console.log(user, orders, detail);
//   } catch (error) {
//     console.log("try catch");
//     console.log(error);
//   } finally {
//     console.log("finally");
//   }
// };




// //! Promise
// //* is a object {} which represents eventual completion of failure of any async task/ operation.
// //! States of promise
// //? 1. pending
// //? 2. fulfilled
// //? 3. rejected

// // Syntax

// // promise
// // onsuccess (){}
// // onReject : (){}

// console.log("start");
// // const promise = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     // task
// //     // resolve('task compeleted')
// //     reject("Something went wrong");
// //   }, 2000);
// // });

// // console.log(promise);

// //! handling promise
// // promise
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });

// // console.log("end");

// const getUser = (user_id) => {
//   return new Promise((resolve, reject) => {
//     let error = false;
//     setTimeout(() => {
//       const user = { id: user_id, name: "John Doe" };
//       if (error) {
//         reject({ mesage: "User fething error" });
//       } else {
//         resolve(user);
//       }
//     }, 1000);
//   });
// };

// // const promise = getUser(100)

// // getUser(100)
// //   .then((user) => {
// //     console.log(user);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });

// const getOders = (user) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const orders = [
//         { id: 1, user_id: user.id, total_amt: 100, product_id: 2 },
//         { id: 1, user_id: user.id, total_amt: 1000, product_id: 8 },
//       ];
//       // console.log("orders", orders);
//       resolve(orders);

//       // reject({ mesage: "Orders fething error" });
//     }, 2000);
//   });
// };

// const getOderDetail = (order) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const orders = {
//         id: order.id,
//         total_amt: order.total_amt,
//       };
//       //   resolve(order);

//       reject({ mesage: "Order Detail fething error" });
//     }, 1000);
//   });
// };

// //Promise chaining
// // getUser(201)
// //   .then((user) => {
// //     console.log(user);
// //     return getOders(user);
// //   })
// //   .then((orders) => {
// //       console.log(orders);
// //       return getOderDetail(orders[0])
// //   })
// //     .then((detail) => {
// //         console.log('final result',detail)
// //     })
// //     .catch((error) => {
// //     console.log('catch err')
// //     console.log(error);
// //     }).finally(() => {
// //       console.log("finally")
// //   });

// //!  async await  / try catch
// console.log("start");

// const getOrdersDetail = async () => {
//   try {
//     const user = await getUser(390);
//     const orders = await getOders(user);
//     const detail = await getOderDetail(orders[0]);
//     console.log(user, orders, detail);
//   } catch (e) {
//     console.log("try catch");
//     console.log(e);
//   } finally {
//     console.log("finlly");
//   }
// };

// getOrdersDetail();

// console.log("end");

