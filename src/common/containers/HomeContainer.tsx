'use client';

import React from 'react';
import Input from '../components/Input';
import Sliders from '../components/Sliders';
import Button from '../components/Button';

const HomeContainer = () => {
  return (
    <div className="bg-[#181818] h-screen px-5 lg:px-0">
      <div className="h-[70px] flex items-center w-full lg:hidden">
        <span className="logo-style hidden lg:flex">LOGO</span>
      </div>
      <div className="xl:flex xl:flex-row xl:justify-between xl:w-full xl:max-w-max xl:h-screen xl:transform xl:translate-x-[210px]">
        <div className="md:w-[725px] mx-auto">
          <div className="font-light text-2xl pb-4">Search</div>
          <Input placeholder="Keyword" />
          <div className="font-light text-2xl pt-7 pb-6">
            # Of results per page
          </div>
          <div className="flex flex-row items-center gap-[10px]">
            <span className="font-bold text-5xl">99</span>
            <span className="text-base">result</span>
          </div>
          <div className="pt-5">
            <Sliders />
          </div>
          <div className="absolute w-[343px] lg:w-full bottom-[90px] text-center xl:text-left left-1/2 lg:left-0 transform -translate-x-1/2 lg:transform-none">
            <Button text="SEARCH" />
          </div>
        </div>
      </div>
      <div className="hidden xl:flex absolute w-[375px] top-0 right-0">
        FOLLOW
      </div>
    </div>
  );
};

export default HomeContainer;
