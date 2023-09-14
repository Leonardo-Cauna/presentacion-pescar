export default function PresentationCard ( props ){
console.log(props.imagen);
return(
    <div className="border-8 hover:border-t4 border-red-600 rounded-3xl w-96">
        <div className="m-5 flex align-middle justify-center">
            <div className="flex flex-col justify-center">
                <img src={props.imagen} alt="" className="w-20 h-20 rounded-full m-auto"/>
                <h5 className="bg-red-600 text-cyan-50 rounded-lg object-contain">{props.mentor}</h5>
            </div>
            <p className="font-extrabold align-middle h-12 m-auto">Sala N°{props.id}</p>   
            <div className="flex flex-col justify-items-center">
                <img src={props.imagen_mentor} alt="" className="w-20 h-20 rounded-full m-auto"/>
                <h5 className="bg-red-600 text-cyan-50 rounded-lg">{props.mentor}</h5> 
            </div>
        </div>
         
    </div>
)
}