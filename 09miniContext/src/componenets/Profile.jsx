import react , { useContext } from 'react'
import  userContext from "../context/userContext.js";

function Profile() {
    const {user} = useContext(userContext)
    if(!user){
        return(
            <div>
                <h2>Please login to view your profile</h2>
            </div>
        )
    }
   
    return(
        <div>
            <h2> WELCOME TO YOUR PROFILE :{user.userName}</h2>
        </div>
    )
}

export default Profile