const numbers = [1,2,3,4,5];
const multiNum = numbers.map(num => num * 2);
console.log(multiNum); // Output: [2, 4, 6, 8, 10]

const names = ['Alice', 'Bob', 'Charlie'];
const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames); // Output: ['ALICE', 'BOB', 'CHARLIE']

const users = [
    {id: 1, name: "Jone", age: 20},
    {id: 2, name: "Doe", age: 25},
    {id: 3, name: "Smith", age: 30}
];
const userNames = users.map(user => user.name);
console.log(userNames); // Output: ['Jone', 'Doe', 'Smith']

