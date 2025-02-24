//a function which return a anonymous function is called a closure

function times(num){
    return function(x){
        return x*num;
    }
}

double = times(2);
console.log(double(5)); // Output: 10

triple = times(3);
console.log(triple(5)); // Output: 15