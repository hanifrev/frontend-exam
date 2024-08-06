'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useSearchingQuery } from '@/lib/services/api';
import Image from 'next/image';
import Link from 'next/link';
import Follows from '../components/Follow';
import SearchResultCard from '../components/SearchResultCard';
import SearchResultLoading from '../components/SkeletonLoading/SearchResultLoading';
import Button from '../components/Button';
import { Follow } from '@/lib/services/types/follows.types';

const ResultContainer = () => {
  const searchParams = useSearchParams();

  const keyword: any = searchParams.get('search');
  const pageSize: any = searchParams.get('pageSize');
  const { data: results, isLoading } = useSearchingQuery({
    pageSize: pageSize,
    keyword: keyword,
  });

  const theData = results && results.data;
  // @ts-ignore
  const noData = theData && theData.length < 1;

  return (
    <div className="px-5 lg:px-0">
      <div className="container-result">
        <div className="md:w-[737px] mx-auto">
          <div className="flex flex-row gap-[13px] items-center h-[70px] mb-5 lg:mb-0 lg:transform lg:-translate-x-[38px]">
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
            <span className="text-2xl lg:text-[30px] hidden lg:flex">
              Results
            </span>
          </div>
          <div className="text-2xl lg:hidden">Results</div>
          <div className="pt-6 flex flex-col gap-[40px] md:flex-row flex-wrap ">
            {isLoading &&
              Array.from({ length: 6 }).map((_, index) => (
                <SearchResultLoading key={index} />
              ))}
            {theData &&
              theData.map((item: Follow, index: number) => {
                return (
                  <SearchResultCard
                    title={item.name}
                    username={item.username}
                    // for image source, i use different image source since the image link on API is broken
                    imageSrc={`https://i.pravatar.cc/150?img=${index}`}
                    key={index}
                  />
                );
              })}
            {/* @ts-ignore */}
            {noData && <div className="font-bold">NO DATA FOUND</div>}
          </div>
          <div className={`py-10 ${noData && 'hidden'}`}>
            <Button variant="primary" text="MORE" />
          </div>
        </div>
      </div>
      <Follows />
    </div>
  );
};

export default ResultContainer;
