'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TagsCard from '../components/TagsCard';
import { useTagsQuery } from '@/lib/services/api';
import TagsLoading from '../components/SkeletonLoading/TagsLoading';

const TagsContainer = () => {
  const { data: tagsData, isLoading } = useTagsQuery();

  const theData = tagsData && tagsData;

  return (
    <div className="px-5 lg:px-0 pb-28">
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
            <span className="text-2xl hidden lg:flex">Tags</span>
          </div>
          <div className="text-2xl lg:hidden">Tags</div>
          <div className="pt-6 flex flex-row gap-6 flex-wrap lg:w-[846px] lg:pb-8">
            {isLoading &&
              Array.from({ length: 9 }).map((_, index) => (
                <TagsLoading key={index} />
              ))}
            {theData &&
              theData.map((item: Tags) => {
                return <TagsCard count={item.count} tagsName={item.name} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagsContainer;
