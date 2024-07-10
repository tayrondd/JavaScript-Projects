function isEqual(a, b)
{
    return a.join() == b.join();
}
 
//Driver Code
var a = [1, 2, 3, 5];
var b = [1, 2, 3, 5];


console.log(a);
console.log(b);

console.log(a.join());
console.log(b.join());
console.log(isEqual(a, b));