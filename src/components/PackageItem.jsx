import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import { Clock, Heart, Lock, Map, MapPin, Users } from "lucide-react";

function PackageItem({image , place , title , price}) {
  return (
    <Card className="p-3 flex flex-col gap-2">
      <div>
        <Image
          src={image}
          alt="chefchaouen"
          className="rounded-[10px] h-[220px]"
        />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-[18px] font-[500] leading-[20px]">
            {title}
          </h3>
          <div className="flex gap-1 items-center text-[#A3A3A3]">
            <MapPin className="w-4 h-4" />
            <span className="text-[14px]">{place}</span>
          </div>
        </div>
        {/* <Heart /> */}
      </div>
      <h2 className="text-[20px] font-[500] leading-[20px]">
        ${price} / Per Person
      </h2>
      <div className="grid grid-cols-2 gap-1 text-[#A3A3A3]">
        <div className="flex items-center gap-1">
          <Lock className="w-4 h-4" />
          <span className="text-[14px]">Private Tripe</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span className="text-[14px]">3 days / 2 night</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span className="text-[14px]">20 Person</span>
        </div>
        <div className="flex items-center gap-1">
          <Map className="w-4 h-4" />
          <span className="text-[14px]">Toure Guide</span>
        </div>
      </div>
    </Card>
  );
}

export default PackageItem;
