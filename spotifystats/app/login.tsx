import type { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Login: NextPage = () => {
  return (
    <div className='bg-gradient-to-br from-[#1e1e1e] via-[#786ce3] to-rose-400 w-screen h-screen'>
      <div className='bg-gradient-to-br from-[#1e1e1e] via-[#00000096] to-[#ffffff00] w-screen h-screen flex flex-col  relative overflow-hidden'>

      <div className="w-[180px] h-[180px] absolute m-auto top-10 left-[700px] mx-auto bg-gradient-to-tr from-[#e98284af] to-[#e9828400] rounded-full"/>

      <div className="w-[70px] h-[320px] absolute m-auto -bottom-20 left-[500px] origin-top-left rotate-[40deg] bg-gradient-to-b from-[#786CE3] via-[#e982849f] to-[#EEA472] rounded-[80px]" />
      <div className="w-[15px] h-[220px] absolute m-auto bottom-[-160px] left-[425px] origin-top-left rotate-[-140deg] bg-gradient-to-b from-[#786CE3] via-[#e98284d0] to-[#EEA472] rounded-[20px]" />

      <div className="w-[15px] h-[220px] absolute m-auto bottom-[40px] left-[630px] origin-top-left rotate-[-140deg] bg-gradient-to-b to-[#786CE3] via-[#e98284d0] from-[#EEA472] rounded-[20px]" />
      <div className="w-[15px] h-[220px] absolute m-auto bottom-[-10px] left-[770px] origin-top-left rotate-[-140deg] bg-gradient-to-b to-[#786CE3] via-[#e98284d0] from-[#EEA472] rounded-[20px]" />
      <div className="w-[15px] h-[200px] absolute m-auto bottom-[50px] left-[880px] origin-top-left rotate-[-140deg] bg-gradient-to-b to-[#786CE3] via-[#e98284d0] from-[#EEA472] rounded-[20px]" />
      <div className="w-[15px] h-[220px] absolute m-auto bottom-[100px] left-[770px] origin-top-left rotate-[-140deg] bg-gradient-to-b to-[#786CE3] via-[#e98284d0] from-[#EEA472] rounded-[20px]" />
      <div className="w-[15px] h-[220px] absolute m-auto bottom-[-190px] left-[740px] origin-top-left rotate-[-140deg] bg-gradient-to-b to-[#786CE3] via-[#e98284d0] from-[#EEA472] rounded-[20px]" />

      <div className="w-[15px] h-[220px] absolute m-auto bottom-[-150px] left-[950px] origin-top-left rotate-[-140deg] bg-gradient-to-b from-[#786CE3] via-[#e98284d0] to-[#EEA472] rounded-[20px]" />
      <div className="w-[15px] h-[220px] absolute m-auto bottom-[40px] left-[1150px] origin-top-left rotate-[-140deg] bg-gradient-to-b from-[#786CE3] via-[#e98284d0] to-[#EEA472] rounded-[20px]" />
      <div className="w-[15px] h-[220px] absolute m-auto bottom-[-70px] left-[1180px] origin-top-left rotate-[-140deg] bg-gradient-to-b from-[#786CE3] via-[#e98284d0] to-[#EEA472] rounded-[20px]" />

      <div className="w-[70px] h-[320px] absolute m-auto bottom-[-170px] left-[570px] origin-top-left rotate-[40deg] bg-gradient-to-b from-[#786CE3] via-[#e982849f] to-[#EEA472] rounded-[80px]" />
      <div className="w-[15px] h-[220px] absolute m-auto bottom-[-290px] left-[395px] origin-top-left rotate-[-140deg] bg-gradient-to-b from-[#786CE3] via-[#e98284d0] to-[#EEA472] rounded-[20px]" />

      <div className="w-[70px] h-[320px] absolute m-auto bottom-[-80px] left-[910px] origin-top-left rotate-[40deg] bg-gradient-to-b from-[#786CE3] via-[#e982849f] to-[#EEA472] rounded-[80px]" />

      <div className="w-[70px] h-[320px] absolute m-auto bottom-[-200px] left-[1100px] origin-top-left rotate-[40deg] bg-gradient-to-b to-[#786CE3] via-[#e982849f] from-[#EEA472] rounded-[80px]" />
      <div className="w-[15px] h-[220px] absolute m-auto bottom-[-350px] left-[800px] origin-top-left rotate-[-140deg] bg-gradient-to-b from-[#786CE3] via-[#e98284d0] to-[#EEA472] rounded-[20px]" />

      <div className="w-[70px] h-[320px] absolute m-auto bottom-[-100px] left-[1350px] origin-top-left rotate-[40deg] bg-gradient-to-b to-[#786CE3] via-[#e982849f] from-[#EEA472] rounded-[80px]" />
      <div className="w-[15px] h-[220px] absolute m-auto bottom-[-250px] left-[1125px] origin-top-left rotate-[-140deg] bg-gradient-to-b from-[#786CE3] via-[#e98284d0] to-[#EEA472] rounded-[20px]" />

        <div className=' justify-between'>
          <h1 className="text-white lg:text-[60px] relative font-bold font-['Inter'] px-32 pt-20 pb-[36px]">Welcome to Personify</h1>
          <p className="text-white lg:text-[30px] font-normal font-['Inter'] relative pl-32 lg:pr-[730px]">Learn more about how your music taste connects to your personality</p>
          <Link href="/stats">
          <div className='bg-black bg-opacity-40 w-[200px] h-[230px] absolute mx-44 my-14 border-white border-solid border-[4px] rounded-[40px] border-opacity-70 hover:scale-105 duration-150'> 
          <h1 className="text-white text-[30px] font-bold font-['Inter'] relative my-10 text-center">Log In</h1>
          <Image
          src='/spotify.svg'
          alt='Spotify Logo'
          width={60}
          height={60}
          className='absolute top-24 left-0 right-0 bottom-0 m-auto' />
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
