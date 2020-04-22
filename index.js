// Write your solution in this file!
let driver = {}

let updateDriverWithKeyAndValue = (driver, key, value) => {
    return Object.assign({}, driver, {[key]: value})
}

let destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
    return Object.assign(driver, {[key]: value})
}

let deleteFromDriverByKey = (driver, key) => {
    let obj = Object.assign({}, driver)
    delete obj[key]
    return obj
}

let destructivelyDeleteFromDriverByKey = (driver, key) => {
    let obj = Object.assign(driver)
    delete obj[key]
    return obj
}