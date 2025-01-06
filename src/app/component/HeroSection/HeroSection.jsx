"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";
import HeroFrom from '@/app/component/HeroForm/HeroForm'

export function HeroSection() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex gap-4 items-center justify-center px-4"
      >
        <div className="p-5 flex-1 items-center justify-center flex-col gap-5">
            
        
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        De juiste Zorg op de juiste Plek
        </div>
        <div className="font-extralight text-base text-center md:text-4xl dark:text-neutral-200 py-4">
        (Zorgvervoer Regio Rotterdam)
        </div>
        <div className="text-justify">
            <p>
            Taxi Zorgvervoer heeft alle keurmerken om het vervoer zo veilig en comfortabel mogelijk uit te voeren voor haar klanten. Veiligheid en betrouwbaarheid staan bij ons hoog in het vaandel. Taxi Zorgvervoer beschikt over het TX-keurmerk en heeft RTX-gekeurde chauffeurs. Daarnaast biedt Taxi Zorgvervoer begeleiding aan al haar chauffeurs om EHBO-, veiligheids-, rolstoel-, leerlingen- en lastige situatiecursussen te volgen.
            </p>
        </div>
        </div>
        
        <div className="flex-1 items-center justify-center">
            <HeroFrom/>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
