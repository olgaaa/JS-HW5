// HW5
//Task 1
//Напиши функцию, которая принимает 1 параметр. При первом вызове, она его запоминает, при втором - суммирует переданый параметр с тем, что передали первый раз и тд. Запрещается использовать глобальные переменные как хранилище результатов счетчика.

function addNewValues() {
  let count = 0;

  function counter(value) {
    return (count += value);
  }

  return counter;
}

let counter = addNewValues();

console.log(counter(3)); // 3
console.log(counter(5)); // 8
console.log(counter(228)); // 236

// //Task 2
// //Создать функцию которая будет возвращать массив в котором будут лежать все значения - аргументы переданные в данную функцию. Но если мы ничего не передадим в параметрах, то массив очистится. Запрещается использовать глобальные переменные как хранилище значений.

function addToArr() {
  let arr = [];
  return function (value) {
    if (!value) {
      return (arr = []);
    }
    arr.push(value);
    return arr;
  };
}

let getUpdatedArr = addToArr();

console.log(getUpdatedArr(3)); // [3]
console.log(getUpdatedArr(5)); // [3, 5]
console.log(getUpdatedArr({ name: 'Vasya' })); // [3, 5, {name: 'Vasya'}]
console.log(getUpdatedArr()); // []
console.log(getUpdatedArr(4)); // [4]

//Task 3
//Содать функцию , которая при каждом вызове будет показывать разницу в секундах между временем когда ее вызывали последний раз и теперешним. Вызываем первый раз, то ретерним строку 'Enabled'. Запрещается использовать глобальные переменные как хранилище значений.

function getTime() {
  let previousTime = null;

  return function () {
    if (!previousTime) {
      previousTime = new Date();
      return 'enabled';
    }
    const newTime = new Date();
    const lastCalled = Math.round((newTime - previousTime) / 1000);
    previousTime = newTime;
    return lastCalled;
  };
}

// // Task 4
// Создать таймер обратного отсчета, который будет в console выодить время в формате MM:SS. Где MM - количество минут, SS - количество секунд. При этом когда закончится время, нужно вывести в console строку "Timer End".

// не зроблено
