//lesson 20
let named: string = ''
if(named) {
    console.log('adult confirmed')
} 
else {
    console.log('minor confirmed')
}

let discount: number; 
let itemCount = 11; 

if (itemCount > 0 && itemCount<=5){ 
    discount=5;//5%discount 
}else if(itemCount>5&& itemCount<=10){ 
    discount=10;//10%discount 
}
else{ 
    discount=15;//15% 
}

console.log(`You got ${discount}% discount. `);

//lesson 21
//lesson 21
let month = 2, 
year = 2021; 

let day = 0; 
switch (month) { 
    case 1: 
    case 3: 
    case 5: 
    case 7: 
    case 8: 
    case 10: 
    case 12: 
        day = 31; 
    break; 
    case 4: 
    case 6: 
    case 9: 
    case 11: 
        day = 30; 
    break; 
    case 2: 
    // leap year 
        if (((year % 4 == 0) && 
        !(year % 100 == 0)) 
        || (year % 400 == 0)) 
            day = 29; 
        else
            day = 28; 
        break; 

    default: 
    throw Error('Invalid month'); 
}
console.log(`The month ${month} in ${year} has ${day} days`);
