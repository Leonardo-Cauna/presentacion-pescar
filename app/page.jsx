"use client"
import Image from 'next/image'
import searchBar from "../Components/ShowCards"
import PresentationCard from '@/Components/Card'
import ShowCards from '../Components/ShowCards'
import { useState } from 'react'


export default function Home() {
  const [buscador, setBuscador] = useState('')
  return (
    <div className='grid h-screen place-items-center items-center'>
      <div className='justify-items-center mb-20 mt-40'>
        <h1 className='text-5xl font-semibold'>Bienvenidos al programa de mentoring!</h1>
        <h2 className='text-2xl font-medium w-11/12 ml-12 mt-3'>Agradecemos su presencia y los invitamos a conocer a sus mentees </h2>
      </div>
     <div className='busc'>
     <input type="search" value={buscador} onChange={(e)=> setBuscador(e.target.value)} name="" id="buscador1" className="my-auto align-middle input input-bordered w-full max-w-xs h-10 focus:invalid outline outline-1 outline-slate-950" />
      
      <a href="#"><i class="fa-solid fa-magnifying-glass fa-xl"></i></a>
     </div>
      <ShowCards buscador={buscador}/>
    </div>

  )
}
