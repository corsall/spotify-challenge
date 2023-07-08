import React, { useRef } from 'react'
import { useSelector } from 'react-redux'

function Player() {

  const { activeSong} = useSelector((state) => state.player);
  // eslint-disable-next-line no-unused-expressions

  {console.log(activeSong?.hub?.actions[1]?.uri)}
  return (
    <audio
      className='w-full'
      controls
      src={activeSong?.hub?.actions[1]?.uri}
      autoPlay
    />
  )
}

export default Player