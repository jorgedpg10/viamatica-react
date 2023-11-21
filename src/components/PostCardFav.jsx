import React from 'react'

export const PostCardFav = ({title, id, body, setPosts}) => {
  
  const handleUnfavorite = () => {
    let favoritesArray = JSON.parse(localStorage.getItem('favorites')); 
    let slicedArray = sliceArrayById(favoritesArray, id);
    localStorage.setItem('favorites', JSON.stringify(slicedArray));
    setPosts(slicedArray);
  }

  function sliceArrayById(arr, idToRemove) {
    return arr.filter(item => item.id != idToRemove);
}

  return (
      <div className="card m-3">
        <div className="card-header">{title}</div>
        <div className="card-body">
          <p className="card-text">{body}</p>
        </div>
        <button onClick={handleUnfavorite} className="btn btn-danger mb-2">Quitar de Destacados</button>
        <div className="card-footer text-muted text-center">Id: {id}</div>
      </div>
  );
}
