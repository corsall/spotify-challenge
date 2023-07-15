import React from 'react'

function DetailsHeader({songData, artistData}) {
  console.log(artistData);
  return (
    <div className='flex items-center mt-12 mb-20 max-w-lg'>
      <img alt = "profile" src= {artistData ? artistData?.data[0]?.attributes?.artwork?.url.replace('{w}x{h}bb.jpg', '400x400bb.webp' ) : songData?.images?.coverart} className='w-28 h-28 rounded-full shadow-black border-2 object-contain'/>

      <div className='ml-5'>
        <p className='font-bold text-white text-xl'>
          {artistData ? artistData?.data[0]?.attributes?.name : songData?.title}
        </p>
        {!artistData && (
          <p className="text-base text-gray-400 mt-1">
            {songData?.subtitle}
          </p>
        )}
        <p className="text-base text-gray-400 mt-2">
          {artistData ? artistData?.data[0]?.attributes?.genreNames[0] : songData?.genres?.primary}
        </p>
      </div>
    </div>
  )
}

export default DetailsHeader