import React from 'react'
import { RouterProvider } from 'react-router'
import { router } from './AppRoute'
import './style.scss'
import { AuthProvider} from './feature/auth/Auth.context'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  )
}

export default App
