/* This function is supposed to receive an array of single numbers, 
but treat the array as a full number and add 1 to the last digit of array*/
function plusOne(Array) {
    //counts length of the array
    l = Array.length;
    //to know the last digit of the array
    LastDigit = Array[l - 1];
    //replaces the last digit of the array with add 1
    Array.splice(-1, 1, LastDigit + 1);
    return Array;
}
console.log(plusOne([1, 2, 3, 4, 5]));