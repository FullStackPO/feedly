import React from 'react'
import AppRoutes from './AppRoute'
import './style.scss'
import { AuthProvider} from './feature/auth/Auth.context'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  )
}

export default App
