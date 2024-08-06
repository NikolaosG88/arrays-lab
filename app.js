/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/
console.log('__________1______________');
const foods = [];  

console.log('Exercise 1 result:', foods);
console.log('__________2______________');
/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

foods[0] = 'pizza'
foods[1] = 'chessburger'

console.log('Exercise 2 result:', foods);
console.log('__________3______________');
/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

foods.unshift('taco');

console.log('Exercise 3 result:', foods);
console.log('__________4______________');
/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

console.log(foods[1]);

const favFood = foods[1];

console.log('Exercise 4 result:', favFood);
console.log('__________5______________');
/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/
foods.splice(2,0,'tofu')

console.log('Exercise 5 result:', foods);
console.log('__________6______________');
/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

foods.splice(1,1,'sushi', 'cupcake');

console.log('Exercise 6 result:', foods);

console.log('__________7______________')
/*
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/
const yummy = foods.slice(1, 3);
 

console.log('Exercise 7 result:', yummy);
console.log('__________8______________');
/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

const soyIdx = foods.indexOf('tofu');
console.log('Exercise 8 result:', soyIdx);
console.log('__________9______________');
/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

allFoods = foods.join('->')

console.log('Exercise 9 result:', allFoods);
console.log('__________10______________');
/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

const hasSoup = foods.includes('soup');

console.log('Exercise 10 result:', hasSoup);
console.log('__________11______________');
/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

let odds = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !==0) {
        odds.push(nums[i]);
    }
}

console.log('Exercise 11 result:', odds);
console.log('__________12______________');
/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/

let fizz = []; // dived by 3
let buzz = []; // divided by 5
let fizzbuzz = []; //divied by 3 & 5

for (let i = 0; i < nums.length; i++) {
    if ( nums[i] % 3 === 0 && nums[i] % 5 === 0) {
        fizzbuzz.push(nums[i]);
    } else if (nums[i] % 3 === 0) {
        fizz.push(nums[i]);
    } else if (nums[i] % 5 === 0) {
        buzz.push(nums[i]);
    }
}
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);
console.log('__________13______________');
console.log('__________14______________');
console.log('__________15______________');