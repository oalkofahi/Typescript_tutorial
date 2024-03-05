


// Define a custom interface to specify input format
// This is not necessary, but will enforce proper input
// This will not be part of the Javascript code that will eventually be executed
interface Person {
    firstName: string,
    lastName: string
}

/*

function <function_name>(<par1>: <par1_type>, ... <par_i>: <par_i_type>): <function_return_type> {
    function body
}

Note that the return type can be inferred by the compiler and is optional
But it is better to specify
*/
function generateEmail(input: Person): string{
    // Note that using the tics allows evaluation in a similar fashon to bash
    return `${input.firstName}.${input.lastName}@email.com`

}

console.log(generateEmail({
    firstName: 'fname',
    lastName: 'lname'
}))