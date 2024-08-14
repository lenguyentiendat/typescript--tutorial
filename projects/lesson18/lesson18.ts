function addNumberOrString(a: number | string | boolean | object, b: number | string | boolean | object){  // union type
    if (typeof a === 'number' && typeof b === 'number'){ 
        return a+b; 
    }
     
    if (typeof a === 'string' && typeof b === 'string') { 
        return a.concat(b); 
    }
    throw new Error('Parameters must be numbers or strings'); 
}


console.log(">>>check: ", addNumberOrString(true, 'us sh'))


let c: number | string | boolean | object = 'datlnt'
console.log(">>>check c = ", c)