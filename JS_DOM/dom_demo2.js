const data = [
    { image :"https://th.bing.com/th/id/OIP.WyPGTyB7Z1s3KTmJ6Kr6EwHaLG?w=202&h=303&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" , price : "500₹"},
    { image :"https://th.bing.com/th/id/OIP.XRtEKzSgEky4KI3PE0yDIAHaJI?w=202&h=249&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" , price : "600₹"},
    { image :"https://th.bing.com/th/id/OIP.g80TiZou2Bb3q9k5eZ-5RAAAAA?w=202&h=249&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" , price : "700₹"},
    {image : "https://th.bing.com/th/id/OIP.EifZCVDCulTEU8xY4QX1hQHaKl?w=202&h=288&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" , price : "1000₹"}
]
function book(props)
{
   const child = document.createElement("div");
   child.setAttribute("class","card");
   const img = document.createElement("img");
   const h2 = document.createElement("h2");
   h2.innerText=`Price : ${props.price}`;
   console.log(props.price);
   
   child.appendChild(img);
   child.appendChild(h2);
   img.setAttribute("src",props.image)
   img.setAttribute("class","img")
   return child;
}
function getBook() {
const parent = document.getElementById("book");
for (const i of data) { 
    parent.appendChild(book(i));
}
}