//Polyfill of reduce function
function reduce(array, condition, total = 0) {
    for (let item of array) {
        //store new result in total after performing function
        total = condition(total, item);
    }
    return total;
}

function condition(sum, number) {
    return sum + number;
}

console.log(reduce([1, 2, 3, 4, 5], condition));