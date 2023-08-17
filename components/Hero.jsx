import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <div id="hero" className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-extrabold text-shadow bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-8 w-full md:max-w-3xl mx-auto break-words">
        UBC BCS Student Association
      </h1>
      <p id='landAcknoledgement' className="w-full md:max-w-3xl mx-auto px-4 text-center">
        <em>
          Land Acknowledgement: We would like to begin by acknowledging that the land on which we gather is the traditional, ancestral, and unceded territory of the xwməθkwəy̓əm (Musqueam) People
        </em>
      </p>
      <Image
        src="/bcsteam.JPG"
        alt="bcs team"
        width={600}
        height={400}
      />
      <p id='disclaimer' className="w-full md:max-w-3xl mx-auto px-4 text-center">
        The Bachelor of Computer Science Students Association (BCSSA) is a student club 
        for students completing their second degree in the Bachelor of Computer Science (BCS) 
        Program at UBC. We are not providing information on the BCS program; 
        we are showcasing the BCS Student Association and how we enhance student life!
      </p>
    </div>

  )
}
