import React from "react";
import { IoVolumeHighSharp, IoVolumeMediumSharp, IoVolumeMuteSharp } from "react-icons/io5";

function VolumeBar({ value, onChange, setVolume }) {
  return (
    <div className="flex items-center group h-[72px]">
      <input
        type="range"
        step="any"
        className="flex volume w-16 xl:w-32 h-1 mr-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100 my-8 ml-6 z-50"
        min="0"
        max="1"
        value={value}
        onChange={onChange}
        style={{ background: `linear-gradient(to right, white 0%, white ${value * 100}%, #909090 ${value * 100}%, #909090 100%` }}
      />

      <div className="group-hover:flex">
        {value <= 1 && value > 0.5 && <IoVolumeHighSharp size={25} color="#909090" onClick={() => setVolume(0)} />}
        {value <= 0.5 && value > 0.01 && <IoVolumeMediumSharp size={25} color="#909090" onClick={() => setVolume(0)} />}
        {value < 0.01 && <IoVolumeMuteSharp size={25} color="#909090" onClick={() => setVolume(1)} />}
      </div>
    </div>
  );
}

export default VolumeBar;
