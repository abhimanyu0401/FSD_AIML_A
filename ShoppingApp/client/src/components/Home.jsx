import React from 'react'
import Items from './Items'

const Home = () => {
    const itemData=[
        {image : "", title : "ReactJS" , price: 999},
        {image : "", title : "NodeJS" , price: 999},
        {image : "", title : "ExpressJS" , price: 999},
        {image : "", title : "ReactJS" , price: 999},
        {image : "", title : "NodeJS" , price: 999},
        {image : "", title : "ExpressJS" , price: 999}
    ]
  return (
    <div className='home' >
     {
        itemData.map((item,index)=>{
            return <Items key={index} props={item} />
        })
     }
    </div>
  )
}

export default Home
