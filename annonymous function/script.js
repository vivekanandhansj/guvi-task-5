// anonymous function
// a. Print odd numbers in an array 
let b = function(a)  {
    for (let i = 0; i<a.length; i++){
        if(a[i] % 2 != 0 ){
        console.log(a[i])
    }
  }
}
 b([1,2,3,4,5,6])

// b. Convert all the strings to title caps in a string array
 let a = function(str) { 
   str = str.split(" ").map(([firstChar, ...rest]) => firstChar.toUpperCase() + rest.join("").toLowerCase()).join(" ");
    console.log(str);
  }
  a("john smith");

// c. Sum of all numbers in an array
let add = function(a) {
    let t = 0
    a.map((e) =>{
     t = t + e
 })
        console.log(t)
 }
 add([1,2,3,4,5]);
// d. Return all the prime numbers in an array
var sum =function(a){
  var  res="";
  for(i=0;i<a.length;i++)
  {
      var count=0;
      for(j=1;j<=a[i];j++)
      {
          if(a[i]%j===0)
          {
              count++
          }
      }
      if(count==2)
      {
          res+=a[i]+" "
      }
  }
  return res;

}
console.log(sum([1,2,3,4,5,6,7,8,9,11]))
// e. Return all the palindromes in an array
var palind=function(a){
    var res="";
    var ans="";
    for(i=0;i<a.length;i++)
    {
        res+=a[i];
        var count=0
        
        for(j=0;j<res.length;j++)
        {
            if(res[j]===res[((res.length-1)-j)])
            {
                count++
                
            }
        }
        if(count===res.length)
        {
            ans+=res+" "
        }
        res="";
    }
    return ans;
 
}
console.log(palind([1,11,343,200,798,80108,8008,999,7171,700007]))
// f. Return median of two sorted arrays of same size
const median = function(a, b) {
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

// g. Remove duplicates from an array
var arr = ["a", "b", "a",
"c", "d", "d"];

const fun = function(arr) {
return [...new Set(arr)];

}
let c = fun(arr);
console.log(c);
    
// h. Rotate an array by k times
const rotate =function(arr){
  for(var i=k;i<arr.length;i++)
     arr.unshift(arr.pop());
     console.log(arr);}

rotate([1,2,3,4,5],k=1);
