import React, { useState } from 'react'

export const PostCard = ({title, id, body, posts}) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleFavorite = () => {
    const removedPost = removeItemById(posts, id);
    let favoritesArray = JSON.parse(localStorage.getItem('favorites')); 
    favoritesArray.push(removedPost[0]);
    localStorage.setItem('favorites', JSON.stringify(favoritesArray));
    setIsClicked(true);

  }

  function removeItemById(arr, idToRemove) {
    return arr.filter(item => item.id == idToRemove);
}

  return (
      <div className="card m-3">
        <div className="card-header">{title}</div>
        <div className="card-body">
          <p className="card-text">{body}</p>
        </div>
        <button onClick={handleFavorite} className={`btn btn-primary mb-2 ${isClicked ? "disabled" : ""}`}>Agregar a Destacados</button>
        <div className="card-footer text-muted text-center">Id: {id}</div>
      </div>
  );
}
