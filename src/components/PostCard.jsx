import React from 'react'

export const PostCard = ({title, body, id}) => {
  return (
    <div className='col'>
      <div className='card'>
        <div className='row'>
          <div className='col-16'>
            <h3>{title}</h3>
            {body}
            
            <h4>id del autor:</h4>
            {id}
          </div>
        </div>
      </div>
    </div>
  )
}
