import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import logo from "../assets/logo.png";
import Image from "next/image";
import { AlignJustify } from "lucide-react";

function Header() {
  return (
    <div>
      <div className="flex items-center justify-between container my-4 lg:px-[7rem]">
         <AlignJustify className="w-8 h-8 md:hidden" />
        {/* logo */}
        <div>
          <Image src={logo} alt="logo" width={100} />
        </div>
        <div className=" hidden md:block ">
          <ul className="flex gap-6">
            <Link href={'/'}>Home</Link>
            <Link href={'/destination'}>Destination</Link>
            <li>Packages</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <Button className="md:px-8 text-[12px] md:text-[14px] rounded-[20px] bg-[black]">
            Bock Trip
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
