// Polyfill of map function 
function map(array, condition) {
    const NewArray = []
        //runs for each item in array
    for (let item of array) {
        //pushes item in new array after performing given condition
        NewArray.push(condition(item));
    }
    return NewArray;
}

function condition(number) {
    return number * 2;
}

console.log(map([1, 2, 3, 4, 5], condition));