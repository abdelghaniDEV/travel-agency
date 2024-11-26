"use client";
import { Filter } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "./ui/checkbox";

function FilterDestination() {
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedPersons, setSelectedPersons] = useState([]);
  const priceRanges = [
    { label: "$25 - $50", value: "25-50" },
    { label: "$50 - $100", value: "50-100" },
    { label: "$100 - $150", value: "100-150" },
    { label: "More than $150", value: "150+" },
  ];

  const daysRanges = [
    { label: "Less than 12 hours", value: "12h" },
    { label: "1 days", value: "1" },
    { label: "2 - 4 days", value: "2-4" },
    { label: "More than 4 days", value: "4+" },
  ];
  const Persone = [
    { label: "10 - 15", value: "10-15" },
    { label: "15 - 20", value: "15-20" },
    { label: "20 - 25", value: "20 - 25" },
    { label: "More than 25 ", value: "25+" },
  ];

  const handleDayCheckboxChange = (value) => {
    setSelectedDays((prevSelectedDays) =>
      prevSelectedDays.includes(value)
        ? prevSelectedDays.filter((day) => day !== value)
        : [...prevSelectedDays, value]
    );
  };
  const handleCheckboxChange = (value) => {
    setSelectedPrices((prevSelectedPrices) =>
      prevSelectedPrices.includes(value)
        ? prevSelectedPrices.filter((price) => price !== value)
        : [...prevSelectedPrices, value]
    );
  };
  const handlePersonCheckboxChange = (value) => {
    setSelectedPersons((prevSelectedPersons) =>
      prevSelectedPersons.includes(value)
        ? prevSelectedPersons.filter((person) => person !== value)
        : [...prevSelectedPersons, value]
    );
  };
  //   <Filter className="text-[#F2764C]" />
  return (
    
    <div className="flex flex-col gap-3 py-3">
      <div> 
        <h4 className="font-[500] pb-3">Duration</h4>
        <div className="flex flex-col gap-3">
          {daysRanges.map((range) => (
            <div key={range.value} className="flex items-center gap-2">
              <Checkbox
                className="w-5 h-5"
                checked={selectedDays.includes(range.value)}
                onClick={() => handleDayCheckboxChange(range.value)}
              />
              <span className="text-[15px] text-[#767676]">{range.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-[500] pb-3">Price</h4>
        <div className="flex flex-col gap-3">
          {priceRanges.map((range) => (
            <div key={range.value} className="flex items-center gap-2">
              <Checkbox
                className="w-5 h-5"
                checked={selectedPrices.includes(range.value)}
                onClick={() => handleCheckboxChange(range.value)}
              />
              <span className="text-[15px] text-[#767676]">{range.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-[500] pb-3">Persone</h4>
        <div className="flex flex-col gap-3">
          {Persone.map((range) => (
            <div key={range.value} className="flex items-center gap-2">
              <Checkbox
                className="w-5 h-5"
                checked={selectedPersons.includes(range.value)}
                onClick={() => handlePersonCheckboxChange(range.value)}
              />
              <span className="text-[15px] text-[#767676]">
                {range.label}/ Per
              </span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-[500] pb-3">Destination</h4>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Checkbox className="w-5 h-5" />
            <span className="text-[15px] text-[#767676]">Local</span>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox className="w-5 h-5" />
            <span className="text-[15px] text-[#767676]">International</span>
          </div>
          {/* <span className="text-[15px] text-[#767676]">Local</span>
        <span className="text-[15px] text-[#767676]">International</span> */}
        </div>
      </div>
    </div>
  );
}

export default FilterDestination;
