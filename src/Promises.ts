

// The export keyword allows this construct to be used outside this file
export interface IServer {
    startServer():void,
    stopServer():void
}

export class Server implements IServer {

    public port: number;
    public address: string;

    constructor(port: number, address: string) {
        this.port = port;
        this.address = address
    }

    async startServer(): Promise<void> {
        console.log(`Starting Server at: ${this.address}:${this.port}`)
        // Calling a method that returns a Promise must be done using the "await" keyword
        // Using await will make the data variable of type string
        // Forgetting the await before the call will make data of type Promise<string>
        // To call a method asynchronously, we must be in an asynchrounous block ==> startServer must be async
        const data = await this.getData();
    }

    stopServer(): void {
        console.log(`Stopping Server at: ${this.address}:${this.port}`)
    }

    // specifiying a method as async means it returns type Promise
    // Becasue we decided to return a string it will be Promise<string>
    // Returning other types will change the template argument
    // to make more readable and clear we can include this as a return type
    async getData(): Promise<string>{
        return 'data'
    }

}