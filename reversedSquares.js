
function reverseInt(val) {
    // Convert to array of chars
    let strArray = (val + "").split("");

    // Reverse, merge, return!
    return Number.parseInt(strArray.reverse().join(""));

    // Ugly 1-liner: return Number.parseInt((val + "").split("").reverse().join(""));
}

function reversedSquares(val) {

}


// Test: 
console.log(reverseInt(441))

reversedSquares(9)
// Expect: true

reversedSquares(441)
// Expect: true

reversedSquares(25)
// Expect: false