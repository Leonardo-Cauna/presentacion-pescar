import Link from "next/link"
export default function PresentationCard ( props ){
return(
    <div className="border-8 hover:border-t4 border-red-600 rounded-3xl w-full h-48 items-center">
        <div className="mx-5 grid grid-cols-[37.5%_25%_37.5%] align-middle h-full items-center">
            <div className="grid justify-center">
                <div className="flex flex-col w-full">   
                    <Link href={props.link1} target="_blank">
                        <img src={props.imagen} alt="" className="w-20 object-cover h-20 rounded-full m-auto"/>
                    </Link>
                    <h5 className="bg-red-600 text-cyan-50 rounded-lg text-center object-contain border-red-600 border-2">{props.nombre}</h5>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <p className="font-extrabold align-middle h-12 m-auto text-center object-center">Sala N°{props.id}</p>   
            </div>
            <div className="grid justify-items-center">
                <div className="flex flex-col w-full">
                    <Link href={props.link2} target="_blank">
                        <img src={props.imagen_mentor} alt="" className="w-20 h-20 object-cover rounded-full m-auto"/>
                    </Link>
                    <h5 className="bg-red-600 text-cyan-50 rounded-lg text-center object-contain border-red-600 border-2">{props.mentor}</h5> 
                </div>
            </div>
        </div>
    </div>
)
}