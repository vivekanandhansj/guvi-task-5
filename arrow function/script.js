// Print odd numbers in an array

let b = (a) => {
   for (let i = 0; i < a.length; i++) {
       if (a[i] % 2 != 0) {
           console.log(a[i])
       }
   }
}
b([1,2,3,4,5,6]);

// Convert all the strings to title caps in a string array
var name =(str) => { 
   str = str.split(" ").map(([firstChar, ...rest]) => firstChar.toUpperCase() + rest.join("").toLowerCase()).join(" ");
    console.log(str);
  }
  name("john smith");

//   Sum of all numbers in an array

(() =>
{let x = [1,2,3,4,5];
let temp = 0
for (let i = 0; i<x.length ; i++)
temp = temp+x[i];
console.log(temp);} )();

// Return all the prime numbers in an array
let x = [2, 3, 4, 5, 6, 7, 8, 9, 10]

  x = x.filter((number) => {
   for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
   }
   return true;
 });

console.log(x)

// Return all the palindromes in an array
const arr = ['carecar', 1344, 12321, 'did', 'cannot'];
const isPalindrome = el => {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
const findPalindrome = arr => {
   return arr.filter(el => isPalindrome(el));
};
console.log(findPalindrome(arr));
