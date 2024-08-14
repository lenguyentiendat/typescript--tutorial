enum API_STATUS {
    PENDING = "PENDING", // 0
    FULFILLED="FULLFILLED", // 1
    REJECTED= "REJECTED" // PROMISE
}

let a = API_STATUS.PENDING
let a2 = API_STATUS.FULFILLED
console.log(">>>check a: " , a, ">>check a2: ", a2) // 0 1
