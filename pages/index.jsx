import React from 'react'
import dynamic from "next/dynamic";

const BoardGameSSR = dynamic(() => import("./../components/canvas/Board"), {
  ssr: false,
});


export default function index() {
    
    return (
        <div className='w-full min-h-screen'>
                   <BoardGameSSR />
        </div>
    )
}
