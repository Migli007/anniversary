import Hero from "@/components/Hero";
import Image from "next/image";
import Reason from "@/components/Reason";
import { Memory } from "@/components/Memory";
import { Songs } from "@/components/Songs";
import Letter from "@/components/Letter";




export default function Home() {
  return (
    <div>
      <div className="relative bg-black">
        <Hero />
      </div>
      
      <div className="bg-black h-full" >
      <div className="relative flex justify-center items-center flex-col overflow-hidden mix-auto sm:px:10 px-5 pt-5 pb-10">
        <div className="max-w-7xl w-full text-2xl text-white font-bold">
          Our Songs
       </div>
      </div>
        <Songs />
        <div className="relative flex justify-center items-center flex-col overflow-hidden mix-auto sm:px:10 px-5 pt-5 pb-10">
        <div className="max-w-7xl w-full text-2xl text-white font-bold">
          My Reasons 
       </div>
      </div>
        <Reason />
        <div className="relative flex justify-center items-center flex-col overflow-hidden mix-auto sm:px:10 px-5 pt-5 pb-10">
        <div className="max-w-7xl w-full text-2xl text-white font-bold">
          Our Memories 
       </div>
      </div>
        <Memory />
       <div className="relative flex justify-center items-center flex-col overflow-hidden mix-auto sm:px:10 px-5 pt-5 pb-10">
        <div className="max-w-7xl w-full text-2xl text-white font-bold">
          What I want to say 
       </div>
      </div>
    </div>
  </div>
    
  );
}
