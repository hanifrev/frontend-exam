import React from 'react';

interface TagsCardProps {
  tagsName: string;
  count: number;
}

const TagsCard: React.FC<TagsCardProps> = ({ tagsName, count }) => {
  const tagsSplice = tagsName.split(' ');
  const tags = tagsSplice[2];

  return (
    <div className="flex flex-col">
      <div className="relative bg-[#262626] w-[150px] h-[150px] rounded-[10px]">
        <div className="absolute bottom-[14px] left-[10px] text-white px-[14px] border-4 border-solid border-white rounded-[8px] text-2xl font-bold py-[5px] max-w-[127px] break-text">
          {tags}
        </div>
      </div>
      <div className="pt-[10px] pb-0  text-[15px]  max-w-[140px] break-text">
        {tagsName}
      </div>
      <div className="text-[#b2b2b2] text-[11.7px]">{count} Questions</div>
    </div>
  );
};

export default TagsCard;
