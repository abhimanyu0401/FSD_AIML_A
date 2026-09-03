import image from "../assets/react.svg"
import "./item.css"

const Items = ({props}) => {
  return (
    <div className='card'>
      <img src ={image} width={100} height={100} alt='Item image'/>
      <h2>Title : {props.title}</h2>
      <h3>Price: ₹{props.price}/-</h3>
      <button className="btn">Add To Cart</button>
    </div>
  )
}

export default Items
