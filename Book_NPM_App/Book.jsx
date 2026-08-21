function Book({props}) {
    return(
        <div className="card">
        <img src= {props.image} width="130px" height="150px"/>
        <h2>Price : ₹{props.price}</h2>
        <button>Add to Cart</button>
        </div>
    )
}

export default Book;