// ! closure

// Child function can access  parameters  even after the excuation of parent function

// counter incerment
// function counter_1() {
//     let count = 0
//     return function child(){
//         count += 1
//         console.log(count)
//     }
// }
// const count = counter_1()

// count()     //1
// count()
// count()   //3

function counter() {
  let count = 0;

  return {
    increment: function () {
      count += 1;
      console.log(count);
    },
    decrement: function () {
      count -= 1;
      console.log(count);
    },
    reset: function () {
      count = 0;
      console.log(count);
    },
  };
}

const counter_2 = counter();

counter_2.increment();
counter_2.increment();
counter_2.increment(); // 3
counter_2.decrement(); // 2
counter_2.reset();
