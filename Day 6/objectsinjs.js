//Objects in javascript
//Object are in key-value pair
const ob1 = {Name: "Jayant", city: "Ghaziabad", age: 23}
// const ob2 = new Object();
// const ob3 = { };
console.log(ob1.Name);
console.log(ob1.age);
console.log(ob1.city);
// console.log(ob2);
// console.log(ob3);
//add properties to objects
ob2.college = "ABES";
ob2.contact = "9898XXXXX"
console.log(ob2);
console.log(ob2["college"]);
//delete properties of objects
console.log(ob1);
delete ob1.city;
console.log(ob1);

const A = "City";
ob1[A] = "Meerut";
console.log(ob1);
