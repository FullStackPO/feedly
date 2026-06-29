import React, {useState, useRef} from 'react'

const CreatePost = ({user}) => {

  const [caption, setCaption] = useState('')
  const postImageRef = useRef()

  const submitHandler = (e) =>{
    e.preventDefault();
  }

  return (
    <main>
        <form onSubmit={submitHandler}>  
            <div>
                <h1>Create Post</h1>

                <label htmlFor="postImage">Select Image</label>
                <input 
                ref={postImageRef}
                type="file"
                id='postImage'
                name='postImage'
                required />

                <label htmlFor="caption">Caption</label>
                <input 
                onInput={(e)=>{setCaption(e.target.value)}}
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
