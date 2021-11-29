// Return 3 Times

// Create a function that takes arguments in this format    ret3x(a1, b1)(a2, b2)(a3, b3)
// And returns the result (a1*a2*a3)+(b1*b2*b3)
// example:  ret3x(1,2)(1,2)(3,4) = 19
// example:  ret3x(1,2)(0,1)(0,5) = 10

function ret3x(a1,b1){
    return function (a2, b2){
        return function (a3, b3){
            return (a1*a2*a3)+(b1*b2*b3);
        }
    }
}
