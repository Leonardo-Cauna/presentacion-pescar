import Link from "next/link"
export default function PresentationCard ( props ){
return(
    <div className="border-8 hover:border-t4 border-red-600 rounded-3xl w-96 h-48 items-center">
        <div className="m-5 flex align-middle justify-center">
            <div className="flex flex-col justify-center">
                <Link href={props.link1} target="_blank">
                    <img src={props.imagen} alt="" className="w-20 h-20 rounded-full m-auto"/>
                </Link>
                <h5 className="bg-red-600 text-cyan-50 rounded-lg text-center object-contain border-red-600 border-2">{props.nombre}</h5>
            </div>
            <p className="font-extrabold align-middle h-12 m-auto text-center object-center">Sala N°{props.id}</p>   
            <div className="flex flex-col justify-items-center">
                <Link href={props.link2} target="_blank">
                    <img src={props.imagen_mentor} alt="" className="w-20 h-20 rounded-full m-auto"/>
                </Link>
                <h5 className="bg-red-600 text-cyan-50 rounded-lg text-center object-contain border-red-600 border-2">{props.mentor}</h5> 
            </div>
        </div>
         
    </div>
)
}