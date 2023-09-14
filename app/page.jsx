import Image from 'next/image'
import searchBar from "../Components/ShowCards"
import PresentationCard from '@/Components/Card'
import ShowCards from '../Components/ShowCards'
export default function Home() {
  return (
    <div className='grid h-screen place-items-center items-center'>
      <div className='justify-items-center mb-20 mt-40'>
        <h1 className='text-5xl font-semibold'>Bienvenidos al programa de mentoring!</h1>
        <h2 className='text-2xl font-medium w-11/12 ml-12 mt-3'>Agradecemos su presencia y los invitamos a conocer a sus mentees </h2>
      </div>
      <ShowCards />
    </div>
  )
}
