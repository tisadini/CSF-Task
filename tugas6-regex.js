function validateTime(time) {
    res = /^(?:0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]\s?/.test(time) 
    return res
}

console.log(validateTime('01:00'), true)
console.log(validateTime('1:00'), true)
console.log(validateTime('00:00'), true)
console.log(validateTime('13:1'), false)
console.log(validateTime('12:60'), false)