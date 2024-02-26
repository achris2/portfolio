import Image from 'next/image'
import React from 'react'
import alexAvatar from "@/public/alex-avatar.jpeg";

export default function Intro() {
  return (
    <section>
        <div className ="flex items-center justify-center">
            <div>
                <Image 
                src= {alexAvatar} 
                alt="Photo of Alex Christakou"  
                quality="100" 
                priority={true}
                className = "h-48 w-48 object-cover rounded-full border-[0.2rem] border-slate-50 shadow-xl"
                />
            </div>
            <span>
            👋
            </span>
        </div>
    </section>
  )
}
