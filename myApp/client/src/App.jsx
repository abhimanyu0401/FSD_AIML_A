import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import UserLayout from "./pages/UserLayout"
import UserContext from "./components/UserContext"
import AdminLayout from "./pages/AdminLayout"
import "./App.css"
const App = () => {
  const user={
    name:"Abhimanyu",
    role:"Admin"
  }
  return (
    <div>
      <UserContext.Provider value={{user}}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/user" element={<UserLayout/>} />
          <Route path="/admin" element={<AdminLayout/>} />
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
};

export default App
