
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
export const AppContext = createContext();



const AppProvider = ({ children }) => {


    const [token, setToken] = useState(localStorage.getItem('token')  ? localStorage.getItem('token') : "")
   

    console.log(token ,"token in app provider")

    const [user, setUser] = useState(null)


    const backendUrl = "http://localhost:3000"
    const value  ={
        // your values here
        backendUrl,
        token, setToken,
        user ,setUser
    }




    async function getprofile() {
        try {
            const {data} = await axios.get(`${backendUrl}/api/users/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })

            console.log(data)
            if (data.success) {
                setUser(data.user)
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        if(token){
            getprofile()
        }
    },[token])




    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}


export default AppProvider;