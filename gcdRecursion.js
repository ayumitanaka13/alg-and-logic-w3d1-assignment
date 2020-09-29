// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers 
//using recursion. 

const gcdRecursive = function(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);

    if (max % min === 0) {
        return min;
    } else {
        let remainder = max % min;
        return gcdRecursive(min, remainder);
    }
}        

console.log(gcdRecursive(15, 60)); //15