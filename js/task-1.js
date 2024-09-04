function slugify(title) {
  const titleLowerCase = title.toLowerCase();
  const words = titleLowerCase.split(" ");
  const slug = words.join("-");
  return slug;
}
console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і
// повертає slug, створений із цього рядка.
// Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// Усі символи slug повинні бути в нижньому регістрі.
// Усі слова slug повинні бути розділені тире.
// Візьми код нижче і встав після оголошення своєї функції для перевірки
// коректності її роботи.У консоль будуть виведені результати її роботи.
