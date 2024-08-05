'use client';

import React, { useState } from 'react';
import Input from '../components/Input';
import Sliders from '../components/Sliders';
import Button from '../components/Button';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import Follows from '../components/Follow';

const HomeContainer = () => {
  const router = useRouter();

  // to set search query params
  const createSearchString = (name: string, value: string) => {
    const params = new URLSearchParams();
    params.set(name, value);

    return params.toString();
  };

  // to set pageSize query params
  const createPageSizeString = (name: string, value: string | number) => {
    const params = new URLSearchParams();
    params.set(name, value.toString());

    return params.toString();
  };

  const [searchQuery, setSearchQuery] = useState('');

  // to get search input value
  const searchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  // to get pageSize value
  const getPageSize = useSelector((state: RootState) => state.slider.value);

  const handleSearch = () => {
    router.push(
      `/results?${createSearchString('search', searchQuery)}&${createPageSizeString('pageSize', getPageSize)}`
    );
  };

  return (
    <div className="bg-[#181818] h-screen px-5 lg:px-0">
      <div className="h-[70px] flex items-center w-full lg:hidden">
        <span className="logo-style  lg:flex">LOGO</span>
      </div>
      <div className="xl:flex xl:flex-row xl:justify-between xl:w-full xl:max-w-max xl:h-screen xl:transform xl:translate-x-[210px] md:pt-12 xl:pt-[54px]">
        <div className="md:w-[725px] mx-auto">
          <div className="font-light text-2xl pb-4">Search</div>
          <Input placeholder="Keyword" onChange={searchInput} />
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
            <Button text="SEARCH" onClick={handleSearch} />
          </div>
        </div>
      </div>

      <Follows />
    </div>
  );
};

export default HomeContainer;
