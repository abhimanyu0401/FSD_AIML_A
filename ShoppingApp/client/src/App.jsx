import UserLayout from './pages/UserLayout'
import "./App.css"
import {BrowserRouter, Routes , Route} from "react-router-dom"
import ItemStore from './components/ItemStore'
import { useState } from 'react'
const App = () => {
  const [cart,setCart] = useState([]);
  return (
    <div>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<UserLayout/>}>
         <Route index element={<ItemStore/>}/>
         <Route path="/mycart" element={<h1>My Cart</h1>}/>
         <Route path="/myorders" element={<h1>My Orders</h1>}/>
         <Route path="/settings" element={<h1>Settings</h1>}/>
         <Route path="/profile" element={<h1>My Profile</h1>}/>
         <Route path="/logout" element={<h1>Logout</h1>}/>
         <Route path="*" element={<h1>Error 404 : Page not found </h1>}/>
         </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
