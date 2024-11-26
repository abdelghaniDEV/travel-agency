import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <div className="mt-[20px] container  pt-[25px] border-t-[1px]">
        <div>
          <Image src={logo} alt="logo" className="w-[170px] md:w-[200px]" />
        </div>
        <div className="  flex flex-col gap-5 lg:flex-row-reverse lg:items-center lg:gap-4 justify-between  pb-[40px]">
          <div className="flex gap-[100px]">
            <div>
              <h2 className="text-[25px] pb-2 font-[500]">Pages</h2>
              <ul className="flex flex-col gap-[10px] text-[15px] font-[400] text-[#868686] ">
                <li>Home</li>
                <li>Destination</li>
                <li>Packages</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div>
              <h6 className="text-[25px] pb-2 font-[500]">Cities</h6>
              <ul className="flex flex-col gap-[10px] text-[15px] font-[400] text-[#868686] ">
                <li>Marrakech</li>
                <li>Agadir</li>
                <li>Essaouira</li>
                <li>Chefchaouen</li>
              </ul>
            </div>
          </div>
          <div>
            <ul className="flex flex-col gap-[10px] text-[#868686] ">
              <li className="flex items-center gap-2">
                <i className="bx bx-location-plus  text-[15px] font-[400]"></i>
                1418 Riverwood Drive, Suite 3245 Cottonwood,
                <br /> CA 96052, United States
              </li>
              <li className="flex items-center gap-2">
                <i className="bx bx-phone text-[15px] font-[400]"></i>+
                185659635
              </li>
              <li className="flex items-center gap-2">
                <i className="bx bx-envelope text-[15px] font-[400]"></i>
                contact@travel.com
              </li>
            </ul>
          </div>
        </div>
        <div className="pb-2">
          <h5 className="text-[13px] text-center">
            SAFWA - 2024 # DEV_ABELGHANI_BERHOUCH
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
