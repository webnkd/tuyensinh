import React from 'react'
import anh1 from "../image_video/images/anh1.jpg"

function Bganh() {
  return (
    <div className=" bg-cover bg-no-repeat w-full h-screen absolute z-0">
      <img src={anh1} alt="hinh1"></img>
    </div>
  )
}

export default Bganh