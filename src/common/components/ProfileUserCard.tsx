import Image from 'next/image';
import React from 'react';
import Button from './Button';

interface ProfileCardProps {
  imageSrc: string;
  name: string;
  username: string;
  followed: boolean;
}

const ProfileUserCard: React.FC<ProfileCardProps> = ({
  imageSrc,
  name,
  username,
  followed,
}) => {
  return (
    <div className="flex flex-row justify-between px-4 items-center">
      <div className="flex flex-row items-center">
        <Image
          src={imageSrc ? imageSrc : 'https://i.pravatar.cc/150?img=3`'}
          alt="profile pics"
          width={40}
          height={40}
          className="border border-white rounded-[5px] h-[40px]"
        />
        <div className="flex flex-col pl-4 gap">
          <span className="text-white font-normal">{name}</span>
          <span className="text-[#8d8d8d] text-sm">@{username}</span>
        </div>
      </div>
      <div>
        {followed ? (
          <Button text="Following" variant="contained" />
        ) : (
          <Button text="Follow" variant="outlined" />
        )}
      </div>
    </div>
  );
};

export default ProfileUserCard;
