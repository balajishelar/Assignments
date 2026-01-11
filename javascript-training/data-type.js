//Data types

/*1.Primitive data types
2.Non-Primitive data types
*/

//*****1.Primitive data types***** //

//1.number==> number represent number with decimal and without decimal. (without quotes)
let num =123; //without decimal
let floatNum = 12.34; //number with decimals

console.log(typeof num); //output : number
console.log(typeof floatNum); // output : number

//2.sting (text)==> string represents sequence of charactors wrapped inside single or double quotes.
let str1= 'hello world'; //string with single quotes
let str2= "javascript is fun"; //string with double quotes

console.log(typeof str1); //output : string
console.log(typeof str2);//output : string

//3.boolean==>boolean represents result of condition : true or false.
let isJavaScriptFun =true; //boolean true
let isSkyGreen =false; //boolean false

console.log(typeof isJavaScriptFun); //output : boolean
console.log(typeof isSkyGreen); //output : boolean

//4.undefined==> undefined represents the variable that has been declared but not assigned a value.
let undefVar;  //varible drclared but not assigned
console.log(typeof undefVar); //output : undefined

//5.null==> null represents an intentional absence of any object value.
let nullVar = null;  
console.log(typeof nullVar);  //output : object

//6.Symbol==> symbol represents a unique identifier

//*******2.Non-Primitive data types*******// 

//1.object==> object represents a collecton of key-value pair.
let empDetails = {
empId : 101,
empName : "John Deo",
havingVisa : true,
address : {
    city : "New York",
    zipcode : 10001,
    state :"NY",
    country : "USA",
}

};

//print employee name
console.log(empDetails.empName); //output : John Deo

//print zipcode
console.log(empDetails.address.zipcode); //output : 10001

//print address
console.log(empDetails.address);

//2.array ==> array represents an orderd collection of items.
let fruits = ["Apple", "Banana", "Mango", "Orange"];
let fruitsAndPrices= ["Apple", 100, "Banana", 120, "Mango", 130, "Orange", 140];
let fruitsAndPricesAndAvailability= ["Apple", 100, true, "Banana", 120, false, "Mango", 130, false, "Orange", 140, true]

//print banana from fruits array
console.log(fruits[1]); //output : Banana

//print price of orange from fruitsAndPrices array
console.log(fruitsAndPrices[7]);  //output : 140

//print availability of mango from fruitsAndPricesAndAvailibilty array
console.log(fruitsAndPricesAndAvailability[8]);  //output : false



