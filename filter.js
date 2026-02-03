const numbers = [10,15,20,25,30];
const filteredNum = numbers.filter(num => num > 20);
console.log(filteredNum); // Output: [25, 30]

const users = [
    { name: "Alex", active: true },
    { name: "Bob", active: false },
    { name: "Chris", active: true },
]
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);

const products = [
    { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 20 },
  { name: "Keyboard", price: 100 },
]
const expensiveProducts = products.filter(product => product.price >= 100);
console.log(expensiveProducts);