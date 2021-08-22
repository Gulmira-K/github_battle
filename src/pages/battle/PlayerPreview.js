import React from 'react'

const PlayerPreview = ({avatar, username, children}) => {
  return (
    <div>
      <img className='avatar' src={avatar} alt={`Avatar for ${username}`} />
      <h2 className='username'>{username}</h2>
      {children}      
    </div>
  )
}

export default PlayerPreview
