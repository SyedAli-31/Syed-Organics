import { productType } from "@/constants";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Repeat } from "lucide-react";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabbar = ({ selectedTab, onTabSelect }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full z-50">
      {/* ✅ Desktop View - NO CHANGE */}
      <div className="hidden md:flex items-center justify-center gap-1.5 text-sm font-semibold">
        <div className="flex items-center gap-1.5">
          {productType?.map((item) => (
            <button
              key={item?.title}
              onClick={() => onTabSelect(item?.title)}
              className={`border border-darkColor px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-green-700 hover:text-white hoverEffect ${
                selectedTab === item?.title && "bg-green-950 text-white"
              }`}
            >
              {item?.title}
            </button>
          ))}
        </div>
        <button className="border border-darkColor p-2 rounded-full hover:bg-green-950 hover:text-white hoverEffect">
          <Repeat className="w-5 h-5" />
        </button>
      </div>

      {/* ✅ Mobile View - Smooth Dropdown */}
      <div className="md:hidden w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full bg-gradient-to-r from-green-800 to-green-950 text-white px-4 py-3 rounded-md shadow-lg transition-all duration-300 hover:brightness-110"
        >
          <span className="font-semibold">{selectedTab || "Select Category"}</span>
          <ChevronDown
            className={`w-6 h-6 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {/* ✅ Dropdown Properly Positioned */}
        {isOpen && (
          <div className="absolute left-0 w-full mt-2 bg-white bg-opacity-90 backdrop-blur-lg border border-gray-300 rounded-xl shadow-xl p-2 transition-all duration-300 ease-in-out">
            {productType?.map((item, index) => (
              <button
                key={item?.title}
                onClick={() => {
                  onTabSelect(item?.title);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-5 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-green-700 hover:text-white ${
                  index !== productType.length - 1 ? "mb-1" : ""
                }`}
              >
                {item?.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeTabbar;
