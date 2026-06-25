import React from 'react'
import '../styles/feed.scss'

const Feed = () => {
  return (
    <main className='feed-page'>
        <div className="feed">
            <div className="posts">
                <div className="post">
                    <div className="user">
                        <div className="img-wrapper">
                        <img src="https://images.unsplash.com/photo-1773332598414-44a45e364d85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D" alt="" srcset="" />
                        </div>
                        <p>Username</p>
                    </div>
                    <img src="https://images.unsplash.com/photo-1782105208018-b4b9181d8ddc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" alt="" srcset="" />
                    <div className="bottom">
                        <p className="caption">Test Caption</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Feed
