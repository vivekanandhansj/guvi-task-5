//Task 2: Simple Programs todo for Operators
//a.Square of a number
let a=10
let b= a**2
console.log(b)


//b.Swapping 2 numbers
let x11 = prompt('Enter first value: ')
let y11 = prompt('Enter second value: ')
let z11
z11=x11
x11=y11
y11=z11
console.log(`Value of x after swapping : ${x11}`);
console.log(`Value of y after swapping  : ${y11}`);


//c.Addition of 3 numbers
var a=10
var b=20
var c=30
console.log(a+b+c)


//d.Celsius to Fahrenheit conversion
let celsius=42
let fahrenheit = celsius * 1.8 + 32
console.log(fahrenheit)


//e.Meter to miles
let meter=100
let miles=meter*0.00062137
console.log(miles)


//f.Pounds to kg
let pound=5
let kilo = pound * 0.45
console.log(kilo)


//g.Calculate Batting Average
let runs = 1000;
let matches = 20;
let notout = 7;
let avg = runs/ (matches - notout);
 console.log(avg)


 //h.Calculate five test scores and print their average
let a1=100
let b1=98
let c1=99
let d1=98
let e1=100
let average=(a1+b1+c1+d1+e1)/5
console.log(average)


//i.Power of any number x ^ y
let x1=2
let y1=3
let power=x1 ** y1
console.log(power)


//j.Calculate Simple Interest
let p=30000
let n=12
let r=12.6
let SI = (p*n*r)/100
console.log(SI)


//k.Calculate area of an equilateral triangle
var a=50
let arequilateralTriangle = ( 1.73 * a *a) / 4
console.log(arequilateralTriangle)


//l.Area Of Isosceles Triangle
var a=2
var b=3
let AltitudeOfIsoscelesTriangle = Math.sqrt(Math.pow(a, 2) - (Math.pow(b, 2) / 4));
let h=AltitudeOfIsoscelesTriangle
let AreaOfIsoscelesTriangle=((1 * b * h) / 2)
console.log(AreaOfIsoscelesTriangle)


//m.Volume Of Sphere
let radius = 5;
let volumePOfSphere = (4/3)* Math.PI * Math.pow(radius, 3);
console.log(volumePOfSphere)


//n.Volume Of Prism
var b=45
var h=34
let volumeOfPrism= b5 *h5
console.log(volumeOfPrism)


//o.Find area of a triangle.
var b=4
var h=7
let areaOfTriangle=(1/2)* b * h
console.log(areaOfTriangle)


//p.Give the Actual cost and Sold cost, Calculate Discount Of Product
let actualCost=500
let soldCost=475
let discountOfProduct=actualCost-soldCost
console.log(discountOfProduct)


//q.Given their radius of a circle and find its diameter, circumference and area.
let r22=10
let diameterOfCircle = 2 * r22
let circumferenceOfCircle= 2 * Math.PI * r22
let areaOfCircle = Math.PI * r22 * r22
console.log(diameterOfCircle)
console.log(circumferenceOfCircle)
console.log(areaOfCircle)


//r.Given two numbers and perform all arithmetic operations.
let p0=5
let q0=2
   let sum0 = p0 + q0;
   let sub = p0 - q0;
   let mul = p0 * q0;
   let div = p0 / q0;
   let mod = p0 % q0;
   let sqr = p0 ** q0;
console.log(sum0)
console.log(sub)
console.log(mul)
console.log(div)
console.log(mod)
console.log(sqr)


//s.Display the asterisk pattern as shown below(No loop needed)
let a6=["*","*","*","*","*"]
a6.map((e)=>{
    d0=e+e+e+e+e
console.log(d0)
})


//t.Calculate electricity bill? //per hour 100watt,per unit10rs
let unitPerHourInWatt=100
let hour=1
let unitRate=10
let kWh=(unitPerHourInWatt * hour)/1000
let monthUsage=30*kWh
let costOfBill=unitRate*monthUsage
console.log(costOfBill)


//u.Program To Calculate CGPA
var mark1=97
 var mark2=100
 var mark3=98
 var mark4=100
 var mark5=99
var CGPA=(mark1+mark2+mark3+mark4+mark5)/5
console.log(CGPA)


//Starting from the friends variable below, 
//Loop and Print the names till you meet CaptianAmerica.
let friendsss = ["Mari","MaryJane","CaptianAmerica","Munnabai","Jeff","AAK chandran"];
function dataHandling(inputt){
    
 for (var i = 0; i < inputt.length-3; i++) {
console.log(inputt[i])
 }    
    }
        dataHandling(friendsss);