"use client"
// import React, {useState} from 'react'
import Nombres from "../app/Nombres.json"
import PresentationCard from './Card'

function CardPar(personas){
  if(personas.id % 2 === 0)
  {
    return(
      <PresentationCard nombre={personas.nombre_completo} mentor={personas.nombre_mentor} imagen={personas.imagen} imagen_mentor={personas.imagen_mentor} id={personas.id}/>
    )
  }
}

function CardInpar(personas){
  if(personas.id % 2 !== 0)
  {
    return(
      <>
        <PresentationCard nombre={personas.nombre_completo} mentor={personas.nombre_mentor} imagen={personas.imagen} imagen_mentor={personas.imagen_mentor} id={personas.id}/>
      {/* <div className="divider divider-horizontal w-9 h-12"></div> */}
      </>
      
    )
  }
}

function item(){
  if(num%2 === 0)
  {
    return(
      <div className="carousel-item">
        
      </div>
    )
  }
  else if(num%2 !== 0)
  {
    return(
      <div className="carousel-item">
        
      </div>
    )
  }
}

export default function ShowCards (){
return(
  <div className="h-72 w-1/3 carousel carousel-vertical">
    {Nombres.map (personas =>{
      return(
        <div className="carousel-item">
          {CardInpar(personas)}
          {CardPar(personas)}
        </div>
          )})}
  </div>
)}