import { createBrowserRouter } from 'react-router'
import Login from '../src/feature/auth/pages/Login'
import Register from '../src/feature/auth/pages/Register'

export const router = createBrowserRouter([
    {
        path : '/login',
        element : <Login/>
    },
    {
        path : '/register',
        element : <Register />
    },
    {
        path : '/',
        element : <h1>Hello User</h1>
    }
])