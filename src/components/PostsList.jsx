import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { PostCard } from './PostCard';


const endpoint = 'https://jsonplaceholder.typicode.com' // se que esto debería ir en una variable de entorno (env), pero por cuestiones de tiempo lo dejo aquí
export const PostsList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts()   
    
    }, []);

    const getAllPosts = async () => { 
        const response = await axios.get(`${endpoint}/posts`);
        console.log(response.data);
        setPosts(response.data)
    }

  return (
      <>
          <div className="col-8">
              <div className='row rows-cols-1 row-cols-md-3 g-3'>
                  {
                      posts.map(post => (
                          <PostCard key={post.id}
                          { ...post} />
                      ))
                  }
              </div>
          </div>
    </>
  )
}
