//Polyfill of the filter function
function filter(array, condition) {
    const result = [];
    for (let item of array) {
        //push the item in array if it passes the given condition
        if (condition(item)) {
            result.push(item);
        }
    }
    return result;
}

function condition(number) {
    if (number > 2) {
        return true;
    } else {
        return false;
    }
}

console.log(filter([1, 2, 3, 4, 5, 6, 7], condition));