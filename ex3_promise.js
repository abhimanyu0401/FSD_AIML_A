function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log("register here");
            
        }, 5000);
        
    })

}
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log("login here");
        }, 4000);
    })



}
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log("fetch data");
        }, 3000);
    })



}
function displayData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log("display data");
        }, 3003);
    })



}

// using callback
// register(() => {
//     login(() => {
//         getData(() => {
//             displayData();
//         })
//     })
// });

// using promises
// register().then(login)
//           .then(getData)
//           .then(displayData)
//           .catch((err)=>{
//             console.log("Error,err");
//           })

// using async await
async function test(){
    try{
         await register();
         await login();
         await getData();
         await displayData();
    }
    catch(err){
        console.log("Error,err");
    }
} 
test();

console.log("call another app");
