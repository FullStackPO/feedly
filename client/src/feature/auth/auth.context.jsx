import { createContext, useState } from "react";
import { login, register } from "./services/auth.api";

export const AuthContext = createContext()

export function AuthProvider({children}){

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    
    //login handler
    async function handleLogin(username, password){
        setLoading(true)

        try{
            const res = await login(username, password)
            setUser(res.data)
            return(res)
        }
        catch(error){
            throw error
        }
        finally{
            setLoading(false)
        }

    }

    //register handler
    async function handleRegister(name, contact, email, username, password){
        setLoading(true)

        try{
            const res = await register(name, contact, email, username, password)
            setUser(res.data)
        }
        catch(error){
            throw error
        }
        finally{
            setLoading(false)
        }
    }

    return(
        <AuthContext.Provider value={{ user, loading, handleLogin, handleRegister}}>
            {children}
        </AuthContext.Provider>
    )

}