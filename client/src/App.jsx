import React from 'react'
import { RouterProvider } from 'react-router'
import { router } from './AppRoute'
import './style.scss'
import { AuthProvider} from './feature/auth/Auth.context'
import { PostProvider } from './feature/post/Post.context'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <PostProvider>
        <RouterProvider router={router} />
        </PostProvider>
      </AuthProvider>
    </div>
  )
}

export default App
