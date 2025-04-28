"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-3xl sm:text-4xl font-semibold text-black dark:text-white max-w-full px-4">
              Discover Luxury Living in <br />
              <span className="text-3xl sm:text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                College Station
              </span>
            </h1>
          </>
        }
      >
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="luxury home"
            className="w-full h-full object-cover object-center"
            draggable={false}
          />
        </div>
      </ContainerScroll>
    </div>
  );
} 