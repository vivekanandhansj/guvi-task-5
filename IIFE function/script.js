// a. Print odd numbers in an array
((a) =>{
    
   for (let i= 0; i < a.length; i++){if (a[i] %2 != 0)
   {console.log(a[i]);
   }
 }
 })([1,2,3,4,5]);

//  b. Convert all the strings to title caps in a string array
((name) => {
  
   name=name.map(([firstChar, ...rest]) => firstChar.toUpperCase() + rest.join("").toLowerCase());
   console.log(name);
 })(["steven austein", "find me"]);

//   c. Sum of all numbers in an array
((a) => {
 let t = 0
 a.map((e) =>{
  t = t + e
})
     console.log(t)
})([1,2,3,4,5])
// d. Return all the prime numbers in an array
(()=>{let x = [2, 3, 4, 5, 6, 7, 8, 9, 10]

 x = x.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
   if (number % i === 0) return false;
  }
  return true;
});

console.log(x)  
})()
// e. Return all the palindromes in an array
(()=>{const arr = ['carecar', 1344, 12321, 'did', 'cannot'];
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
})()

// f. Return median of two sorted arrays of same size
(()=>{const median = (a, b) => {
 //Sort the array
 let c = [...a, ...b].sort((a, b) => a - b);
 
 //Get the floor value
 const half = c.length / 2 | 0;
 
 //If odd then return middle element
 if (c.length % 2) return c[half];
 
 //If even then return the average of two mid elements
 return (c[half] + c[half - 1]) / 2;
}
const arr1 = [1, 12, 15, 26, 38];
const arr2 = [2, 13, 17, 30, 45, 47];
console.log(median(arr1, arr2));
})()
// g. Remove duplicates from an array
((arr)=> {
 duplicate =   [...new Set(arr)];
    console.log(duplicate)
 })
(["a", "b", "a",
"c", "d", "d"]);
// h. Rotate an array by k times
// rotate an elements by k times 
((arr)=>{
 for(var i=k;i<arr.length;i++)
    arr.unshift(arr.pop());
    console.log(arr);})

([1,2,3,4,5],k=1);


