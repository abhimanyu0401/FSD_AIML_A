function register(cb)
{
    setTimeout(() => {
        console.log("register here");
        cb();
    }, 5000);
    
    
}
function login(cb)
{
   setTimeout(() => {
    console.log("login here");
    cb();
   }, 4000);
    
    
}
function getData(cb)
{
    setTimeout(() => {
    console.log("fetch data");
    cb();
   }, 3000);
    
    
}
function displayData()
{
     setTimeout(() => {
    console.log("display data");
   }, 3003);
    
    
    
}

register(()=>{
         login(()=>{
            getData(()=>{
                displayData();
            })
         })
});


console.log("call another app");
