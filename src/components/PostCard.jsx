import React from 'react'

export const PostCard = ({title, body, id}) => {
  return (
      <div className="card m-3">
        <div className="card-header">{title}</div>
        <div className="card-body">
          <p className="card-text">{body}</p>
        </div>
        <button className="btn btn-primary mb-2">Agregar a Destacados</button>
        <div className="card-footer text-muted text-center">Id: {id}</div>
      </div>
  );
}
