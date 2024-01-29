// Массивы

// Массивы  в js сочетают в себе поведение хеш таблиц и связанных списков. В отличии от ключей хеш-таблиц индексы обязательно упорядочены и не могут быть наложены.
// Как и связанные списки массивы расширяемы. Также по индексу можно удалять или добавлять элемент.

// bind Полифилл

Function.proptotype.bind = function (context) {
  const func = this;
  return function (...args) {
    return func.apply(context, args);
  };
};

// Привязка контекста

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };
const loggerBound = logger.bind(obj);
loggerBound();
logger.apply({ item: "some value" });
logger.call({ item: "some value" });
