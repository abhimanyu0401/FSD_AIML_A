// in sync programming the functions/code is executed one after the other 
function register()
{
    waitForInput(5000)
    console.log("register here");
    
}
function login()
{
    waitForInput(5000);
    console.log("login here");
    
}
function getData()
{
    waitForInput(4000);
    console.log("fetch data");
    
}
function displayData()
{
    waitForInput(3000);
    console.log("display data");
    
}
function waitForInput(delay)
{
    const ct = Date.now();
    const ms = ct + delay;
    while( Date.now()<ms){

    }
}
register();
login();
getData();
displayData()
console.log("call another app");
