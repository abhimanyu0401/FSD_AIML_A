import { useContext } from "react"
import UserContext from "./UserContext"
const Footer = ()=>
{
    const {user} = useContext(UserContext);
    return (
        <div className="footer">
            <h1>Design & Develoed by {user.name} &copy; 2026</h1>
        </div>
    )
}

export default Footer