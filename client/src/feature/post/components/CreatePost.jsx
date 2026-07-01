import React, {useState, useRef} from 'react'
import { usePost } from '../hooks/post.hook'
import { useNavigate } from 'react-router'
import "../styles/createpost.scss"

const CreatePost = ({user}) => {

  const navigate = useNavigate()

  const [caption, setCaption] = useState('')
  const postImageRef = useRef()

  const { loading, handleCreatePost } = usePost()

  const submitHandler = (e) =>{
    e.preventDefault();

    const file = postImageRef.current.files[0]
    handleCreatePost(file, caption)
    navigate('/')
  }

  if(loading){
    return(
      <main>
        <h1>Uploading...</h1>
      </main>
    )
  }

  return (
    <main>
        <form onSubmit={submitHandler}>  
            <div>
                <div className='cpn'>
                  <button onClick={()=>{navigate('/')}}>Back</button>
                  <h1>Create Post</h1>
                </div>

                <label htmlFor="postImage">Select Image</label>
                <input 
                ref={postImageRef}
                type="file"
                id='postImage'
                name='postImage'
                required />

                <label htmlFor="caption">Caption</label>
                <input 
                value={caption}
                onChange={(e)=>{setCaption(e.target.value)}}
                id='caption'
                type="text"
                placeholder='Enter Caption'
                name='caption'
                />

                <button>Upload</button>

            </div>
        </form>
    </main>
  )
}

export default CreatePost
