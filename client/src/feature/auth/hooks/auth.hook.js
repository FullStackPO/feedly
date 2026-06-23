import { useContext } from "react";
import { AuthContext } from "../Auth.context";
import { login, register, getMe } from '../services/auth.api'

export const useAuth = () =>{

    const context = useContext(AuthContext)
    const {user, setUser, loading, setLoading} = context

    //login handle
    const handleLogin = async(username, password) => {

        setLoading(true)
        const response = await login(username, password)
        setUser(response)
        setLoading(false)

    }

    //register handle
    const handleRegister = async(name, contact, email, username, password) => {

        setLoading(true)
        const response = await register(name, contact, email, username, password)
        setUser(response)
        setLoading(false)

    }

    return{ user, loading, handleLogin, handleRegister}
}