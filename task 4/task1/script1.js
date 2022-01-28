//Task 1: Simple Programs todo for variables
//a.Declare four variables without assigning values and print them in console
var a
var b
var c
var d
console.log(10,20,30,40)


//b.How to get value of the variable myvar as output
var myvar= 1;
console.log(myvar);

// //c. Declare variables to store your first name, last name, marital status, country and age in multiple lines
var e={
first_name:"vivek",
last_name:"j",
marital_status:"un married",
country:"India",
age:"24"
}
console.log(e)

//d. Declare variables and assign string, boolean, undefined and null data types
var a="vivek"
var b=true
var c
var d=null
console.log(typeof(a))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))
//e.Convert the string to integer
let str="i am 20 years old"
var str1 = "you are 30 years old"
console.log(parseInt(str))
console.log(Number(str))
console.log(+(str))
console.log(parseInt(str1))
console.log(Number(str1))
console.log(+(str1))


//f.Write 6 statement which provide truthy & falsey values.
var b=1
b="1"
b=[1]
console.log(1 == "1")
console.log("1" == [1])
console.log([1] == 1)
console.log(1 === "1")
console.log("1" === [1])
console.log([1] === 1)