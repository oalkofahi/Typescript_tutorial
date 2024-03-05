


/*
Note how there are no types in Javascript
the function here can accept any input
*/
function generateEmail(input) {
    // Note that using the tics allows evaluation in a similar fashon to bash
    return "".concat(input.firstName, ".").concat(input.lastName, "@email.com");
}

console.log(generateEmail({
    firstName: 'fname',
    lastName: 'lname'
}));
