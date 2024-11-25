import React from 'react'
import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className='h-screen flex items-center justify-center'>
      <LoaderCircle className='w-10 h-10 animate-spin'/>
    </div>
  )
}
