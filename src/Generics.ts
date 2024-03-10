


// To deal with generic parameters
// Similar to templates in C++
function wrapInArray<T>(arg: T) : T[] {
    return [arg];
}

// you might need to be more specific with the types
// Here we say that our type must extend object because we assume it has keys
function returnKeys<T extends object>(arg: T){
    console.log(Object.keys(arg))
    return arg;
}

const aa = returnKeys({
    key1: 'val1',
    key2: 'val2'
})

// Using Generics with interfaces
interface MyPerson <T> {
    name: string,
    age: number,
    special: T
}

const John: MyPerson<string> = {
    name: 'John',
    age: 33,
    special: 'Eng'
}

returnKeys(John)


class Observable <T extends MyPerson<string>> {
    subscribe(arg: T) {
        console.log(`Subscribed to ${arg.name}`)
    }
}

new Observable<typeof John>().subscribe(John)