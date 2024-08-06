import React, { useState } from 'react';
import ProfileUserCard from './ProfileUserCard';
import { useFollowersQuery, useFollowingQuery } from '@/lib/services/api';
import ProfileFollowLoading from './SkeletonLoading/ProfileFollowLoading';
import { Follow } from '@/lib/services/types/follows.types';

const Follows = () => {
  const [tabActive, setTabActive] = useState(0);

  const { data: followerData, isLoading: followerLoading } =
    useFollowersQuery();
  const { data: followingData, isLoading: followingLoading } =
    useFollowingQuery();

  const followersData = followerData?.data;
  const followingsData = followingData?.data;

  return (
    <div className="hidden xl:flex absolute w-[375px] top-0 right-0 xl:flex-col xl:fixed">
      <div className="flex flex-row justify-between py-8 text-base ">
        <button
          onClick={() => setTabActive(0)}
          className={`w-[187px] pb-3  ${tabActive === 0 ? 'font-bold text-white border-b-white border-b-2 border-solid' : 'font-normal text-[#929292] hover:text-slate-300'}`}
        >
          Followers
        </button>
        <button
          onClick={() => setTabActive(1)}
          className={`w-[187px] pb-3 ${tabActive === 1 ? 'font-bold text-white border-b-white border-b-2 border-solid' : 'font-normal text-[#929292] hover:text-slate-300'}`}
        >
          Following
        </button>
      </div>

      {tabActive === 0 ? (
        <div className="flex flex-col gap-4">
          {followerLoading &&
            Array.from({ length: 5 }).map((_, index) => (
              <ProfileFollowLoading key={index} />
            ))}

          {followersData &&
            followersData.map((item: Follow, index: number) => {
              return (
                <ProfileUserCard
                  username={item.username}
                  name={item.name}
                  // for image source, i use different image source since the image link on API is broken
                  imageSrc={`https://i.pravatar.cc/150?img=${index}`}
                  followed={item.isFollowing}
                  key={index}
                />
              );
            })}
        </div>
      ) : (
        <div className="flex flex-col gap-4 ">
          {followingLoading &&
            Array.from({ length: 5 }).map((_, index) => (
              <ProfileFollowLoading key={index} />
            ))}
          {followingsData &&
            followingsData.map((item: Follow, index: number) => {
              return (
                <ProfileUserCard
                  username={item.username}
                  name={item.name}
                  // for image source, i use different image source since the image link on API is broken
                  imageSrc={`https://i.pravatar.cc/50?img=${index * 2}`}
                  followed={item.isFollowing}
                  key={index}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Follows;
