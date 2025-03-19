"use client";

import { productType } from "@/constants";
import { ChevronDown, Repeat } from "lucide-react";
import React, { useState } from "react";

interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabbar = ({ selectedTab, onTabSelect }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative w-full z-40"> {/* Lower z-index to avoid overlap */}
      {/* ✅ Desktop View */}
      <div className="hidden md:flex items-center justify-center gap-1.5 text-[10px] md:text-sm font-semibold">
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

      {/* ✅ Mobile View - Dropdown */}
      <div className="md:hidden flex flex-col items-center w-full relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="border-2 border-green-700 flex items-center justify-between px-6 py-3 rounded-xl w-full max-w-[220px] bg-gradient-to-r from-green-600 to-green-800 text-white font-bold shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
        >
          <span className="flex items-center gap-2">
            <ChevronDown className="w-5 h-5" /> Select Category
          </span>
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full mt-2 bg-white border border-green-700 rounded-xl shadow-xl w-full max-w-[220px] z-50 overflow-hidden transform transition-all duration-300">
            {productType?.map((item) => (
              <button
                key={item?.title}
                onClick={() => {
                  onTabSelect(item?.title);
                  setIsDropdownOpen(false);
                }}
                className={`block w-full text-left px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-green-600 hover:text-white transition-all duration-200 ${
                  selectedTab === item?.title && "bg-green-700 text-white"
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