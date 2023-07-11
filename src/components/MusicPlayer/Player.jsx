import React, { useEffect, useRef } from 'react'

function Player({activeSong, isPlaying, volume, onTimeUpdate, onLoadedData, seekTime}) {
  const ref = useRef(null);

  if(ref.current){
    if (isPlaying) {
      setTimeout(function() {
        ref.current.play();
    }, 100);
    } else {
      ref.current.pause();
    }
  }

  useEffect(() => {
    ref.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    ref.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <audio
      src={activeSong?.hub?.actions[1]?.uri}
      ref={ref}
      loop={true}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  )
}

export default Player