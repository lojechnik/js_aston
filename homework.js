// Создание
class ObjClass  {
    constructor(Number1, Number2) {
        this.Number1 = Number1
        this.Number2 = Number2
    }
}
const obj = new ObjClass (15,16)
const obj1 = Object.create({}, { day: 'Wednsesday' })
const obj2 = Object.assign({}, { day: 'Wednsesday' })


// Копирование
const obj3 = Object.assign({}, obj1) // Не работает с вложенными объектами
const obj4 = {...obj1} // Не работает с вложенными объектами
const obj5 = structuredClone(obj1) // Работает с вложенностью


// Создание функции 
function makeCounter1() {} // FD
const makeCounter2 = function() {} // FE
const makeCounter3 = () => {} // Arrow function
(function makeCounter4() {}) // IIFE
const makeCounter5 = function createCounter() {} // Named FE
function MakeCounter6(number)  { this.number = number }  // Constructor FD   


// Развернуть строку
function reverseStr(str) {
    return str.split('').toReversed().join('')
  }

// Глубокое сравнение
const isObject = (object) => {
    return object != null && typeof object === "object";
  }
  
const isDeepEqual = (object1, object2) => {
    const objKeys1 = Object.keys(object1)
    const objKeys2 = Object.keys(object2)
      if (objKeys1.length !== objKeys2.length) return false
      for (var key of objKeys1) {
      const value1 = object1[key]
      const value2 = object2[key]
        const isObjects = isObject(value1) && isObject(value2)
        if ((isObjects && !isDeepEqual(value1, value2)) ||
        (!isObjects && value1 !== value2)
      ) {
        return false
      }
    }
    return true
  }
