
// Define an enumeration
// Usually capitalized letters are used
// by default enums start from 0, but we can change it as shown
enum AuthError {
    WRONG_CREDINTIALS = 1,
    SERVER_FAIL,
    EXPIRED_SESSION
}

console.log(AuthError.WRONG_CREDINTIALS); // prints the number value of the enum
console.log(AuthError.EXPIRED_SESSION)
console.log(AuthError[AuthError.WRONG_CREDINTIALS]); // prints the text


function handleError(error: AuthError) {
    switch(error) {
        case AuthError.WRONG_CREDINTIALS:
            console.log('Handling wrong Credintials')
            break;
        case AuthError.SERVER_FAIL:
        case AuthError.EXPIRED_SESSION:
            console.log('Handling Server failed or Expired Session')
            break;
    }
}

handleError(AuthError.WRONG_CREDINTIALS)


// We can also use string value from the beginning
enum WeekDay {
    SUNDAY = 'Sunday',
    MONDAY = 'Monday',
    TUESDAY = 'Tuesday',
    WEDNESDAY = 'Wednesday',
    THURSDAY = 'Thursday',
    FRIDAY = 'Friday',
    SATURDAY = 'Saturday'
}

console.log(WeekDay.MONDAY)