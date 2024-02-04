// Какие бывают методы сортировки?

//
// Циклическая, пузырьком, выбором, быстрая. Видов сортировки очень много, на практике используются не все.
//
const Person  = {
  firstName : '',
  logInfo : function  () {
    console.log('123')
  }
}


function Person1(name){
  this.firstName = name;
}

const Matthew = new Person1('123')
const Andrew = Object.create(Person1)

Object.prototype.logInfo = function(){
  console.log('123')
}
window.logInfo()

class PersonThree extends Person1 {
  surName = 'potato'
  get surName() {
      return this.surName + 'getter applied'
  }
  set surName(value) {
    this.surName = value.split(' ')
  }
}

// Алгоритм,  если массив отсортирован
// Сложность O(n)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;
let resultingArray = []
resultingArray.push(arr[arr.length-1])
loop1: for (const el of arr) {
  
if (el === total - resultingArray[0]) {
console.log('fitting el',el)
  resultingArray.push(el)
  break loop1;
}

}
console.log('res', resultingArray)

//Если не отсортирован, сложность O(n^2)

let resultingArray1 = []

loop1: for (const el of arr) {
  for (const elem of arr) {
  if (el+elem === 13) {
  resultingArray1.push(el)
    resultingArray1.push(elem)
    break loop1;
    }
  }
}