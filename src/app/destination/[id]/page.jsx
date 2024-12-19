/* eslint-disable react/no-unescaped-entities */

import {
  CalendarCheck2,
  CalendarX2,
  Clock3,
  Codepen,
  Dot,
  ExternalLink,
  Heart,
  MapPin,
  MapPinned,
  PlaneTakeoff,
  Pointer,
  Sparkles,
  Star,
  Upload,
} from "lucide-react";
import chefchaouen from "../../../assets/chefchaouen.jpg";
import marrakesh from "../../../assets/marrakech.jpg";
import essaouira from "../../../assets/essaouira.jpg";
import surfAgadir from "../../../assets/surfAgadir.jpg";
import ourzazate from "../../../assets/ourzazate.jpg";
import React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PackageItem from "@/components/PackageItem";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function Page() {
  return (
    <div className="container">
      {/* header */}
      <div>
        <h1 className="md:text-[30px] text-[25px] font-[500] pb-2">
          Bli - Nusa Penida Island Tour
        </h1>
        <div className="flex hidden  items-center justify-between text-[15px]">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <Clock3 />
              <span>4 Days - 3 Nights</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin />
              <span>Bali Indonesia</span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <ExternalLink />
              <span>Share</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart />
              <span>Save</span>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex gap-5 pt-6 pb-4">
        <div className="w-full md:w-[70%]">
          {/* images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Image
                src={essaouira}
                alt="ch"
                className="rounded-[20px] w-full h-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Image
                src={marrakesh}
                alt="ch"
                className="rounded-[20px] w-full h-[140px]"
              />
              <Image
                src={essaouira}
                alt="ch"
                className="rounded-[20px] w-full h-[140px]"
              />
              <Image
                src={ourzazate}
                alt="ch"
                className="rounded-[20px] w-full h-[140px]"
              />
              <Image
                src={chefchaouen}
                alt="ch"
                className="rounded-[20px] w-full h-[140px]"
              />
            </div>
          </div>
          {/* info */}
          <Card className="p-5 mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <CalendarCheck2 className="text text-main-primary" />
              <span className="font-[500]">start Date : </span>
              <span>2024-12-20</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarX2 className="text-main-primary" />
              <span className="font-[500]">End Date : </span>
              <span>2024-20-20</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinned className="text-main-primary" />
              <span className="font-[500]"> Departure Point :</span>
              <span>bus station Rabat</span>
            </div>
            <div className="flex items-center gap-2">
              <PlaneTakeoff className="text-main-primary" />
              <span className="font-[500]">Transportation :</span>
              <span>A bus</span>
            </div>
          </Card>
          {/* description */}
          <div className="py-4">
            <h2 className="text-[25px] md:text-[30px] font-[500]">Description</h2>
            <p className="px-5">
              Marrakech, often called the "Red City" due to its iconic red
              sandstone buildings, is a vibrant and historic city located in the
              heart of Morocco. Known for its bustling souks, stunning palaces,
              and serene gardens, Marrakech offers visitors a rich blend of
              culture, history, and adventure. The city is a gateway to the
              Atlas Mountains and the Sahara Desert, making it an ideal
              destination for travelers seeking an authentic Moroccan
              experience.
            </p>
          </div>
          {/* activity */}
          <div className="py-4">
            <h2 className="text-[25px] md:text-[30px] font-[500]">Itinerary</h2>
            <div className="px-3 flex flex-col gap-3">
              <div>
                <div className="flex items-center gap-2 ">
                  <div className="bg-main-secondary p-1 rounded-full">
                    <span className=" text-[20px]   text-white">01</span>
                  </div>
                  <h3 className="font-[500] text-[20px]">
                    DAY 01,Explore the Heart of Marrakech
                  </h3>
                </div>
                <div className="px-10 py-3 flex flex-col gap-2 ">
                  <div className="flex gap-1 items-start">
                    {/* <div className="w-4 h-4 rounded-full bg-black "></div> */}
                    <p>
                      {" "}
                      Start your day at Jemaa el-Fnaa, the vibrant main square.
                      .
                    </p>
                  </div>
                  <div className="flex gap-1 items-start ">
                    {/* <div className="w-4 h-4 rounded-full bg-black "></div> */}
                    <p>
                      {" "}
                      Visit the Koutoubia Mosque, the largest mosque in
                      Marrakech,
                    </p>
                  </div>
                  <div className="flex gap-1 items-start">
                    {/* <div className="w-4 h-4 rounded-full bg-black "></div> */}
                    <p>
                      Stroll through the colorful and chaotic Marrakech Souks to
                      shop for Moroccan handicrafts.
                    </p>
                  </div>
                  <div className="flex gap-1 items-start">
                    {/* <div className="w-4 h-4 rounded-full bg-black "></div> */}
                    <p>Have dinner at a rooftop restaurant overlooking Jemaa</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <div className="bg-main-secondary p-1 rounded-full">
                    <span className=" text-[20px]   text-white">02</span>
                  </div>
                  <h3 className="font-[500] text-[20px]">
                    DAY 02,Culture, Art, and Gardens
                  </h3>
                </div>
                <div className="px-10 py-3 flex flex-col gap-2">
                  <div className="flex gap-1 items-start">
                    {/* <div className="w-4 h-4 rounded-full bg-black "></div> */}
                    <p>
                      {" "}
                      Start your day at Jemaa el-Fnaa, the vibrant main square.
                      .
                    </p>
                  </div>
                  <div className="flex gap-1 items-start">
                    {/* <div className="w-4 h-4 rounded-full bg-black "></div> */}
                    <p>
                      {" "}
                      Visit the Koutoubia Mosque, the largest mosque in
                      Marrakech,
                    </p>
                  </div>
                  <div className="flex gap-1 items-start">
                    {/* <div className="w-4 h-4 rounded-full bg-black "></div> */}
                    <p>
                      Stroll through the colorful and chaotic Marrakech Souks to
                      shop for Moroccan handicrafts.
                    </p>
                  </div>
                  <div className="flex gap-1 items-start">
                    {/* <div className="w-4 h-4 rounded-full bg-black "></div> */}
                    <p>Have dinner at a rooftop restaurant overlooking Jemaa</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 ">
                  <div className="bg-main-secondary p-1 rounded-full">
                    <span className=" text-[20px]   text-white">03</span>
                  </div>
                  <h3 className="font-[500] text-[20px]">
                    DAY 03,Explore the Heart of Marrakech
                  </h3>
                </div>
                <div className="px-10 py-3 flex flex-col gap-2">
                  <div className="flex gap-1 items-start">
                    {/* <div className="w-4 h-4 rounded-full bg-black "></div> */}
                    <p>
                      {" "}
                      Start your day at Jemaa el-Fnaa, the vibrant main square.
                      .
                    </p>
                  </div>
                  <div className="flex gap-1 items-start">
                    {/* <div className="w-4 h-4 rounded-full bg-black "></div> */}
                    <p>
                      {" "}
                      Visit the Koutoubia Mosque, the largest mosque in
                      Marrakech,
                    </p>
                  </div>
                  <div className="flex gap-1 items-start">
                    {/* <div className="w-4 h-4 rounded-full bg-black "></div> */}
                    <p>
                      Stroll through the colorful and chaotic Marrakech Souks to
                      shop for Moroccan handicrafts.
                    </p>
                  </div>
                  <div className="flex gap-1 items-start">
                    {/* <div className="w-4 h-4 rounded-full bg-black "></div> */}
                    <p>Have dinner at a rooftop restaurant overlooking Jemaa</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 ">
                  <div className="bg-main-secondary p-1 rounded-full">
                    <span className=" text-[20px]   text-white">04</span>
                  </div>
                  <h3 className="font-[500] text-[20px]">
                    DAY 04,Explore the Heart of Marrakech
                  </h3>
                </div>
                <div className="px-10 py-3 flex flex-col gap-2">
                  <div className="flex gap-1 items-start">
                    {/* <div className="w-4 h-4 rounded-full bg-black "></div> */}
                    <p>
                      {" "}
                      Start your day at Jemaa el-Fnaa, the vibrant main square.
                      .
                    </p>
                  </div>
                  <div className="flex gap-1 items-start">
                    {/* <div className="w-4 h-4 rounded-full bg-black "></div> */}
                    <p>
                      {" "}
                      Visit the Koutoubia Mosque, the largest mosque in
                      Marrakech,
                    </p>
                  </div>
                  <div className="flex gap-1 items-start">
                    {/* <div className="w-4 h-4 rounded-full bg-black "></div> */}
                    <p>
                      Stroll through the colorful and chaotic Marrakech Souks to
                      shop for Moroccan handicrafts.
                    </p>
                  </div>
                  <div className="flex gap-1 items-start">
                    {/* <div className="w-4 h-4 rounded-full bg-black "></div> */}
                    <p>Have dinner at a rooftop restaurant overlooking Jemaa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="font-[600] text-[18px] pb-4">
              * Itinerary is flexible and can change according to custumer
              request and adapts to this Cirumstamce / Situation During The Tour
              *
            </p>
          </div>
        </div>
        {/* card booking */}
        <div className="md:w-[30%] h-full   h-[300px]">
          <Card className="p-5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute w-[60px] h-[30px] right-0 flex justify-center rounded-bl-[10px] top-0 bg-main-primary">
              <span className="font-[600] text-white text-[13px] text-center p-1">
                ONSALE
              </span>
            </div>
            <div>
              <h2 className="text-[20px] font-[500] pb-3">4 Days - 3 Nights</h2>
              <div
                className="flex items-center justify-between text-main-text
          "
              >
                <span>Bali Indonesia</span>
                <div className="flex items-center gap-1 ">
                  <div className="flex items-center gap-1">
                    <Star className="text-[#FFCE00] font-[600]" />
                    <span className="text-black">4.5</span>
                  </div>
                  <span>60.Reviews</span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <h2 className="text-[35px] font-[500] py-3">$450</h2>
                <span className="text-red-500 line-through font-[500]">
                  $600
                </span>
              </div>
              <div className="text-main-text flex flex-col gap-[2px]">
                <div className="flex items-center justify-between">
                  <span className="font-[500]">start Date : </span>
                  <span className="text-main-primary font-[500]">
                    2024-12-20
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-[500]">End Date : </span>
                  <span className="text-main-primary font-[500]">
                    2024-20-20
                  </span>
                </div>
              </div>
            </div>
            <Button className="w-full bg-main-primary">Book New</Button>
          </Card>
          <div className="pt-14 grid grid-cols-1 gap-5">
            <h1 className="text-[20px] font-[600] leading-[20px]">
              More Destination :
            </h1>
            <PackageItem
              image={chefchaouen}
              title={"Miami Red City Land"}
              price={"45"}
              place={"chefchaouen"}
            />
            <PackageItem
              image={essaouira}
              title={"Essouira Red City Land"}
              price={"55"}
              place={"Essouira"}
            />
            <PackageItem
              image={ourzazate}
              title={"Ourzazte Red City Land"}
              price={"18"}
              place={"Ourzazate"}
            />
          </div>
        </div>
      </div>
      <hr />
      {/* rev */}
      <div className="py-4">
        <div className="flex items-center gap-5 text-[30px] font-[600] ">
          <div className="flex items-center gap-1">
            <Star className="text-[#FFCE00]  font-[600]" />
            <span className="text-black">4.5</span>
          </div>
          <span className="text-main-text">.60Reviews</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
          <Card className="p-5">
            <div className="flex gap-4 items-center">
              <div className="w-14 h-14 rounded-full bg-slate-300"></div>
              <div className="flex flex-col ">
                <span className="font-[600]">GHani dev</span>
                <span className="text-main-text">Feb.13.2024</span>
              </div>
            </div>
            <div className="pt-1">
              <p className="text-main-">
                Marrakech is absolutely magical! The markets are vibrant, the
                food is incredible, and the culture is so rich. Highly recommend
                visiting Jemaa el-Fnaa and the Majorelle Garden.
              </p>
            </div>
          </Card>
          <Card className="p-5">
            <div className="flex gap-4 items-center">
              <div className="w-14 h-14 rounded-full bg-slate-300"></div>
              <div className="flex flex-col ">
                <span className="font-[600]">GHani dev</span>
                <span className="text-main-text">Feb.13.2024</span>
              </div>
            </div>
            <div className="pt-1">
              <p className="text-main-">
                Marrakech is absolutely magical! The markets are vibrant, the
                food is incredible, and the culture is so rich. Highly recommend
                visiting Jemaa el-Fnaa and the Majorelle Garden.
              </p>
            </div>
          </Card>
          <Card className="p-5">
            <div className="flex gap-4 items-center">
              <div className="w-14 h-14 rounded-full bg-slate-300"></div>
              <div className="flex flex-col ">
                <span className="font-[600]">GHani dev</span>
                <span className="text-main-text">Feb.13.2024</span>
              </div>
            </div>
            <div className="pt-1">
              <p className="text-main-">
                Marrakech is absolutely magical! The markets are vibrant, the
                food is incredible, and the culture is so rich. Highly recommend
                visiting Jemaa el-Fnaa and the Majorelle Garden.
              </p>
            </div>
          </Card>
          <Card className="p-5">
            <div className="flex gap-4 items-center">
              <div className="w-14 h-14 rounded-full bg-slate-300"></div>
              <div className="flex flex-col ">
                <span className="font-[600]">GHani dev</span>
                <span className="text-main-text">Feb.13.2024</span>
              </div>
            </div>
            <div className="pt-1">
              <p className="text-main-">
                Marrakech is absolutely magical! The markets are vibrant, the
                food is incredible, and the culture is so rich. Highly recommend
                visiting Jemaa el-Fnaa and the Majorelle Garden.
              </p>
            </div>
          </Card>
          <Card className="p-5">
            <div className="flex gap-4 items-center">
              <div className="w-14 h-14 rounded-full bg-slate-300"></div>
              <div className="flex flex-col ">
                <span className="font-[600]">GHani dev</span>
                <span className="text-main-text">Feb.13.2024</span>
              </div>
            </div>
            <div className="pt-1">
              <p className="text-main-">
                Marrakech is absolutely magical! The markets are vibrant, the
                food is incredible, and the culture is so rich. Highly recommend
                visiting Jemaa el-Fnaa and the Majorelle Garden.
              </p>
            </div>
          </Card>
          <Card className="p-5">
            <div className="flex gap-4 items-center">
              <div className="w-14 h-14 rounded-full bg-slate-300"></div>
              <div className="flex flex-col ">
                <span className="font-[600]">GHani dev</span>
                <span className="text-main-text">Feb.13.2024</span>
              </div>
            </div>
            <div className="pt-1">
              <p className="text-main-">
                Marrakech is absolutely magical! The markets are vibrant, the
                food is incredible, and the culture is so rich. Highly recommend
                visiting Jemaa el-Fnaa and the Majorelle Garden.
              </p>
            </div>
          </Card>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:w-[50%]">
        <div className="flex gap-3 items-center">
          <Sparkles className="w-8 h-8 bg-main-primary p-1 rounded-full text-white " />
          <h3 className="text-[25px] font-[500] leading-[20px]">
            Share your experience with us
          </h3>
        </div>
        <div className="flex flex-col gap-2">
          <Label className="font-[500] text-main-text">Full Name </Label>
          <Input type="text" placeholder="Entre Full name " />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="font-[500] text-main-text">Email Adress </Label>
          <Input type="text" placeholder="Entre Email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="font-[500] text-main-text">Review </Label>
          <textarea
            type="text"
            placeholder="Entre Your Review"
            className="h-[200px] p-3 border-[1px] rounded-[20px]"
          />
        </div>
        <Button className="text-[18px] bg-main-primary">Send</Button>
      </div>
    </div>
  );
}
