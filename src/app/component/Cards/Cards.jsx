'use client'
import Image from 'next/image';
import card from '@/data/Cards.json';
import Link from 'next/link';
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

import React from 'react'
import { div } from 'framer-motion/client';

const Card = () => {
   

    return (
        <div className="cards">
            <div>
                <h1 className="text-7xl font-bold text-center text-gray-900 p-5">Services </h1>
            </div>

            <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
           {
            card.map((item, index) => (
                <CardContainer key={index} className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-2 border  ">
            
                <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-10}
                    className="w-full mt-4"
                  >
                <Image
                      src={item.img}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                 </CardItem>
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {item.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                   {item.description}
                  </CardItem>
                 
                  <div className="flex justify-between items-center mt-4">
                    <CardItem
                      translateZ={20}
                      translateX={-40}
                      as="button"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                  
                  </div>
                </CardBody>
              </CardContainer>
            ))
           }
            </div>
        </div>
    );
}

export default Card