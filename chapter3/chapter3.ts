//lesson 40
interface IPerson {
    readonly firstName: string //immutable
    lastName?: string
    address: string
}

type Person41 = {
    firstName: string
    lastName: string
}
function getFullName(person: IPerson) {
    person.firstName = 'Van'
    return `${person.firstName} ${person.lastName}`
}

let person2 = {
    firstName: 'Dat',
    lastName: "Le",
    address: "HCM"
}

console.log(getFullName(person2))