import { useContext } from "react";
import UserContext from "../components/UserContext"
import Header from "../components/Header";

const AdminLayout = () =>
{

    const {user} = useContext(UserContext);
    return (
        <div>
            <Header/>
            <h1>Welcome {user.name} ({user.role})</h1>  
            <Footer/>  
        </div>
    )
}

export default AdminLayout
