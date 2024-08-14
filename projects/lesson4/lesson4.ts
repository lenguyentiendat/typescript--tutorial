const sum3 = (x: number, y: string) => {
    return x + y;
}

//no error
console.log(">>> check sum3 = ", sum3(5, '10')); //15


//error
// console.log(">>> check sum3 = ", sum3(5, true)); //15
