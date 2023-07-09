import React, { useEffect, useRef } from 'react'

function Player({activeSong, isPlaying, volume}) {
  const ref = useRef(null);

  if(ref.current){
    if (isPlaying) {
      setTimeout(function() {
        ref.current.play();
    }, 0);
    } else {
      ref.current.pause();
    }
    // console.log(ref.current);
  }

  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);

  return (
    <audio
      src={activeSong?.hub?.actions[1]?.uri}
      ref={ref}
      loop={true}
    />
  )
}

export default Player