"use client";
import {useState} from "react";
import {VideoPlayer} from './components/VideoPlayer';

const Page= () => {
const [playing, setPlaying] = useState(false);


  return (
    <div className="">
      <div className="border border-white p-3 mb-5 ">
        <p className="text-2xl text-blue-500 mb-3 "> {playing ? 'RODANDO' : 'PAUSADO'}</p>
        <button className=" bg-blue-500 rounded-md p-3 text-black" onClick={()=> setPlaying(!playing)}> play/pause </button>
      </div>
     
      <div className="flex justify-center items-center min-h-screen">
      <VideoPlayer 
         src="https://media.istockphoto.com/id/2121488068/pt/v%C3%ADdeo/close-up-illustration-of-a-shoujo-manga-protagonist-with-white-eyes-in-shock.mp4?s=mp4-640x640-is&k=20&c=_OvdrBV-ieXYe7-Nbt1CCFYPk0UrRVlrJMKC7p6CyWk="
         isPlaying={playing}
       />
      </div>
   

    
    </div>
  );
};

export default Page;