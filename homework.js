let promiseTwo = new Promise((resolve, reject) => {
  resolve("a");
});

promiseTwo
.then((res) => {
   return res + "b";
})
.then((res) => {
   return res + "с";
})
.finally((res) => {
   return res + "!!!!!!!";
})
.catch((res) => {
   return res + "d";
})
.then((res) => {
   console.log(res);
});

// Выполнится только цепочка then'оd т.к. промис резолвится при инициализации, а в finally не сайд эффект.

function doSmth() {
  return Promise.resolve("123");
}

doSmth()
.then(function (a) {
  console.log("1", a); //
  return a;
})
.then(function (b) {
  console.log("2", b);
  return Promise.reject("321");
})
.catch(function (err) {
  console.log("3", err);
})
.then(function (c) {
  console.log("4", c);
return c;
});

// В последнем консоль логе будет 4 undefined т.к. catch ничего не возвращает

const timedOutArray = (array) => {
  array.forEach((el,i) => {
    setTimeout(() => {console.log(el)},3000 * i)
  })
}

