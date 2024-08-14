type cobraType = number | string | boolean | object //alias type

function addNumberOrString(a: cobraType, b: number | string ){  // union type
    if (typeof a === 'number' && typeof b === 'number'){ 
        return a+b; 
    }
     
    if (typeof a === 'string' && typeof b === 'string') { 
        return a.concat(b); 
    }
    throw new Error('Parameters must be numbers or strings'); 
}


console.log(">>>check: ", addNumberOrString('cobra in ', 'ussh'))