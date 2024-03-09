


// Define a custom interface to specify input format
// This is not necessary, but will enforce proper input
// This will not be part of the Javascript code that will eventually be executed
interface Person {
    firstName: string,
    lastName: string
    rank?: Rank // the ? says that this value is optional
    isVisitor?: boolean // another optional value
}

type Rank = "Senior" | "Junior"

/*

function <function_name>(<par1>: <par1_type>, ... <par_i>: <par_i_type>): <function_return_type1> | <function_return_type2> {
    function body
}

Note that the return type can be inferred by the compiler and is optional
But it is better to specify
*/


function generateEmail(input: Person): string | undefined{
    // Note that using the tics allows evaluation in a similar fashon to bash
    if(input.isVisitor) {
        return undefined
    } else {
        if(input.rank != undefined) {
            return `${input.rank}.${input.firstName}.${input.lastName}@email.com`
        } else {
            return `${input.firstName}.${input.lastName}@email.com`
        }
    }
}

console.log(generateEmail({
    firstName: 'fname',
    lastName: 'lname'
}));


console.log(generateEmail({
    firstName: 'fname',
    lastName: 'lname',
    rank: 'Senior'
}));

/*
- In some cases we might need to run a function using an input that is provided externally
- In this case we need to check if the input is valid
- We can do this using Type Guards
*/
// An example on a Type Guard
function isPerson(input: any): boolean {
    var is_person: boolean = false;
    if ('firstName' in input &&
        'lastName' in input) {
            is_person = true;
    }
    return is_person;
}

console.log(isPerson({
    firstName: 'fnameTest',
    lastName: 'lnameTest'
})); // Prints true

console.log(isPerson({
    firstName: 'fnameTest'
})); // prints false

function printEmailIfPerson(input: any) {
    if(isPerson(input)) {
        console.log(generateEmail(input))
    } else {
        console.log("Input is not a Person")
    }
}

printEmailIfPerson({
    firstName: 'fnameTest',
    lastName: 'lnameTest',
    rank: 'Nonesense' // This is not a valis value for rank, still it will be treated as if it is a valid rank. THIS BREAKS TYPE SAFETY!!!!
    // Can be solved by adding more logic to check values of rank if it exists in input, which I guess is the whole point of using Typescript
});

printEmailIfPerson({
    firstName: 'fnameTest'
});