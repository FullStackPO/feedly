import { getFeed, createPost } from "../services/post.api";
import { useContext, useEffect } from "react";
import { PostContext } from "../Post.context";

export const usePost = () => {

    const context = useContext(PostContext)

    const {loading, setLoading, feed, setFeed, post, setPost} = context

    const handleFeed = async() =>{
        setLoading(true)
        const data = await getFeed()
        setFeed(data.posts)
        setLoading(false)
    }

    const handleCreatePost = async(imageFile, caption) =>{
        setLoading(true)
        const data = await createPost(imageFile, caption)
        setFeed(data.posts)
        setLoading(false)
    }

    useEffect(()=>{
        getFeed()
    }, [])

    return {loading, feed, post, handleFeed, handleCreatePost}
}