function filterArray(numbers, value) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      newNumbers.push(numbers[i]);
    }
  }
  return newNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers)
// та значення(value) як параметри.
// Функція повинна повертати новий масив
// лише тих чисел із масиву numbers, які більші за значення value.

// Усередині функції:
// Створи порожній масив, у який будеш додавати підходящі числа.
// Використай цикл для ітерації кожного елемента масиву numbers.
// Використовуй умовний оператор if усередині циклу для перевірки кожного елемента
//  и додавання до свого масиву.
// Поверни свій новий масив з підходящими числами як результат.
