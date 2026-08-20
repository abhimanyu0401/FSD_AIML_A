const data = [
    { image :"https://th.bing.com/th/id/OIP.WyPGTyB7Z1s3KTmJ6Kr6EwHaLG?w=202&h=303&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" , price : "500₹"},
    { image :"https://th.bing.com/th/id/OIP.XRtEKzSgEky4KI3PE0yDIAHaJI?w=202&h=249&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" , price : "600₹"},
    { image :"https://th.bing.com/th/id/OIP.g80TiZou2Bb3q9k5eZ-5RAAAAA?w=202&h=249&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" , price : "700₹"},
    {image : "https://th.bing.com/th/id/OIP.EifZCVDCulTEU8xY4QX1hQHaKl?w=202&h=288&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" , price : "1000₹"}
]
function book(props)
{
   const image = React.createElement("img",{src:props.image,width:"150px",height:"150px"},null);
   const h2 = React.createElement("h2",{},"Price :"+props.price);
   const bt = React.createElement("button",{onClick : ()=>addToCart(props)},"Add To Cart");
   const div = React.createElement("div",{className:"card"},[image,h2,bt]);
   return div;
}
const cart = [];
function viewCart()
{
    if(cart.length==0)
    {
     const h2 = React.createElement("h2",{},"Cart is Empty");
     const parent = ReactDOM.createRoot(document.getElementById("cart"));
     parent.render(h2);
    }
    else{
        const h2 = React.createElement("h2",{},cart.length);
     const parent = ReactDOM.createRoot(document.getElementById("cart"));
     parent.render(h2);
    }
}
function addToCart(data)
{
    cart.push(data);
    console.log("Data added in cart :" , data);
    alert("book added succesfully!");
}
const books = data.map((b)=>(
    book(b)
))
const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);
root.render(books);
