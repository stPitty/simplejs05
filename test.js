const date = new Date(null);
date.setSeconds(50);
let result = date.toISOString().substr(11, 8);

console.log(result)
result = date.setSeconds(45).toString().slice(11, 19)
console.log(result)