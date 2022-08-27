


const user = { id: 1, name: 'Tuhin Shuvra', job: 'actor' };
const stringified = JSON.stringify(user);
const userN = JSON.parse(stringified);
console.log(user);
console.log(stringified);
console.log(userN);