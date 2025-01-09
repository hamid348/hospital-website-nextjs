"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Select Details",
    description:
      "Enter your Pick-up and Drop-off locations , choose the date , time , and preferred vehicle type .",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "REvaluate and adjust",
    description:
      "View the automatically calculated fare, and add or ignore additional services such as baggage assistance or wheelchair access.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/img/hospital.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Book and confirm!",
    description:
      "Confirm the booking to get a confirmation With all the travel details and you're ready to go!",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
 
];
export function HowItWorks() {
  return (
    
    <div className="h-screen p-10">
        <h1 className="text-7xl font-bold text-center text-gray-900 p-5">How It WOrks </h1>
      <StickyScroll content={content} />
    </div>
  );
}
