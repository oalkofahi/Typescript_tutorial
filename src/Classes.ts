

/**
 * // Defining classes
 * class <className> {
 *  Everything is public by default
 *  Instance variables:
 *  [<access modifier>] <varName>: <types>
 *
 *
 *  Methods
 *  - constructor() {}
 * }
 *
 * // Defining Interfaces
 * interface <interface name> // a good practice is to start the name with I
 * {
 *      // Names of methods to be implemented
 * }
 */

interface IServer {
    startServer(): void
    stopServer(): void
}

// Of course if a class implements an inteface ==> it must provide an implementaton for each mehtod in the inteface
class BaseServer implements IServer {
    private port: number;
    private address: string;

    constructor(port: number, address: string) {
        this.port = port;
        this.address = address;
        console.log("Calling BaseServer constructor")
    }

    /**
     * We can define the variable and the constructor toghether if we do:

        constructor(private port: number, private address: string) {
            this.port = port;
            this.address = address;
        }

     * This is equivalent to declaring the var and defining the constructor
     */

    // Implement methods from interface
    startServer(){
        console.log(`Starting server at: ${this.address}:${this.port}`)
    }

    stopServer(): void {
        console.log(`Stopping server at: ${this.address}:${this.port}`)
    }

    public othermethod() {
        console.log('Some method')
    }

}

// To instantiate an object
const someServer = new BaseServer(80, 'localhost');
someServer.startServer();

//someServer.port = 30; // Error because port is private
// But we can hack it by casting to any
(someServer as any).port = 30; // This works
someServer.startServer()

// Inheritance is done using the keyword extends
// We can only access protected or public members directly ==> private members cannot be accessed
class DbServer extends BaseServer {

    // we can override constructor of base class
    // If we do so, we need to call the constructor of the super class at the very first line
    constructor(port: number, address: string){
        super(port, address)
        console.log("Calling DB server constructor")
    }
}

const dbServer = new DbServer(453, 'localhost');



// We can declar an object specifying an interface as a type
const anotherServer: IServer = new BaseServer(8080, '127.0.0.1')
// This restricts the capabilities of this instance to the methods defined in the interface
//anotherServer.othermethod(); // Error
anotherServer.startServer(); //OK
anotherServer.stopServer();// OK

// We can also define abstract classes by using the abstract keyword
// Of course abstract classess cannot be instantiated
abstract class Shape {
    // We can also declare abstract methods
    // Such methods MUST be implemented in subclasses
    abstract draw: void
}

/*
Interfaces vs. abstrace classes
- A class can inherit from ONLY ONE super class, but can implement many interfaces
- Interfaces are not available at runtime, but abstract classes are
    ==> we can use "instanceof" to check types at runtime with abstract classes
        but not with interfaces
*/

