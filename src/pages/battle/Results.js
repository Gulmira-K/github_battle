import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import qs from 'query-string';
import {getBattleInfo} from "../../api/getBattleInfo";
import Player from './Player';

const Results = (props) => {
  const [winner, setWinner] = useState(null);
  const [loser, setLoser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const { playerOneName, playerTwoName } = qs.parse(props.location.search);
    
    getBattleInfo([playerOneName, playerTwoName])
      .then(players => {
        setWinner(players[0]);
        setLoser(players[1]);
        setLoading(false);
        setError(null)
      })
      .catch(() => {
        setLoading(false);
        setError('It was an error. Check both users!');
   
      })
  }, [])

  if(loading) {
    return (
      <div className='loader'>
        <Loader
          type="TailSpin"
          color="#d0021aaf"
          height={100}
          width={100}
          timeout={1000} //3 secs
        />
      </div>
    )
  }

  if(error) {
    return (
      <div>
        <p>{error}</p>
        <Link to='/battle'>Reset</Link>
      </div>
    )
  }

  return (
    <div className='row'>
      <Player
        label='Winner'
        profile={winner.profile}
        score={winner.score}
      />
      <Player
        label='Loser'
        profile={loser.profile}
        score={loser.score}
      />
    </div>
  )
}

export default Results
