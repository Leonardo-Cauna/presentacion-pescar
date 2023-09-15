"use client"
// import React, {useState} from 'react'
import Nombres from "../app/Nombres.json"
import PresentationCard from './Card'
import SCstyle from './scStyle.css'
import React, { useEffect, useRef, useState } from "react";

  
const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
      const scrollObserver = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
              setIsVisible(true);
              scrollObserver.unobserve(entry.target);
          }
      });

      scrollObserver.observe(ref.current);

      return () => {
          if (ref.current) {
              scrollObserver.unobserve(ref.current);
          }
      };
  }, []);

  const classes = `transition-opacity duration-1000 
      ${isVisible ? "opacity-100" : "opacity-0"
      }`;

  return (
      <div ref={ref} className={classes}>
          {children}
      </div>
  );
};



export default function ShowCards ({buscador}){

return(
  <div className="filas">
    {Nombres.filter((personas)=>{
      return buscador.toLowerCase() === '' ? personas : personas.nombre.toLowerCase().includes(buscador) || personas.nombre_mentor.toLowerCase().includes(buscador)
    }).map ((personas, id) => {
      return(
        <RevealOnScroll>
          <PresentationCard key={id} nombre={personas.nombre} mentor={personas.nombre_mentor} imagen={personas.imagen} link1={personas.link1} link2={personas.link2} imagen_mentor={personas.imagen_mentor} id={personas.id}/>
        </RevealOnScroll>
        )
    })}
  </div>
)}
        // <div className="carousel-item">
        // </div>