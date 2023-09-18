"use client"
// import Image from 'next/image'
// import searchBar from "../Components/ShowCards"
// import PresentationCard from '@/Components/Card'
import ShowCards from '../Components/ShowCards'
import { useState } from 'react'


export default function Home() {
  const [buscador, setBuscador] = useState('')
  return (
    <>
      <div className="h-16 w-full bg-white border-b-2 border-neutral-500/30 flex justify-between items-center fixed top-0 z-10">
        <div className="flex justify-start">
            <img src="../Icons/santander.png" alt="" className="object-scale-down w-16 h-16 ml-3"/>
            <img src="../Icons/compromiso.svg" alt="" className="object-cover w-32 h-16 max-md:hidden"/>
        </div>
        <div>
        <input type="search" value={buscador} onChange={(e)=> setBuscador(e.target.value)} name="" id="buscador1" className="my-auto align-middle input input-bordered w-full max-w-xs h-10 focus:invalid outline outline-1 outline-slate-950" />
        </div>
        <img src="../Icons/logo-newsletter-pescar.webp" alt="" className="mr-3 object-cover w-32 h-16 max-md:hidden"/>
        <img src="../Icons/logo-newsletter-pescar-cortado.png" alt="" className="mx-3 h-16 md:hidden object-contain"/>
      </div>
      <div className='grid h-screen place-items-center items-center max-w-[1920px] w-full mx-auto'>
        <div className='justify-items-center mb-20 mt-40'>
          <h1 className='text-5xl font-semibold w-full text-center'>Bienvenidos al programa de mentoring!</h1>
          <h2 className='text-2xl font-medium w-full text-center mt-4'>Agradecemos su presencia y los invitamos a conocer a sus mentees </h2>
        </div>
      <div className='busc'>
      {/* <input type="search" value={buscador} onChange={(e)=> setBuscador(e.target.value)} name="" id="buscador1" className="my-auto align-middle input input-bordered w-full max-w-xs h-10 focus:invalid outline outline-1 outline-slate-950" /> */}
        <a href="#"><i class="fa-solid fa-magnifying-glass fa-xl"></i></a>
      </div>
        <ShowCards buscador={buscador}/>
      </div>
    </>
  )
}
