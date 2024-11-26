import React from 'react'
import banner from "../assets/banner04.png"
import Image from 'next/image'

function Reviews() {
  return (
    <div className="bg-[#eaf2ee] py-[70px] my-[25px] text-center relative">
    {/* <div>
        <img
          className="hidden lg:block lg:absolute lg:bottom-0 lg:right-0"
          src={desighOne}
        />
        <img
          className="hidden  lg:block lg:absolute  lg:top-0 left-[40px]"
          src={arrowDesighn}
        />
        <img
          className="hidden  lg:block lg:absolute lg:right-0"
          src={desighnThow}
        />
        <img
          className="hidden  lg:block lg:absolute lg:right-[35%] lg:top-[20px] md:hidden"
          src={desighn}
        />
      </div> */}
      <div className="flex flex-col items-center container pb-4 ">
        <h1 className=" text-[25px] text-center lg:text-[35px] lg:leading-[50px] ">Fancy $10* off <br/> your first Boocking?</h1>
        <span className="pt-4 text-[15px]">Join our mailing list!</span>
      </div>
      <div className="flex flex-col md:flex-row justify-center  md:gap-[50px] gap-4 px-[40px] ">
           <input placeholder="entre your email" className="text-[14px] py-2 pl-1 bg-[#eaf2ee] border-b-2 focus:outline-none border-black md:w-[400px]" />
           <button className="text-[15px] font-medium border-2 border-black py-1 md:px-[20px] md:mx-0 mx-[90px]">SUBSCRIBE</button>
        </div>
    </div>
  )
}

export default Reviews