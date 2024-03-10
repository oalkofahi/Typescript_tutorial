
// About types Undefined, Null, Never, and Unknown ==> UNNU
/**
 * Null and undefined are similar in that they both define something that does not exist
 * Types unknown, is used for variables that could be assigned different types
 * Types unknown and never are less frequently used or encountered
 */

let A = undefined;
let B = null;

function getData(): string | undefined {
    return '';
}

const data = getData();
if(data) {
    // Here data and otherData are of type string (Hover the mouse over them to check)
    // This is because we strictly checked for data in the if condition
    const otherData = data;
}

// Unknown
let input: unknown;
input = 'some input';
let someSensetiveValue: string;
//someSensetiveValue = input; //Error: Type 'unknown' is not assignable to type 'string'
if(typeof input == 'string') {
    someSensetiveValue = input;
}

// Because of the conditional flow someSensitiveValue might not be assigned so the compiler will throw an error
// To overcome this we can use the ! to say that "Hey compiler!! trust me this will be assigned"
// Or of course, print inside the if block
console.log(someSensetiveValue!)


// Never is an older type that is covered by void
// In this case this function never returns anything
// We could say that this function returnd void or never
function throwError(errno: number): void | never {
    if(errno == 1) {
        throw new Error('Error 1')
    } else if (errno == 2) {
        throw new Error('Error 2')
    }
}

const tmp = throwError(1)