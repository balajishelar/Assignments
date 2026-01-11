// variable declaration will vary based on four different parameters.

// 1.Initialization
// 2. Re-assignment
// 3. Re-declaration
// 4. Scope

// 1.Initialization
 const a = 10; //must be initialzed
 let b;  //can be initialize later
 var c;  //can be initialize later

//  2. Re-assignment
//const a = 15 //through error
b = 20; //valid
c = 20; //valid

// 3. Re-declaration

//const a = 123;// error : identified 'a' has already declared
//let b = 30;  //error : identified 'b' has already declared
var c = 35; //valid


// 4. Scope
{
const x = 50;
let y = 45;
var z= 60;
console.log(x); //valid
console.log(y); // valid
console.log(z); //valid
}
//console.log(x); // error : not defined
//console.log(y); // error : not defined



