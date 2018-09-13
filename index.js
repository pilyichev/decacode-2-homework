const path = require('path');
const fs = require('fs');

const pathToJSON = path.resolve(__dirname, 'index.json');
const data = fs.readFileSync(pathToJSON, 'utf8');

let dataParsed = JSON.parse(data);

let count = dataParsed.length;
console.log(`Количество пользователей: ` + count);

let ageTotally = Object.values(dataParsed).reduce((acc, n) => acc + n.age, 0);
let averageAge = (ageTotally / count);
console.log(`Средний возраст пользователей: ` + averageAge);

let selectedList = dataParsed.map((user) => user.age + ` ` + user.name).join(`, `);
console.log(selectedList)

let painterList = dataParsed.filter((user) => user.skills.includes(`Paint`)).map((user) => user.name);
console.log(painterList);