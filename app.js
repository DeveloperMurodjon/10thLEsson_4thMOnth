// function show2(arr, index) {
//   return arr.at(index - arr.length);
// }
// let arr1 = [1, 2, 3, 4, 5];
// let index = 1;
// console.log(show2(arr1, index));
// let res = [];
// function getEvenIndex(arr) {
//   for (let i = 2; i < arr.length; i += 2) {
// res.push(at.arr);
//   }
//   return res;
// }
// console.log(getEvenIndex(1, 2, 3, 4, 5, 67, 2));
// let arr = [1, 2, 3, 4];
// let res=.arr.map()
// let arr = [1, 2, 3, 4, 5, 6];
// let res = arr.filter(function (value) {
//   return value % 2 == 1;
// });
// console.log(res);
let arr = [1, 3, 4, 5];
arr.forEach(function (value, index, a) {
  console.log(value, index, a);
});
// forEach uchun 15 masala:
// Berilgan massivdagi barcha elementlarni ekranga chiqaruvchi dastur yozing.
let arr1 = [4, -753, 0, 12, -4, 45, 12, 888, 0, -79, 5, 777, -9];
arr1.forEach(function (value, index, a) {
  console.log(value, index, a);
});

// Massivdagi har bir elementning kvadratini hisoblang va ekranga chiqaring.
let arr2 = [4, -753, 0, 12, -4, 45, 12, 888, 0, -79, 5, 777, -9];
arr2.forEach(function (value, index, a) {
  console.log(value ** 2);
});

// Massivdagi barcha elementlarni ikkiga ko'paytiring va ularni yangi massivga joylang.
let arr3 = [4, -753, 0, 12, -4, 45, 12, 888, 0, -79, 5, 777, -9];
let newArr = [];
arr3.forEach(function (value) {
  newArr.push(value ** 2);
});

// Berilgan massivdan 5 dan katta bo'lgan barcha elementlarni topib, ularni ekranga chiqaruvchi dastur yozing.
let arr4 = [4, -753, 0, 12, -4, 45, 12, 888, 0, -79, 5, 777, -9];
arr4.forEach(function (value) {
  if (value > 5) {
    console.log(value);
  }
});

// Har bir elementga 10 qo'shib, yangi massivga saqlang.
let arr5 = [4, -753, 0, 12, -4, 45, 12, 888, 0, -79, 5, 777, -9];
let newArr5 = [];
arr5.forEach(function (value) {
  newArr5.push(value + 10);
});

// Massivdagi barcha juft sonlarni ekranga chiqaring.
let arr6 = [4, -753, 0, 12, -4, 45, 12, 888, 0, -79, 5, 777, -9];
arr6.forEach(function (value) {
  if (value % 2 == 0) {
    console.log(value);
  }
});

// Har bir elementning teskari tartibini chiqaruvchi dastur yozing (reverse bilan).
let arr7 = [4, -753, 0, 12, -4, 45, 12, `a888`, 0, -79, 5, 777, -9];
arr7.reverse().forEach(function (value) {
  console.log(value);
});

// Berilgan massivdan "a" harfi mavjud bo'lgan elementlarni ekranga chiqaring (includes bilan).
let arr9 = [
  `apple`,
  `book`,
  `dark`,
  `add`,
  `egg`,
  `free`,
  `ambition`,
  `goal`,
  `Allison`,
  `dream`,
];
arr9.forEach(function (value) {
  if (value.includes(`a`)) {
    console.log(value);
  }
});

// Massivdagi har bir elementni yangi massivga indexOf orqali indeks bilan birlashtiring.
let arr98 = [4, -753, 0, 12, -4, 45, 12, 888, 0, -79, 5, 777, -9];
let newArr8 = [];
arr98.forEach(function (value) {
  let index = arr98.indexOf(value);
  newArr8.push(value + " (Index: " + index + ")");
});
console.log(newArr8);

// Har bir elementni vergul orqali birlashtirib, satr ko'rinishida chiqaruvchi dastur yozing (join bilan).
let arr10 = [
  `apple`,
  `book`,
  `dark`,
  `add`,
  `egg`,
  `free`,
  `ambition`,
  `goal`,
  `Allison`,
  `dream`,
];
console.log(arr10.join(`, `));

// Massivdagi har bir elementdan faqat birinchi 3 belgisini chiqaruvchi dastur yozing (slice bilan).
let arr11 = [
  `apple`,
  `book`,
  `dark`,
  `add`,
  `egg`,
  `free`,
  `ambition`,
  `goal`,
  `Allison`,
  `dream`,
];
arr11.forEach(function (value) {
  console.log(value.slice(0, 3));
});

// Har bir elementning oxirgi belgisini chiqaruvchi dastur yozing
let arr12 = [
  `apple`,
  `book`,
  `dark`,
  `add`,
  `egg`,
  `free`,
  `ambition`,
  `goal`,
  `Allison`,
  `dream`,
];
arr11.forEach(function (value) {
  console.log(value.slice(-1));
});

// Massivdagi har bir elementni uzunligiga qarab tartiblang va natijani ekranga chiqaring (sort bilan).
let arr13 = [
  `apple`,
  `book`,
  `dark`,
  `add`,
  `egg`,
  `free`,
  `ambition`,
  `goal`,
  `Allison`,
  `dream`,
];
arr13.sort(function (a, b) {
  return a.length - b.length;
});
console.log(arr13);

// Har bir elementga oxiriga ! qo'shing va yangi massivga saqlang.
let arr14 = [
  `apple`,
  `book`,
  `dark`,
  `add`,
  `egg`,
  `free`,
  `ambition`,
  `goal`,
  `Allison`,
  `dream`,
];
arr14.forEach(function (value) {
  arr14[i];
});
// Berilgan massivning barcha elementlarini kichik harflarga o'zgartirib ekranga chiqaring.

// map uchun 15 masala:
// Massivdagi har bir elementni 2 barobar kattalashtirib yangi massivga saqlang.
let arr15 = [4, -753, 0, 12, -4, 45, 12, 888, 0, -79, 5, 777, -9];
let newarr15 = arr15.map(function (value) {
  return value * 2;
});
console.log(newarr15);

// Har bir elementning kvadratini hisoblab yangi massivga saqlang.
let arr16 = [4, -753, 0, 12, -4, 45, 12, 888, 0, -79, 5, 777, -9];
let newarr16 = arr16.map(function (value) {
  return value ** 2;
});
console.log(newarr16);

// Massivdagi barcha elementlarni teskari tartibda yangi massivga saqlang (reverse bilan).
let arr17 = [4, -753, 0, 12, -4, 45, 12, 888, 0, -79, 5, 777, -9];
let newarr17 = arr16
  .map(function (value) {
    return value ** 2;
  })
  .reverse();
console.log(newarr17);

// Har bir elementdan oxirgi 3 ta belgisini olib yangi massivga saqlang (slice bilan).
let arr18 = [
  `apple`,
  `book`,
  `dark`,
  `add`,
  `egg`,
  `free`,
  `ambition`,
  `goal`,
  `Allison`,
  `dream`,
];
let newarr18 = arr18.map(function (value) {
  return value.slice(-3);
});
console.log(newarr18);

// Har bir elementni katta harf bilan yozib yangi massivga saqlang.
let arr19 = [
  `apple`,
  `book`,
  `dark`,
  `add`,
  `egg`,
  `free`,
  `ambition`,
  `goal`,
  `Allison`,
  `dream`,
];
let newarr19 = arr19.map(function (value) {
  return value.toUpperCase;
});
console.log(newarr19);

// Har bir elementga "Hello, " qo'shib yangi massivga saqlang.
let arr20 = [
  `apple`,
  `book`,
  `dark`,
  `add`,
  `egg`,
  `free`,
  `ambition`,
  `goal`,
  `Allison`,
  `dream`,
];
let newarr20 = arr20.map(function (value) {
  return `Hello ` + value;
});
console.log(newarr20);

// Har bir elementni ikki marta takrorlang va yangi massivga saqlang.
let arr21 = [
  `apple`,
  `book`,
  `dark`,
  `add`,
  `egg`,
  `free`,
  `ambition`,
  `goal`,
  `Allison`,
  `dream`,
];
let newarr21 = arr21.map(function (value) {
  value + value;
});
console.log(newarr21);

// Har bir elementning uzunligini aniqlang va yangi massivga saqlang.
let arr22 = [
  `apple`,
  `book`,
  `dark`,
  `add`,
  `egg`,
  `free`,
  `ambition`,
  `goal`,
  `Allison`,
  `dream`,
];
let newarr22 = arr22.map(function (value) {
  return value.length;
});
// Har bir elementning indeksini element bilan birlashtirib yangi massivga saqlang (indexOf bilan).
let arr23 = [
  `apple`,
  `book`,
  `dark`,
  `add`,
  `egg`,
  `free`,
  `ambition`,
  `goal`,
  `Allison`,
  `dream`,
];

let newArr23 = arr23.map(function (value, index) {
  return index + ": " + value;
});

console.log(newArr23);

// Har bir elementning teskari yozilishini hisoblab yangi massivga saqlang (split, reverse, join bilan).---
let fruits = ["olma", "banan", "behi"];
let res = fruits.map((value) => {
  return value.split(``).reverse().join(``);
});
console.log(res);

// Massivdagi har bir elementdan boshidagi va oxiridagi belgisini olib tashlang (slice bilan).
let arr25 = [
  "apple",
  "book",
  "dark",
  "add",
  "egg",
  "free",
  "ambition",
  "goal",
  "Allison",
  "dream",
];
let newArr25 = arr25.map(function (value) {
  return value.slice(1, value.length - 1);
});
console.log(newArr25);

// Massivdagi barcha elementlarni tartiblab yangi massivga saqlang (sort bilan).
let arr26 = [
  `apple`,
  `book`,
  `dark`,
  `add`,
  `egg`,
  `free`,
  `ambition`,
  `goal`,
  `Allison`,
  `dream`,
];
let newArr26 = arr26.slice().sort();
console.log(newArr26);

// Har bir elementni katta harfga o‘zgartiring va yangi massivga saqlang.
let arr27 = [
  `apple`,
  `book`,
  `dark`,
  `add`,
  `egg`,
  `free`,
  `ambition`,
  `goal`,
  `Allison`,
  `dream`,
];
let newArr27 = arr27.map(function (value) {
  return value.toUpperCase();
});
console.log(newArr27);

// Har bir elementning uzunligi 5 dan katta yoki kichik ekanligini belgilang va yangi massivga saqlang.
let arr28 = [
  `apple`,
  `book`,
  `dark`,
  `add`,
  `egg`,
  `free`,
  `ambition`,
  `goal`,
  `Allison`,
  `dream`,
];
let moreThan5 = [];
let lessThan5 = [];
let equilTo5 = [];
arr28.forEach(function (value) {
  if (value.length > 5) {
    console.log(`${value} harflar soni 5tadan ko'p`);
    moreThan5.push(value); // Harflari 5tadan ko'p
  } else if (value.length === 5) {
    console.log(value + ` harflar soni 5ta`);
    equilTo5.push(value); // Harflari 5ga teng
  } else {
    console.log(value + ` harflar soni 5tadan kam`);
    lessThan5.push(value); // Harflari 5tadan kam
  }
});
console.log(`Harflari 5tadan ko'p sonlar: ${moreThan5}.`);
console.log(`Harflari 5tadan kam sonlar: ${lessThan5}.`);
console.log(`Harflari 5ga teng sonlar: ${equilTo5}.`);

// Har bir elementdan faqat sonlarni olib yangi massivga saqlang.
let arr29 = [
  `apple`,
  `book`,
  `123`,
  `dark`,
  `45`,
  `egg`,
  `78`,
  `free`,
  `9`,
  `ambition`,
];
let newArr29 = arr29
  .map(function (value) {
    if (typeof value === `string` && !isNaN(Number(value))) {
      return Number(value);
    }
    return null;
  })
  .filter((value) => value !== null);
console.log(newArr29);

// filter uchun 15 masala:
// Berilgan massivdan faqat juft sonlarni olib tashlang va yangi massivga saqlang.
let ar = [
  12,
  "test",
  -34,
  `multiple`,
  `xyzunn`,
  0,
  `odd`,
  `abccba`,
  `xyz`,
  100,
  `UAE`,
  `BMA test`,
  -234,
  `object`,
  0,
  `positive`,
  `io`,
  12,
  `Testla`,
  72,
  `array`,
  -56,
  46,
  0,
];

let newAr = ar.filter(function (value) {
  return typeof value === `number` && value % 2 !== 0;
});
console.log(newAr);

// Massivdan faqat manfiy sonlarni olib yangi massivga saqlang.
let ar1 = [
  12,
  "test",
  -34,
  `multiple`,
  `xyzunn`,
  0,
  `odd`,
  `abccba`,
  `xyz`,
  100,
  `UAE`,
  `BMA test`,
  -234,
  `object`,
  0,
  `positive`,
  `io`,
  12,
  `Testla`,
  72,
  `array`,
  -56,
  46,
  0,
];

let newAr1 = ar1.filter(function (value) {
  return typeof value === `number` && value < 0;
});
console.log(newAr1);

// Berilgan massivdan "a" harfi mavjud bo'lgan elementlarni olib yangi massivga saqlang (includes bilan).
let ar2 = [
  12,
  "test",
  -34,
  `multiple`,
  `xyzunn`,
  0,
  `odd`,
  `abccba`,
  `xyz`,
  100,
  `UAE`,
  `BMA test`,
  -234,
  `object`,
  0,
  `positive`,
  `io`,
  12,
  `Testla`,
  72,
  `array`,
  -56,
  46,
  0,
];
let newAr2 = ar2.filter(function (value) {
  return typeof value === `String` && value.includes(`a`);
});
console.log(newAr2);

// Faqat uzunligi 5 dan katta bo'lgan elementlarni olib yangi massivga saqlang.
let ar3 = [
  12,
  "test",
  -34,
  `multiple`,
  `xyzunn`,
  0,
  `odd`,
  `abccba`,
  `xyz`,
  100,
  `UAE`,
  `BMA test`,
  -234,
  `object`,
  0,
  `positive`,
  `io`,
  12,
  `Testla`,
  72,
  `array`,
  -56,
  46,
  0,
];
let newAr3 = ar3.filter(function (value) {
  return typeof value === `string` && value.length > 5;
});
console.log(newAr3);

// Berilgan massivdan faqat "test" so‘zini o‘z ichiga olgan elementlarni olib yangi massivga saqlang.
let ar4 = [
  12,
  "test",
  -34,
  `multiple`,
  `xyzunn`,
  0,
  `odd`,
  `abccba`,
  `xyz`,
  100,
  `UAE`,
  `BMA test`,
  -234,
  `object`,
  0,
  `positive`,
  `io`,
  12,
  `Testla`,
  72,
  `array`,
  -56,
  46,
  0,
];
let newArr4 = ar4.filter(function (value) {
  return typeof value == `string` && value.includes(`test`);
});
console.log(newArr4);

// Massivdan faqat teskari tartibda joylashtirilgan elementlarni olib yangi massivga saqlang (reverse bilan).
//----Savolga tushinmadim---
// Massivdan faqat 0 dan katta bo'lgan sonlarni olib yangi massivga saqlang.
let ar6 = [
  12,
  "test",
  -34,
  `multiple`,
  `xyzunn`,
  0,
  `odd`,
  `abccba`,
  `xyz`,
  100,
  `UAE`,
  `BMA test`,
  -234,
  `object`,
  0,
  `positive`,
  `io`,
  12,
  `Testla`,
  72,
  `array`,
  -56,
  46,
  0,
];
let newAr6 = ar6.filter(function (value) {
  return typeof value === `number` && value > 0;
});
console.log(newAr6);

// Faqat sonlar mavjud bo'lgan elementlarni olib yangi massivga saqlang.
let ar7 = [
  12,
  "test",
  -34,
  `multiple`,
  `xyzunn`,
  0,
  `odd`,
  `abccba`,
  `xyz`,
  100,
  `UAE`,
  `BMA test`,
  -234,
  `object`,
  0,
  `positive`,
  `io`,
  12,
  `Testla`,
  72,
  `array`,
  -56,
  46,
  0,
];
let newArr7 = ar7.filter(function (value) {
  return typeof value === `number`;
});
console.log(newArr7);

// Faqat uzunligi 3 dan kichik bo‘lgan elementlarni olib yangi massivga saqlang.
let ar8 = [
  12,
  "test",
  -34,
  `multiple`,
  `xyzunn`,
  0,
  `odd`,
  `abccba`,
  `xyz`,
  100,
  `UAE`,
  `BMBA test`,
  -234,
  `object`,
  0,
  `positive`,
  `io`,
  12,
  `Testla`,
  72,
  `array`,
  -56,
  46,
  0,
];
let newAr8 = ar8.filter(function (value) {
  return typeof value === `string` && value < 3;
});
console.log(newAr8);

// Berilgan massivdan faqat unli harflardan iborat elementlarni olib yangi massivga saqlang.
let ar9 = [`w`, `s`, `e`, `a`, `i`];
let vowel = [`e`, `u`, `i`, `o`, `a`];
let res1 = ar9.filter(function (value) {
  return vowel.includes(value);
});
console.log(res1);

// Faqat boshida "abc" bo‘lgan elementlarni olib yangi massivga saqlang (slice bilan).
let ar10 = [
  12,
  "test",
  -34,
  `multiple`,
  `xyzunn`,
  0,
  `odd`,
  `abccba`,
  `xyz`,
  100,
  `UAE`,
  `BMBA test`,
  -234,
  `object`,
  0,
  `positive`,
  `io`,
  12,
  `Testla`,
  72,
  `array`,
  -56,
  46,
  0,
];
let newAr9 = ar10.filter(function (value) {
  return typeof value === `string` && value.slice(0, 3) === `abc`;
});
console.log(newAr9);

// Faqat oxirida "xyz" mavjud bo‘lgan elementlarni olib yangi massivga saqlang (slice bilan).
let ar11 = [
  12,
  "test",
  -34,
  `multiple`,
  `oxyz`,
  0,
  `odd`,
  `abccba`,
  `rexyz`,
  100,
  `UAE`,
  `BMBA test`,
  -234,
  `object`,
  0,
  `positive`,
  `io`,
  12,
  `Testla`,
  72,
  `array`,
  -56,
  46,
  0,
];
let newAr11 = ar11.filter(function (value) {
  return typeof value === `string` && value.slice(value.length - 3) === `xyz`;
});
console.log(newAr9);

// Berilgan massivdan faqat qiymati 10 dan kichik bo‘lgan sonlarni olib yangi massivga saqlang.
let ar12 = [
  12,
  "test",
  -34,
  `multiple`,
  `oxyz`,
  0,
  `odd`,
  `abccba`,
  `rexyz`,
  100,
  `UAE`,
  `BMBA test`,
  -234,
  `object`,
  0,
  `positive`,
  `io`,
  12,
  `Testla`,
  72,
  `array`,
  -56,
  46,
  0,
];
let newArr12 = ar12.filter(function (value) {
  return typeof value === `number` && value < 10;
});
console.log(newArr12);

// Faqat "test" so‘zini o‘z ichiga olmagan elementlarni olib yangi massivga saqlang (includes bilan).
let ar13 = [
  12,
  "test",
  -34,
  `multiple`,
  `oxyz`,
  0,
  `odd`,
  `abccba`,
  `rexyz`,
  100,
  `UAE`,
  `BMBA test`,
  -234,
  `object`,
  0,
  `positive`,
  `io`,
  12,
  `Testla`,
  72,
  `array`,
  -56,
  46,
  0,
];
let newAr13 = ar13.filter(function (value) {
  return typeof value === `string` && !value.includes(`test`);
});
console.log(newAr13);

// Faqat uzunligi eng uzun bo‘lgan elementlarni olib yangi massivga saqlang.
let arr45 = [`olma`, "anor", `anjir`, `gilos`];
let maxLength = arr[0].length;
arr45.forEach((value) => {
  if (value.length > maxLength) {
    maxLength = value.length;
  }
});
let res45 = arr45.filter((value) => {
  return value.length == maxLength;
});
console.log(res45);
