import Image from 'next/image'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
   
import React from 'react'

export default function Popup() {
  return (
    <>
    <Popover>
        <PopoverTrigger>
          <Image src="/logo-shield.png" alt="Logo" width="70" height="50" />
          Arden Choi
        </PopoverTrigger>
        <PopoverContent>
          <Image src="/logo-simple.png" alt="Logo" width="250" height="64" />
          About me
        </PopoverContent>
    </Popover>

    </>
  )
}
