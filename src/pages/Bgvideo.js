import React from 'react'
import video from '../image_video/videos/video1.mp4'

function Bgvideo() {
  return (
    <div className='object-cover'>
        <video autoPlay loop muted>
            <source src={video} type='video/mp4' />
        </video>
    </div>
  )
}

export default Bgvideo