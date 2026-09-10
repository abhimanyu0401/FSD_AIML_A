import image from "../assets/react.svg"
import "./item.css"

const Items = ({props}) => {
  return (
    <div className='card'>
      <img src ={props.images[0]} width={100} height={100} alt='Item image'/>
      <h2>Title : {props.title}</h2>
      <h3>Price: ₹{(props.price*100).toFixed(2)}/-</h3>
      <button className="btn">Add To Cart</button>
    </div>
  )
}

export default Items
