import Image from 'next/image'
import React from 'react'

function ScreenShot(props) {
  return (
    <div className="bg-gray-600 bg-opacity-30 relative overflow-hidden w-full h-full">
      <div>
        <Image 
        className="" 
        layout="responsive" priority="true" objectFit="cover" src={props.screenshot} height={100} width={200}/>
        </div>
    </div>
  )
}

export default ScreenShot