//this ol boy adds two values
function add(value1, value2) {
    return (value1 + value2);
}
//thisn subtracts two values
function subtract(value1, value2) {
    return (value1 - value2);
}
//following multiplies two values
function multiply(value1, value2) {
    return (value1 * value2);
}
//and thisn here divides a value by a second value
function divide(value1, value2) {
    return (value1 / value2);
}

//here's a default for n
n = 10

//add 1 to n
function increment(n) {
    return(n += 1 );
}

//snatch 1 from n
function decrement(n) {
    return(n -= 1);
}

//this will make a value into a base 10 integer just for shits
function makeInt(n) {
    return(parseInt(n, 10));
}

//this one will return a float for decimals
function preserveDecimal(n) {
    return(parseFloat(n));

}
