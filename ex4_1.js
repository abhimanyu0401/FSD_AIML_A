// array destructuring
const nums = [1,2,3,4,5];

// without destructuring
// const b = nums[0];
// const c = nums[1];   

 // using destructuring
const [b,c] = nums   

console.log("b = ",b);
console.log("c = ",c);


// object destructuring
const student = {
    name:"Abhimanyu",
    age: 21,
    branch:"AI ML"
};

// without destructuring
// const name = student.name;
// const age = student.age;
// const branch = student.branch;

// using destructuring
const {name,age,branch} = student;

console.log("Name = ",name);
console.log("Age = ",age);
console.log("branch = ",branch);


