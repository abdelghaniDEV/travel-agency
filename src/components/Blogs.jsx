import React from "react";
import { Button } from "./ui/button";
import { CalendarDays, CircleChevronRight } from "lucide-react";
import Surf01 from "../assets/surfAgadir.jpg"
import essaouira from "../assets/essaouira.jpg"
import family from "../assets/family.jpg"
import ski from "../assets/skip.jpg"
import dinner from "../assets/dinner.jpg"
import Image from "next/image";
import HeaderSection from "./HeaderSection";
import BlogsCart from "./BlogsCart";

function Blogs() {
  return (
    <div className="">
      <HeaderSection title={"Latest Stories"} textButton={"Get All Blogs"} text={"It is a long established fact that a reader will be distracted by the readable content of The point of using Lorem Ipsum is that it has a more"}/>
      <div>
        <div className="lg:flex gap-10 py-5 lg:px-10">
          <div className="">
            <div>
              <Image
                src={family}
                alt="Blog image"
                className=" rounded-[20px] w-full lg:w-[450px] "
              />
            </div>
            <div className="py-2 md:py-3 lg:py-1 flex flex-col gap-1 md:gap-2 lg:w-[450px]">
              <h2 className="text-[28px] leading-[28px] md:text-[32px] font-[600] md:leading-[35px]">
                It is a long established fact that a reader will be distracted{" "}
              </h2>
              <div className="flex gap-1 items-center ">
                <CalendarDays className="w-5 h-5"/>
                <span className="text-[15px]">April 01 - 2024 , April 06 - 2024</span>
              </div>
              <p className="text-[#868686] text-[14px] ">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 py-3 lg:py-0 md:px-10 lg:px-0">
           <BlogsCart title={"It is a long established fact that a reader will be distracted"} image={dinner} date={"April 01 - 2024 , April 06 - 2024"} />
           <BlogsCart title={"Wine Country Escapes: Vineyard Tours for Connoisseurs"} image={family} date={"April 01 - 2024 , April 06 - 2024"} />
           <BlogsCart title={"It is a long established fact that a reader will be distracted"} image={ski} date={"April 01 - 2024 , April 06 - 2024"} />
            <BlogsCart title={"The Ultimate Ski Trip Packing List To Make Family Ski Trips Easy!"} image={essaouira} date={"April 01 - 2024 , April 06 - 2024"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
