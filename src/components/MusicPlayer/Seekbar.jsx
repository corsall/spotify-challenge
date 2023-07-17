import React, { useState } from 'react'

function Seekbar({value, max, onInput}) {
  const [position, setPosition] = useState(0);
  const [spanTime, setSpanTime] = useState('0:00');

  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  const handleTimeSpan = (event) => {
    console.log(event.target.clientWidth);
    const width = event.clientX / event.target.clientWidth;
    if(event.clientX > 15 && event.clientX < event.target.clientWidth - 20)
    {
      setSpanTime(getTime(max * width));
      setPosition(event.clientX);
    }
  }

  return (
    <div className='absolute top-0 w-full group'>
      <div className='relative'>
        <input
          className={'seekbar w-full z-40 mt-[-17px] group'}
          type="range"
          step={1}
          value={Math.floor(value)}
          onInput={onInput}
          min={0}
          max={max}
          onMouseMoveCapture={handleTimeSpan}
        />
        <span className='absolute mt-[-40px] ml-[-15px] top-0 text-white z-50 text-sm bg-[#212121] rounded px-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100' style={{left : `${position}px`}}>{spanTime}</span>
      </div>

      {/* 99.3694 - taking into account the thumb*/}
      <div className={`absolute z-10 bg-[#FF0000] left-0 h-[2px] top-0 pointer-events-none group-hover:h-[4px] transition-width`} style={{width: `${(Math.floor(value) * 99.3694) / max}%`}}> 
      </div>

    </div>
  )
}

export default Seekbar