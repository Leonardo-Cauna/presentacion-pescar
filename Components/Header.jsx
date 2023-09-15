"use client"
import { useState } from "react"

export default function HeaderMentoring(){
    

    
return(
<div className="h-16 w-full bg-white border-b-2 border-neutral-500 flex justify-between fixed top-0 z-10">
    <div className="flex justify-start">
        <img src="../santander.png" alt="" className="object-scale-down w-16 h-16 ml-3"/>
        <img src="../compromiso.svg" alt="" className="object-cover w-32 h-16"/>
    </div>
    <input type="search"  name="" id="buscador" className="my-auto align-middle input input-bordered w-full max-w-xs h-10 focus:invalid outline outline-1 outline-slate-950"/>
    <img src="https://i0.wp.com/www.pescar.org.ar/wp-content/uploads/2021/10/logo-newsletter-pescar.png?resize=200%2C96&ssl=1" alt="" className="mr-3 object-cover w-32 h-16"/>
</div>
)}