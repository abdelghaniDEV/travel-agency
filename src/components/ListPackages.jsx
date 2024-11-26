import React from "react";
import { Button } from "./ui/button";
import {
  ChevronsLeft,
  ChevronsRight,
  CircleChevronRight,
  Clock,
  Heart,
  Lock,
  Map,
  MapPin,
  User,
  Users,
} from "lucide-react";
import chefchaouen from "../assets/chefchaouen.jpg";
import marrakesh from "../assets/marrakech.jpg";
import essaouira from "../assets/essaouira.jpg";
import agadir from "../assets/agadir.jpg";
import surfAgadir from "../assets/surfAgadir.jpg";
import ourzazate from "../assets/ourzazate.jpg";
import PackageItem from "./PackageItem";

function ListPackages({items}) {
  return (
    <div className="">
      {/* <HeaderSection title={"Top Packages"} textButton={"Get All Destination"} text={" It is a long established fact that a reader will be distracted by the readable content of. The point of using Lorem Ipsum is that it has a more"} /> */}
      <div className={`grid grid-cols-1 md:grid-cols-4 lg:grid-cols-${items} py-4 gap-4`}>
        <PackageItem
          image={chefchaouen}
          title={"Miami Red City Land"}
          price={"45"}
          place={"chefchaouen"}
        />
        <PackageItem
          image={marrakesh}
          title={"Marrakesh Red City Land"}
          price={"30"}
          place={"marrakesh"}
        />
        <PackageItem
          image={essaouira}
          title={"Essouira Red City Land"}
          price={"55"}
          place={"Essouira"}
        />
        <PackageItem
          image={agadir}
          title={"Taghzout Red City Land"}
          price={"25"}
          place={"Taghzout-Agadir"}
        />
        <PackageItem
          image={surfAgadir}
          title={"Surf taghazout agadir"}
          price={"55"}
          place={"Taghzout-Agadir"}
        />
        <PackageItem
          image={ourzazate}
          title={"Ourzazte Red City Land"}
          price={"18"}
          place={"Ourzazate"}
        />
        <PackageItem
          image={marrakesh}
          title={"Marrakesh Red City Land"}
          price={"30"}
          place={"marrakesh"}
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
         <PackageItem
          image={chefchaouen}
          title={"Miami Red City Land"}
          price={"45"}
          place={"chefchaouen"}
        />
        <PackageItem
          image={marrakesh}
          title={"Marrakesh Red City Land"}
          price={"30"}
          place={"marrakesh"}
        />
        <PackageItem
          image={essaouira}
          title={"Essouira Red City Land"}
          price={"55"}
          place={"Essouira"}
        />
      </div>
      <div className="flex gap-4 justify-center py-3 items-center">
      <ChevronsLeft />
        <span className="bg-green-300 px-3 py-1">1</span>
        <span className="bg-green-300 px-3 py-1">2</span>
        <span className="bg-green-300 px-3 py-1">3</span>
        <span className="bg-green-300 px-3 py-1">4</span>
        <ChevronsRight />
      </div>
    </div>
  );
}

export default ListPackages;
