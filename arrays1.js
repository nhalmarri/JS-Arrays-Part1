//1. Create an array and name it `groceries`, add 6 groceries to it

const groceries = ["basil", "oliveOil", "yogurt", "bread", "milk", "salt"];

//2. Print the second element from the array `groceries`

console.log(groceries[0]);

//3. Print how many elements are in the array (i.e length of the array)

console.log(groceries.length);

//4. Print the last element in the array

console.log(groceries[groceries.length - 1]);

//5. Remove the last element from the array and print it

console.log(groceries.pop());

//6. Add two new and different elements to the end of the array

console.log(groceries.push("water"));

console.log(groceries.push("eggs"));

console.log(groceries);

//7. Create a new array named `firstThreeItems` and it’s elements are the first three elements from the `groceries` array.

firstThreeItems = groceries.slice(0, 3);

console.log(firstThreeItems);

//🌶️🌶️🌶️ **Challenge**
//1. Delete the 3rd element in the array

//const groceries1 = groceries.slice(0, 2);

//const groceries2 = groceries.slice(3, -1);

//const newGroceries = groceries1.concat(groceries2);

//console.log(newGroceries);

console.log(groceries.splice(2, 1));

//2. Insert a new element at the beginning of the array

const newItem = "pasta ";

console.log(newItem.concat(groceries));

//3. Remove the first two elements and replace them with “ketchup” and “chili”
groceries[0] = "ketchup";
groceries[1] = "chili”";

console.log(groceries);
