function register()
{
    setTimeout(() => {
        console.log("register here");
    }, 5000);
    
    
}
function login()
{
   setTimeout(() => {
    console.log("login here");
   }, 4000);
    
    
}
function getData()
{
    setTimeout(() => {
    console.log("fetch data");
   }, 3000);
    
    
}
function displayData()
{
     setTimeout(() => {
    console.log("display data");
   }, 3003);
    
    
    
}

register();
login();
getData();
displayData()
console.log("call another app");
