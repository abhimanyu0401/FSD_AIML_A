const a = [1,2,3,4,5,6,7,8,9];
console.log("Array elements = ",a);

const even = a.filter( (i) => i%2==0 );
console.log("Even numbers = ",even);

const c = even.map( (i) => i*i);
console.log("Square of even numbers = ",c);

const sum  = c.reduce( (i,s) => i+s)
console.log("Sum of squares = ",sum);
