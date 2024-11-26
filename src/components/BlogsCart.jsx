import { CalendarDays } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function BlogsCart({image , title , date}) {
  return (
    <div className="flex gap-3 items-start ">
              <div>
                <Image
                  src={image}
                  alt="Blog image"
                  width={270}
                  height={120}
                  className="rounded-[20px]"
                />
              </div>
              <div className="py-3 flex flex-col items-start gap-[3px] md:gap-2">
                <h2 className="text-[15px] leading-[18px] md:text-[25px] font-[500] md:leading-[25px]">
                  {title}
                </h2>
                <div className="flex gap-1 items-center ">
                <CalendarDays className="w-3 h-3"/>
                <span className="text-[13px]">{date}</span>
              </div>
              </div>
            </div>
  )
}

export default BlogsCart