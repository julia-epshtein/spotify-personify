import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";

const Login: NextPage = () => {
  return (
    <div className='bg-gradient-to-br from-[#1e1e1e] via-[#786ce3] to-rose-400 w-screen h-screen'>
      <div className='bg-gradient-to-br from-[#1e1e1e] via-[#00000096] to-[#ffffff00] w-screen h-screen flex flex-col'>
      <div
      className="w-[200px] h-[200px] absolute m-auto top-28 right-96 mx-32 bg-gradient-to-tr from-[#E98283] to-[#e9828400] rounded-full"
      />
      <div className="w-[91px] h-[402px] absolute m-auto -bottom-28 left-[700px] origin-top-left rotate-[40deg] bg-gradient-to-b from-[#786CE3] via-[#e982847f] to-[#EEA472] rounded-[80px]" />
        <div className=' justify-between'>
          <h1 className="text-white lg:text-[64px] relative font-bold font-['Inter'] px-32 pt-20 pb-[36px]">Welcome to Personify</h1>
          <p className="text-white lg:text-[32px] font-normal font-['Inter'] relative pl-32 lg:pr-[566px]">Learn more about how your music taste connects to your personality</p>
          <div className='bg-stone-900 bg-opacity-40 w-[290px] h-[336px] relative mx-44 my-14 border-white border-solid border-[4px] rounded-[60px] border-opacity-70'>
          <h1 className="text-white text-5xl font-bold font-['Inter'] relative my-20 text-center">Log In</h1>
          <Image
          src='/spotify.svg'
          alt='Spotify Logo'
          width={80}
          height={80}
          className='absolute top-32 left-0 right-0 bottom-0 m-auto' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
