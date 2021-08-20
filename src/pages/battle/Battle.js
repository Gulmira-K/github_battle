import { useState } from "react";
import { Link } from "react-router-dom";
import PlayerInput from "./PlayerInput";
import PlayerPreview from "./PlayerPreview";

const Battle = () => {
  const [playerOneName, setPlayerOneName] = useState('');
  const [playerTwoName, setPlayerTwoName] = useState('');
  const [playerOneImage, setPlayerOneImage] = useState(null);
  const [playerTwoImage, setPlayerTwoImage] = useState('');

  const onSubmitHandler = () => {
    
  }

  const handleReset =()=> {
       
  }

  return (
    <div>
    <div className='row'>
      {!playerOneName ?
        <PlayerInput
          id='playerOne'
          label='Player 1'
          onSubmit={onSubmitHandler}
        /> :
        <PlayerPreview
          avatar={playerOneImage}
          username={playerOneName}
        >
          <button className='reset' onClick={() => handleReset('playerOne')}>Reset</button>
        </PlayerPreview>
      }
      {!playerTwoName ?
        <PlayerInput
          id='playerTwo'
          label='Player 2'
          onSubmit={onSubmitHandler}
        /> :
        <PlayerPreview
          avatar={playerTwoImage}
          username={playerTwoName}
        >
          <button className='reset' onClick={() => handleReset('playerTwo')}>Reset</button>
        </PlayerPreview>
      }
    </div>
      {playerOneImage && playerTwoImage &&
        <Link className='button' to={{
          pathname: this.props.match.url + '/results',
          search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
        }}>
          Battle
        </Link>
      }
    </div>
  )
}


export default Battle
