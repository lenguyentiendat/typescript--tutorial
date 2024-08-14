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

for (let i: number = 0; i < 10; i++){
    console.log(i);
}

//////////////////
// lesson 23
// let counter =  0
// // while(counter < 5){
// //     console.log(counter);
// //     counter++;
// // }

// while(counter < 5){
//     console.log(counter);
//     if(counter % 2 == 0) break
//     counter++;
// }

// //lesson 24
// let counter2 = 6;
// do {
//     console.log(counter2);
//     if(counter2 % 2 == 1) break
//     counter2++;
// } while (counter2 < 5);


//lesson 25
// let products = [
//     { name: 'apple', price: 700 },
//     { name: 'carrot', price: 900 },
//     { name: 'potato', price: 1200 },
// ]

// let discount1 = 0
// let product = products[1]
// switch(product.name){
//     case 'apple':
//         discount1 = 5
//         break
//     case 'carrot':
//         discount1 = 10
//         // break
//     case 'potato':
//         discount1 = 15
//         break
//     default:
//         discount1 = 100
// }

// console.log(`There is ${discount1}% discount for ${product.name}`)

//lesson 26
// for(let i = 0; i < 9; i++){
//     if(i % 2 == 1) 
//         continue;
//     // console.log(i);
// }


// let i = -1
// while(i < 9){
//     i = i + 1
//     if(i % 2)
//         continue
//     console.log(i);
// }

// //lesson27
// function sum(a: number, b: number) {
//     return a + b;
// } 

// //anonymous function
// const sum2 = (a: number, b: number) => {
//     return a + b;
// }

// console.log(">>check sum: ", sum2(1, 8));


//lesson 28
// const sum3 = (a: number, b: number): number => {
//     return a + b
// }
// console.log(">>check sum3: ",sum3(5, 6))

// let a = 10
// a = sum3(1,10)



// //lesson 29: optional parameters
// const sum5 = (x: number, y: number, z?: number) => {
//     if(z){ 
//         return x + y + z 
//     }
//     return x + y 
// }
// console.log(sum5(2, 5));


// //lesson 30

// let sum7 = (x: number, y: number, z = false) => {
//     if(z === false){
//         return x + y
//     }
//     if(z){
//         return x - y
//     }
// }
// console.log("check sum7: ", sum7(1,2), sum7(1,2, true));


//lesson 31
// function getTotal(...numbers: number[]): number{
//     let total = 0
//     numbers.forEach((num) => total += num)
//     return total
// }

// // console.log(">>check getTotal: ", getTotal()) //15
// // console.log(">>check getTotal: ", getTotal(1, 2, 3, 4, 5)) //15


// // // function multiply(n: number, ...m:number[]){ // rest params must be the last params
// // //     let a = m.map((x) => { 
// // //         console.log(">>check x: ", x)
// // //         return n * x
// // //     })

// // //     return m.map((x) => n * x)
// // // }
// // // const caltest = multiply(10, 72, 21, 42, 42, 50)
// // // console.log(">>check multiply: ", caltest)


// // function Greet(greeting:string, ...names: string[]) {
// //     return greeting + " " + names.join(", ") + "!"
// // }

// // console.log(Greet("Chao em", "Cobra","datlnt", "Bill"))
// // console.log(Greet())


//lesson 32
// function add111(a: number|string, b: number|string) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         return a + b;
//     }
//     if (typeof a === 'string' && typeof b === 'string') {
//         return a + b;
//     }
// }

// //overloading: định nghĩa các hàm giống nhau nhưng khác kiểu dữ liệu trả về
// function addNew(a: number, b: number): number

// function addNew(a: string, b: string): string

// function addNew(a: any, b: any) {
//     return a + b
// }

// console.log(">>check addNew: ", addNew(6,9), addNew("hello", " new world")); 


// class Counter {
//     private current = 0
//     count(): number
//     count(target: number): number[]
//     count(target?: number): number | number[] {
//         if (target) {
//             let values: number[] = []
//             for (let start = this.current; start <= target; start++) {
//                 values.push(start)
//             }
//             return values
//         }
//         return ++this.current
//     }
// }

// let counter111 = new Counter()
// console.log(">>check counter: ", counter111.count());
// console.log(">>check counter: ", counter111.count(20));



// lesson 33
// class Person {
//     public ssn: string
//     firstName: string
//     lastName: string

//     constructor(ssn: string, firstName: string, lastName: string) {
//         this.ssn = ssn
//         this.firstName = firstName
//         this.lastName = lastName
//     }
    
//     getFullName(): string {
//         return `My name is: ${this.firstName} ${this.lastName}`
//     }
// }

// let datlnt = new Person('123', 'Dat',"Le")
// console.log(">>check class: ", datlnt)
// console.log(">>check class: ", datlnt.getFullName())



// lesson 34
// class Employee {
//     private empName: string
//     public empCode: number
    
//     constructor(empName: string, empCode: number) {
//         this.empName = empName
//         this.empCode = empCode      
//     }
// }


// class SaleEmployee extends Employee {
//     private department: string

//     constructor(name: string, code: number, department: string) {
//         super(name, code)
//         this.department = department
//     }
// }

// let emp1 = new SaleEmployee('Dat', 123, 'IT') 
// emp1.empCode


// //lesson 35
// class Person{
//     readonly birthDate: String

//     constructor(birthDate: String){
//         this.birthDate = birthDate
//     }
// }

// let person1 = new Person('1999-01-01')
// person1.birthDate = '1999-01-02' 



//lesson 36
// class Person2 {
//     public _age: number
//     public firstName: string
//     public lastName: string

//     constructor(_age: number, firstName: string, lastName: string) {
//         this._age = _age
//         this.firstName = firstName
//         this.lastName = lastName
//     }

//     //getter
//     get age() {
//         return this._age
//     }
    
    
//     //setter
//     set age(age2: number){
//         if(age2 < 0 && age2 > 150){
//             throw new Error("Invalid age")
//         }
//         this._age = age2
//     }
// }

// let person2 = new Person2(25, "Dat", "Le")
// let checkAge = person2.age // getter
// console.log(">>check age: ", checkAge)


// person2.age = 26 // setter

// console.log(">>check age: ", person2) //getter


// // lesson 37
// class Person {
//     firstName: string
//     lastName: string
//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     getFullName(): string {
//         return `${this.firstName} ${this.lastName}`
//     }
//     describe(): string {
//         return `This is ${this.firstName} ${this.lastName}`
//     }
// }

// class Employee extends Person {
//     private jobTitle: string
//     constructor(firstName: string, lastName: string, jobTitle: string) {
//         super(firstName, lastName)
//         this.jobTitle = jobTitle
//     }
//     //overloading
//     describe(): string {
//         return `${super.describe()}. I am  ${this.jobTitle}`
//     }
// }

// let emp1 = new Employee('Dat', 'Le', 'Developer')
// console.log(emp1.getFullName())
// console.log(emp1.describe())


//lesson 38
// class Circle {
//     static pi: number =  3.14
//     public test: number = 69
    
//     static calculateArea(radius: number) {
//         return this.pi * radius * radius;
//     }
// }

// let newCircle = new Circle()
// console.log(">>check S = ", Circle.calculateArea(10))



// lesson 39
// abstract class Employee {
//     constructor(private firstName: string, private lastName: string) {

//     }
//     abstract getSalary(): number

//     get fullName(): string {
//         return `My name is: ${this.firstName} ${this.lastName}`
//     }

//     compensationStatement(): string {
//         return `${this.fullName} earns ${this.getSalary()} a month`
//     }
// }

// class FullTimeEmployee extends Employee {
//     constructor(firstName: string, lastName: string, private salary: number) {
//         super(firstName, lastName) // super dung de ke thua tu class cha
//     }
//     getSalary(): number {
//         return this.salary
//     }
// }

// class Contractor extends Employee {
//     constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
//         super(firstName, lastName)
//     }
//     getSalary(): number {
//         return this.rate * this.hours
//     }
// }
// const test1 = new FullTimeEmployee('Dat', 'Le', 10000)
// const test2 = new Contractor('Dat', 'Le', 100, 160)
// console.log(">>test1: ", test1.getSalary())
// console.log(">>test2: ", test2.getSalary())
