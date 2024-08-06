import Image from 'next/image';
import React from 'react';

interface ResultCardProps {
  title: string;
  username: string;
  imageSrc?: string;
}

const SearchResultCard: React.FC<ResultCardProps> = ({
  title,
  username,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col md:w-[219px]">
      <Image
        alt="card"
        src={imageSrc ? imageSrc : 'https://i.pravatar.cc/150?img=3'}
        width={335}
        height={223}
        className="w-min-[335px] w-full h-min-[223px] h-[223px] md:w-full md:w-max-[219px] md:h-[146px] object-cover"
      />
      <div className="pt-5 pb-1 text-[15px]">{title}</div>
      <div className="text-[11.17px] text-[#b2b2b2]">by {username}</div>
    </div>
  );
};

export default SearchResultCard;
