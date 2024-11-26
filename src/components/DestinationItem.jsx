import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import chefchaouen from "../assets/chefchaouen.jpg";

function DestinationItem({image , title , place}) {
  return (
    <div>
      <div className="relative">
        <Image
          src={image}
          alt="chefchaouen"
          className="rounded-[20px] w-full h-[300px] lg:h-[260px]"
        />
        <div className="absolute top-2 left-3 bg-[#00000069] py-1 px-3 rounded-[15px]">
          <span className="text-white text-[14px] font-[400] ">
            {title}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between pt-3">
        <h4 className="text-[20px] md:text-[18px] font-[500]">
          {title}
        </h4>
      </div>
      <span className="text-[13px]">April 8-14 April 2024</span>
      <div className="flex items-center text-[#868686] gap-2 text-[15px]">
        <MapPin />
        <span>{place}</span>
      </div>
    </div>
  );
}

export default DestinationItem;
