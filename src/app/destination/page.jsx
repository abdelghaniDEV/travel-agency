"use client";
import ListDestination from "@/components/ListDestination";
import { Input } from "@/components/ui/input";

import { ChevronLeft, ChevronRight, Filter, Search } from "lucide-react";
import React, { useState } from "react";
import FilterDestination from "@/components/FilterDestination";
import { Card } from "@/components/ui/card";
import ListPackages from "@/components/ListPackages";
import { DataPicker } from "@/components/DataPicker";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";

function Page() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="">
      <div className=" w-full h-[35vh] xl:h-[45vh] mb-[30px] relative bg-[url('https://www.adrartravel.com/wp-content/uploads/2021/12/Morocco-desert-tours.jpg')] bg-center ">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        <div className="flex flex-col items-center md:font-[600]   absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col items-center pb-[25px] md:pb-[40px]">
            <h1 className="text-[35px] lg:text-[50px] text-white ">All</h1>
            <div className="flex gap-2 items-center text-white text-[15px] lg:text-[17px]">
              <h2>Tours</h2>
              <ChevronRight />
              <h2 className="text-[#e6e6e6]">All</h2>
            </div>
          </div>
          <div className="text-white ">
            <ul className="flex gap-[20px] justify-center   lg:gap-[30px] text-[17px]">
              <li className="">All</li>
              <li className="">Marrakesh</li>
              <li className="">Essaouira</li>
              <li className="">Casablanca</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="flex items-start gap-5">
          <Card className="w-[500px] p-5 hidden md:block rounded-[20px] h-[100%]">
            <div className="flex items-center gap-2">
              <Filter className="text-[#F2764C]" />
              <h1 className="text-[20px] font-[500]">Filter</h1>
            </div>
            <FilterDestination />
          </Card>
          <div>
            <div className="flex items-center justify-between">
              <div className="relative hidden md:block">
                <Search className="absolute w-5 h-5 text-[#868686] top-[7px] left-[5px] " />
                <Input
                  className="w-[280px] h-8 pl-7 border-[1px] focus:border-[#F2764C] border-[#868686]"
                  placeholder="Search Destination"
                />
              </div>
              <div className="bg-[#ffdfd3] p-2 rounded-full">
                <Filter className="text-[#F2764C] h-5 w-5 " onClick={() => setIsOpen(true)} />
              </div>
              <div>
                <DataPicker />
              </div>
            </div>
            <ListPackages items={3} />
          </div>
        </div>
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        {/* <SheetTrigger>Open</SheetTrigger> */}
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Filter</SheetTitle>
            <div>
             <FilterDestination />
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Page;
