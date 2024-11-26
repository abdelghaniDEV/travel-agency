import React from 'react'
import { Button } from './ui/button'
import { CircleArrowLeft, CircleChevronRight } from 'lucide-react'

function HeaderSection({title , text , textButton}) {
  return (
    <div>
    <div className="flex items-center justify-between py-3">
      <div>
        <h1 className="text-[25px] md:text-[40px] font-[600]">{title}</h1>
        <p className="text-[#868686] text-[14px] hidden md:block">
          {text}
        </p>
      </div>
      <button className="flex items-center text-[15px] p-2 rounded-full bg-white md:ext-black text-[#EE752C] border border-[#F2764C] ">
        <span className='hidden '>{textButton}</span>
        <CircleChevronRight className='w-7 h-7' />
      </button>
    </div>
  </div>
  )
}

export default HeaderSection