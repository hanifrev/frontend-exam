import React from 'react';

const TagsLoading = () => {
  return (
    <div className="flex flex-col">
      <div className="relative bg-[#262626] w-[150px] h-[150px] rounded-[10px] animate-pulse"></div>
      <div className="h-2 bg-gray-700 rounded-full w-[140px] mt-[10px] mb-1 animate-pulse"></div>
      <div className="h-2 bg-gray-700 rounded-full w-[140px] animate-pulse"></div>
    </div>
  );
};

export default TagsLoading;
