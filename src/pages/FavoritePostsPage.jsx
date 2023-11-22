import React, { useEffect, useState } from 'react'
import { Navbar } from '../router/Navbar'
import { PostCardFav } from '../components/PostCardFav';

export const FavoritePostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let favoritesArray = JSON.parse(localStorage.getItem('favorites'));
    setPosts(favoritesArray);

}, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="row rows-cols-1 row-cols-md-4">
          {posts.map((post) => (
            <PostCardFav key={post.id} title={post.title} id={post.id} body={post.body} setPosts={setPosts} />
          ))}
        </div>
      </div>
    </>
  );
}
