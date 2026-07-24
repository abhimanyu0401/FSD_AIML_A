// question 1
function sum(...nums)
{
//    let sum =0;
//    for(i of nums)
//    {
//      sum += i;
//    }
    const sum = nums.reduce((i,s)=>i+s);
   return sum;

}

console.log("Sum = ", sum(1,2,3,4,5));

// question 2
const student = {
    name:"Abhimanyu",
    age: 21,
    branch:"AI ML"
};
const newStudent = {...student,address:{
    street1 : "Abc",
    street2 : "Xy",
    city : "Noida",
    pincode : "009988"
}};
console.log("Old Student = ",student);
console.log("New Student = ",newStudent);
