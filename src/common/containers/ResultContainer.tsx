'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useSearchingQuery } from '@/lib/services/api';
import Image from 'next/image';
import Link from 'next/link';
import Follows from '../components/Follow';
import SearchResultCard from '../components/SearchResultCard';

const ResultContainer = () => {
  const searchParams = useSearchParams();

  const keyword: any = searchParams.get('search');
  const pageSize: any = searchParams.get('pageSize');
  const { data: results, isLoading } = useSearchingQuery({
    pageSize: pageSize,
    keyword: keyword,
  });

  const theData = results && results.data;

  return (
    <div className="px-5 lg:px-0">
      <div className="xl:flex xl:flex-row xl:justify-between xl:w-full xl:max-w-max xl:h-screen xl:transform xl:translate-x-[210px] md:pt-12 xl:pt-[54px]">
        <div className="md:w-[737px] mx-auto">
          <div className="flex flex-row gap-[13px] items-center h-[70px] mb-5">
            <Link href={'/'}>
              <Image
                alt="back"
                src={'/chev-back.svg'}
                width={26}
                height={26}
                className="w-[26px] h-[26px] cursor-pointer"
              />
            </Link>
            <span className="text-2xl lg:hidden">Home Page</span>
            <span className="text-2xl hidden lg:flex">Results</span>
          </div>
          <div className="text-2xl lg:hidden">Results</div>
          <div className="pt-6 flex flex-col gap-[40px] md:flex-row md:flex-nowrap ">
            {isLoading && <div>LOADING,.,....</div>}
            {theData &&
              theData.map((item: Follows, index: number) => {
                return (
                  <SearchResultCard
                    title={item.name}
                    username={item.username}
                    imageSrc={`https://i.pravatar.cc/150?img=${index}`}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <Follows />
    </div>
  );
};

export default ResultContainer;
