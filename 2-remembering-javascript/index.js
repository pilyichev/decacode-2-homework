const numbers = process.argv.slice(2);

console.log(numbers);

let totally = 0;
for (let i = 0; i < numbers.length; i++) {
totally += Number(numbers[i])
};

console.log(`Сумма: ` + totally);

let average = totally / numbers.length;
console.log(`Среднее арифметическое: ` + average);