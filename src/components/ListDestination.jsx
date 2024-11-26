import React from "react";
import EgyotImg from "../assets/egypte.jpg";
import chefchaouen from "../assets/chefchaouen.jpg";
import marrakesh from "../assets/marrakech.jpg";
import essaouira from "../assets/essaouira.jpg";
import DestinationItem from "./DestinationItem";
import { Button } from "./ui/button";
import { CircleChevronRight } from "lucide-react";
import HeaderSection from "./HeaderSection";

function ListDestination({items}) {
  return (
    <div className="">
      <div className=" ">
        <div className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-${items} py-4 gap-4`}>
          <DestinationItem
            image={chefchaouen}
            title={"Sailing Through the Galapagos"}
            place={"chefchaouen"}
          />
          <DestinationItem
            image={essaouira}
            title={"The Golden Gate Bridge"}
            place={"Essaouira"}
          />
          <DestinationItem
            image={marrakesh}
            title={"Machu Picchu Hike"}
            place={"Marrakesh"}
          />
          <DestinationItem
            image={essaouira}
            title={"The Golden Gate Bridge"}
            place={"Essaouira"}
          />
          <DestinationItem
            image={marrakesh}
            title={"Machu Picchu Hike"}
            place={"Marrakesh"}
          />
          <DestinationItem
            image={chefchaouen}
            title={"Sailing Through the Galapagos"}
            place={"chefchaouen"}
          />
          <DestinationItem
            image={essaouira}
            title={"The Golden Gate Bridge"}
            place={"Essaouira"}
          />
          <DestinationItem
            image={chefchaouen}
            title={"Sailing Through the Galapagos"}
            place={"chefchaouen"}
          />
        </div>
      </div>
    </div>
  );
}

export default ListDestination;
