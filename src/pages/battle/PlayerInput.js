import { useState } from 'react';

const PlayerInput = ({ onSubmit, id, label }) => {
  const [username, setUsername] = useState('')

  const handleChange = (e) => {
    setUsername(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(id, username);
  }

  return (
    <form className='column' onSubmit={handleSubmit}>
      <label className='header' htmlFor="username">{label}</label>
      <input
        type="text"
        placeholder='GitHub Username'
        id='username'
        autoComplete='off'
        onChange={handleChange}
        value={username}
      />
      <button
        className='button'
        type='submit'
        disabled={!username}
      >
        Submit
      </button>
    </form>
  )
}

export default PlayerInput
