import React from "react";
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';

function VolumeBar({ value, onChange, setVolume }) {
  return (
    <div className="flex items-center">
      {value <= 1 && value > 0.5 && <BsFillVolumeUpFill size={25} color="#FFF" onClick={() => setVolume(0)} />}
      {value <= 0.5 && value > 0 && <BsVolumeDownFill size={25} color="#FFF" onClick={() => setVolume(0)} />}
      {value === 0 && <BsFillVolumeMuteFill size={25} color="#FFF" onClick={() => setVolume(1)} />}

      <input 
        type="range" 
        step="any" 
        className="w-32 h-1 ml-4" 
        min="0" 
        max="1" 
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default VolumeBar;
