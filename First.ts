

// compile by running $> tsc First.ts
// This will generate First.js

// Type is inferred here
var a = "Hello World";

//a = 5; // Error you can't int to string
a = "No error"; // this is OK


// To specify type use var <var name>: <type>
var b: number = 10;
var c: boolean = false;


// Defining arrays
var strArray: string[] = ["str1", "str2", 'str3'];
strArray.push(a)
//strArray.push(b); //Error
strArray.push(b as any); // will cast b to type any

console.log(strArray)

// To have an array that can include any type ==> use any as type
// Using "any" for type is not recommeneded
var anyTypeArray: any[] = ['str', 5];

anyTypeArray.push(a);
anyTypeArray.push(b);
anyTypeArray.push(c);

console.log(anyTypeArray);



