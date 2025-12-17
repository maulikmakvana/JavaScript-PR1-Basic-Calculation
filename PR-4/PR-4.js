// 1 : Create an object car with properties brand, model, and year. Print only the brand.
console.log("1 : Create an object car with properties brand, model, and year. Print only the brand.") ;

let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022
};

console.log(car.brand);

// 2 : Make an object book with keys: title, author, and pages. Access and print all values.
console.log("2 :Make an object book with keys: title, author, and pages. Access and print all values.") ;

let book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  pages: 208
};

console.log(book.title);
console.log(book.author);
console.log(book.pages);

// 3 : Create an object person with properties firstName and lastName. Print full name (concatenate).
console.log("3 :Create an object person with properties firstName and lastName. Print full name (concatenate).") ;
let person = {
    firstname : "Maulik",
    lastname : "Makvana" ,
}

let fullname = `${person.firstname} ${person.lastname}`;
 
console.log (fullname);

// 4 :  Create an object mobile with properties company and price. Change the price and print updated object.
console.log("4 : Create an object mobile with properties company and price. Change the price and print updated object.") ;

let mobile = {
  company: "Samsung",
  price: 15000
};

mobile.price = 18000;

console.log(mobile);

// 5 : Create an object marks with subjects: math: 80, science: 90, english: 85. Find and print total marks.
console.log("5 : Create an object marks with subjects: math: 80, science: 90, english: 85. Find and print total marks..") ;

let marks = {
  math: 80,
  science: 90,
  english: 85
};

let total = marks.math + marks.science + marks.english;

console.log("Total Marks:", total);

// 6 : Create an array of product objects with name, price, quantity.
console.log("6 : Total value of stock");

let products = [
  { name: "Pen", price: 10, quantity: 50 },
  { name: "Notebook", price: 50, quantity: 20 },
  { name: "Pencil", price: 5, quantity: 100 }
];

let totalStockValue = 0;

for (let product of products) {
  totalStockValue += product.price * product.quantity;
}

console.log("Total Stock Value:", totalStockValue);
