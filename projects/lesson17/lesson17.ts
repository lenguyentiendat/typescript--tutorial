function handleExceptions (errorMessage: string): never {
    throw new Error(errorMessage)
}

function runInfinity(): void{
    
    // while(true){
    //     // console.log("Running...")
    // }
    
}

// handleExceptions("This is an error message by the way")

let a = runInfinity()
console.log(">>check a = ", a)