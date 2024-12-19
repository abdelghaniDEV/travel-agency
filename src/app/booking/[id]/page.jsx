import React from "react";
import chefchaouen from "../../../assets/chefchaouen.jpg";
import marrakesh from "../../../assets/marrakech.jpg";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Booking() {
  return (
    <div className="container">
      <div className="flex ">
        <div className="w-[60%]">1</div>
        <Card className="w-[40%] py-3 px-4">
          <h3 className="text-[18px] font-[500]">Review Booking Details</h3>
          <div className="grid grid-cols-3 gap-2 py-3">
            <Image
              src={chefchaouen}
              alt="chr"
              className="rounded-[10px] w-full h-[110px]"
            />
            <Image
              src={marrakesh}
              alt="chr"
              className="rounded-[10px] w-full h-[110px]"
            />
            <Image
              src={chefchaouen}
              alt="chr"
              className="rounded-[10px] w-full h-[110px]"
            />
          </div>
          <div className="py-3">
            <h1 className="md:text-[22px] text-[25px] leading-[28px] font-[500] pb-2">
              Bli - Nusa Penida Island Tour
            </h1>
            
          </div>
        </Card>
      </div>
    </div>
  );
}
