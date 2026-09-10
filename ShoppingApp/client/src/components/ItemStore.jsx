import { useEffect, useState } from 'react'
import Items from './Items'

const ItemStore = () => {
    const[items,setItems] = useState([]);
    useEffect(()=>{
      loadProducts();
    },[])
    async function loadProducts()
    {
      const URL = "https://dummyjson.com/products";
      try{
         const res = await fetch(URL);
         const data = await res.json();
         setItems(data.products);

      }
      catch(err)
      {
          console.log("Error :",err);
      }
    }
  return (
    <div className='home' >
     {
        items.map((item,index)=>{
            return <Items key={index} props={item} />
        })
     }
    </div>
  )
}

export default ItemStore
