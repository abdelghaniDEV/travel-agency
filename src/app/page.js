import React from "react";
import image2 from "../assets/image-FUS.png";
import image7 from "../assets/world (1).png";
import image3 from "../assets/3@4x.png";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/photo-1499678329028-101435549a4e.avif";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import {
  ArrowRight,
  CircleChevronRight,
  LayoutGrid,
  LinkIcon,
  MapPinned,
  MessageSquareMore,
  NotebookPenIcon,
} from "lucide-react";
import ListDestination from "@/components/ListDestination";
import ListPackages from "@/components/ListPackages";
import Blogs from "@/components/Blogs";
import Reviews from "@/components/Reviews";
import HeaderSection from "@/components/HeaderSection";

function Home() {
  return (
    <div className="  my-[20px]">
      <div className="container">
        {/* horo */}
        <div className=" relative">
          <Image
            src={image3}
            alt="Hero"
            className="w-full rounded-[40px] h-[400px] md:h-[600px]"
          />
          <div className="absolute bottom-0 right-[-20px]  bg-white p-3 rounded-tl-[40px]">
            <div className="bg-[#F9F9FB] hidden lg:block p-4 rounded-[20px] rounded-tl-[80px]">
              <div className="flex items-center gap-2 justify-end pb-2">
                <span className="text-[17px] font-[600]">Know More</span>
                <ArrowRight />
              </div>
              <div className="flex items-start  gap-3">
                <div className="flex gap-0">
                  <Image
                    src={image4}
                    alt="imagge4"
                    className="w-[100px] rounded-[20px] "
                  />
                </div>
                <div className="text-[14px]">
                  <span className="font-[600]">Awesome Packages </span>
                  <p className="leading-[13px] w-[150px]">
                    You can choose any country with good.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-[10%] flex gap-10 top-[10%] text-white   ">
            <div className=" flex flex-col items-center justify-between py-3 hidden">
              <span className="text-[black] bg-white p-2 font-[600] rounded-full ">
                1
              </span>
              <div className="bg-white w-1 h-[140px] top-[40px] absolute"></div>
              <span className="text-[black] bg-white p-2 font-[600] rounded-full">
                2
              </span>
              <div className="bg-white w-1 h-[140px] top-[200px] absolute"></div>
              <span className="text-[black] bg-white p-2 font-[600] rounded-full">
                3
              </span>
            </div>
            <div>
              <div className="">
                <span className="text- uppercase text-[12px]">
                  Elevate Your Travel Journey
                </span>
                <h1 className="uppercase text-[50px] leading-[50px] md:text-[75px] font-[800] md:w-[500px] md:leading-[70px]">
                  Explore The World With <span>travel</span>
                </h1>
              </div>
              <div className="flex items-center gap-3 md:gap-8 pt-[20px] md:pt-[30px]">
                <button className="bg-[#F2764C] rounded-[10px] text-[12px] p-3 md:py-[15px] md:rounded-[30px] font-[600] md:px-8">
                  Bock A Trip Now
                </button>
                <div className="bg-white p-3 rounded-full">
                  {/* <i className="bx bxs-right-arrow p-1 text- bg-[#F2764C] rounded-full md:p-1 text-[15px]"></i> */}
                  <CircleChevronRight className="w-8 h-8 bg-[#F2764C] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about */}
        <div className=" py-[50px] flex flex-col-reverse md:flex-row item-center gap-[30px]">
          <div className="lg:grid grid-cols-2 gap-[20px] ">
            <div className="relative">
              <Image
                src={image2}
                alt="image2"
                className="h-[240px] w-full lg:w-[300px] lg:h-[420px] rounded-[40px] "
              />
              <div className="flex absolute bottom-[20px] left-[20px] text-white items-center gap-2">
                <Image
                  src={image7}
                  alt="image7"
                  className="w-[50px] border-[1px] border-white p-2 rounded-full "
                />
                <p className="font-[500] text-[16px] md:text-[20px] w-[150px] leading-5">
                  View Travelers Profile
                </p>
              </div>
            </div>
            <div className="flex lg:flex-col gap-[20px] py-[20px] lg:py-0">
              <div className="relative">
                <Image
                  src={image5}
                  className="w-[300px] h-[160px] lg:h-[200px] rounded-[40px] "
                  alt="image5"
                />
                <div className="flex absolute bottom-[20px] left-[10px] md:left-[20px] text-white items-center gap-2">
                  <MessageSquareMore className="" />
                  <p className="font-[600] text-[13px] leading-4 md:text-[20px] w-[120px] md:leading-5">
                    Join Your HostelS Chat
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={image3}
                  alt="image3"
                  className="w-[300px] h-[160px] lg:h-[200px] rounded-[40px] "
                />
                <div className="flex absolute bottom-[20px] left-[10px] md:left-[20px] text-white items-center gap-2">
                  <LinkIcon />
                  <p className="font-[600] text-[13px] md:text-[20px] w-[120px] leading-5">
                    RSVP To Linkup
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[550px]">
            <div className="flex gap-2 items-center">
              <span className="text-[#F2764C] font-[500]">About</span>
              <div className="bg-[#F2764C] w-[200px] h-[3px]"></div>
            </div>
            <h1 className="text-[40px] leading-[45px] md:text-[35px] md:leading-[35px] lg:text-[45px] lg:leading-[45px]  xl:text-[50px] xl:leading-[55px] py-5">
              <span className="font-[600]">We Recommend</span> Beautiful
              Destination Every Month{" "}
            </h1>
            <p className="text-[#868686] pb-5">
              It is a long established fact that a reader will be distracted by
              the readable content of. The point of using Lorem Ipsum is that it
              has a more
            </p>
            <div className="grid grid-cols-3 gap-2  lg:gap-7">
              <div className="bg-[#F6F8F7] p-3 rounded-[20px] text-center">
                <h3 className="font-[500] text-[20px] lg:text-[30px]">2000+</h3>
                <p className="text-[#868686] text-[13px] md:text-[15px]">
                  Our Client{" "}
                </p>
              </div>
              <div className="bg-[#F6F8F7] p-3 rounded-[20px] text-center">
                <h3 className="font-[500] text-[20px] lg:text-[30px]">100+</h3>
                <p className="text-[#868686] text-[13px] md:text-[15px]">
                  Destination{" "}
                </p>
              </div>
              <div className="bg-[#F6F8F7] p-3 rounded-[20px] text-center">
                <h3 className="font-[500] text-[20px] lg:text-[30px]">20+</h3>
                <p className="text-[#868686] text-[13px] md:text-[15px]">
                  Years Experience{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Features */}
        <div className=" xl:flex gap-[10px]">
          <div className="xl:w-[400px] md:text-center xl:text-start md:px-[100px] xl:px-0 ">
            <div className="flex gap-2 items-center md:justify-center xl:justify-start">
              <span className="text-[#F2764C] font-[500]">What We Give</span>
              <div className="bg-[#F2764C] w-[160px] h-[3px]"></div>
            </div>
            <h1 className="text-[40px] leading-[45px]  xl:text-[50px] xl:leading-[55px] py-5 md:py-2">
              <span className="font-[600]">Best Features </span>
              For you
            </h1>
            <p className="text-[#868686] pb-5 ">
              It is a long established fact that a reader will be distracted by
              the readable content of. The point of using Lorem Ipsum is that it
              has a more
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:flex-row items-center gap-4">
            <Card className="p-6 md:p-4 flex flex-col gap-3">
              <div>
                <LayoutGrid className="w-10 h-10  text-[#EE752C] bg-[#FBF7EE] p-[8px] rounded-[15px]" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-[500] text-[25px] md:text-[18px]">
                  Lots of Choices
                </h3>
                <p className="text-[#868686] text-[14.5px] md:text-[13px] xl:w-[200px] leading-[18px]">
                  It is a long established fact that a reader will be distracted
                  by the readable content of. The point of using Lorem Ipsum is
                  that it has a more
                </p>
              </div>
            </Card>
            <Card className="p-6 md:p-4 flex flex-col gap-3">
              <div>
                <MapPinned className="w-10 h-10  text-[#EE752C] bg-[#FBF7EE] p-[8px] rounded-[15px]" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-[500] text-[25px] md:text-[18px]">
                  Best Tours Guide
                </h3>
                <p className="text-[#868686] text-[14.5px] md:text-[13px] xl:w-[200px] leading-[18px]">
                  It is a long established fact that a reader will be distracted
                  by the readable content of. The point of using Lorem Ipsum is
                  that it has a more
                </p>
              </div>
            </Card>
            <Card className="p-6 md:p-4 flex flex-col gap-3">
              <div>
                <NotebookPenIcon className="w-10 h-10  text-[#EE752C] bg-[#FBF7EE] p-[8px] rounded-[15px]" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-[500] text-[25px] md:text-[18px]">
                  Easy Booking
                </h3>
                <p className="text-[#868686] text-[14.5px] md:text-[13px] xl:w-[200px] leading-[18px]">
                  It is a long established fact that a reader will be distracted
                  by the readable content of. The point of using Lorem Ipsum is
                  that it has a more
                </p>
              </div>
            </Card>
          </div>
        </div>
        {/* destination */}
        <div className="">
        <HeaderSection title={"Top Destination"} textButton={"Get All Destination"} text={" It is a long established fact that a reader will be distracted by the readable content of. The point of using Lorem Ipsum is that it has a more"} />
        <ListDestination />
        </div>
        {/* Packages */}
        <ListPackages />
        {/* Blogs */}
        <Blogs />
      </div>
      <Reviews />
    </div>
  );
}

export default Home;
