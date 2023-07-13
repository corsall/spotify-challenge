import React from 'react'

function Seekbar({value, max, onInput}) {
  return (
    <div className='absolute top-0 w-full group'>
      <input
        className={'seekbar w-full z-40 mt-[-17px]'}
        type="range"
        step="any"
        value={value}
        onInput={onInput}
        min={0}
        max={max}
      />

      {/* 99.3694 - taking into account the thumb*/}
      <div className={`absolute z-10 bg-[#FF0000] left-0 h-[2px] top-0 pointer-events-none group-hover:h-[4px]`} style={{width: `${(value * 99.3694) / max}%`}}> 
      </div>
    </div>
  )
}

export default Seekbar