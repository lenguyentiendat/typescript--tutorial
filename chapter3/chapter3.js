
let sum6 = (x, y, z = false) => {
    if(z === false){
        return x + y
    }
    if(z){
        return x - y + z
    }
}
console.log("check sum6: ", sum6(1,2), sum6(1,2,3));





// let sum4 = (x,y,z) => { //z : optional parameter
//     console.log(">>check z: ", z)
//     if(z){
//         return x + y + z;
//     }    
//     return x + y
    
// }

// console.log("check sum4: ", sum4(1,2), sum4(1,2,3)); 