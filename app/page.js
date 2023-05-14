'use client'; 
import Image from 'next/image';
import devices from '../assets/devices.png';


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-20">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
        <h1 className="text-xl md:text-4xl lg:text-6xl font-bold md:max-w-[50%] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-pink-500 to-red-500">
          Productivity
          {' '}
          <span className="text-black dark:text-white">redefined</span>
          {' '}
          with
          {' '}
          <span className="text-black dark:text-white">TaskMaster</span>.
        </h1>
        <div className="">
          <Image src={devices} alt="devices" />
        </div>
            
      </div>
    </main>
  )
}
