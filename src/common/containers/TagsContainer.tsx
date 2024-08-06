'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import TagsCard from '../components/TagsCard';
import { useTagsQuery } from '@/lib/services/api';
import TagsLoading from '../components/SkeletonLoading/TagsLoading';
import { Tags } from '@/lib/services/types/tags.types';

const TagsContainer = () => {
  const { data: tagsData, isLoading } = useTagsQuery();

  const theData = tagsData && tagsData;

  return (
    <div className="px-5 lg:px-0 pb-28">
      <div className="container-tags">
        <div className="md:w-[737px] mx-auto">
          <div className="flex flex-row gap-[13px] items-center h-[70px] mb-5 md:mb-0 lg:transform lg:-translate-x-[38px]">
            <Link href={'/'}>
              <Image
                alt="back"
                src={'/chev-back.svg'}
                width={26}
                height={26}
                className="w-[26px] h-[26px] cursor-pointer lg:hidden"
              />
            </Link>
            <span className="text-2xl lg:hidden">Home Page</span>
            <span className="text-2xl lg:text-[30px] lg:pl-6 hidden lg:flex">
              Tags
            </span>
          </div>
          <div className="text-2xl lg:hidden">Tags</div>
          <div className="pt-6 flex flex-row gap-6 flex-wrap lg:w-[846px] lg:pb-8">
            {isLoading &&
              Array.from({ length: 9 }).map((_, index) => (
                <TagsLoading key={index} />
              ))}
            {theData &&
              theData.map((item: Tags, index: number) => {
                return (
                  <TagsCard
                    count={item.count}
                    tagsName={item.name}
                    key={index}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagsContainer;
