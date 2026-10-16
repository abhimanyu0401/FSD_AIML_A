import { useContext } from "react";
import UserContext from "../components/UserContext"
import Header from "../components/Header";

const UserLayout = () =>
{
    const {user} = useContext(UserContext);
    return (
        <div>
            <Header/>
            <h1>User Dashboard</h1>
            <h2>Welcome {user.name} {user.role}</h2>
            
            <Footer/>
        </div>
    )
}

export default UserLayout