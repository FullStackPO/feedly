import React from 'react'
import Post from '../components/Post'
import '../styles/feed.scss'
import { usePost } from '../hooks/post.hook'
import { useEffect } from 'react'
import Navbar from '../../../shared/components/Navbar'

const Feed = () => {

  const { feed, loading, handleFeed } = usePost()

  useEffect(()=>{
    handleFeed()
  }, [])

  if(loading || !feed){
    return (
      <main>
        <h1>Feed is Loading...</h1>
      </main>
    )
  }

  console.log(feed);

  return (
    <main className='feed-page'>
      <Navbar />
        <div className="feed">
            <div className="posts">
                {feed.map((posts) => {
                  return <Post key={posts._id} user={posts.user} post={posts} />;
                })}
            </div>
        </div>
    </main> 
  )
}

export default Feed
