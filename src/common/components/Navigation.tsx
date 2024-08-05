'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Logo from './Logo';

const Navigation = () => {
  const path = usePathname();

  return (
    <>
      {/* mobile */}
      <div className="fixed lg:hidden flex items-center h-[66px] bottom-0 w-full bg-[#202020] ">
        <div className="flex flex-row gap-[50px] justify-center align-middle w-full">
          <Link href={'/'}>
            <Image
              src={'/Union.svg'}
              alt="home"
              width={24}
              height={24}
              className={`cursor-pointer hover:contrast-[2] ${path === '/' && 'invert contrast-[15]'}`}
            />
          </Link>
          <Link href={'/tags'}>
            <Image
              src={'/Union.svg'}
              alt="home"
              width={24}
              height={24}
              className={`cursor-pointer hover:contrast-[2] ${path === '/tags' && 'invert contrast-[15]'}`}
            />
          </Link>
        </div>
      </div>

      {/* desktop */}
      <div className="hidden lg:flex flex-col lg:fixed bg-[#202020] left-0 w-20 h-full">
        <Logo />
        <div className="flex flex-col items-center mx-auto gap-4">
          <Link href={'/'}>
            <Image
              src={'/Union.svg'}
              alt="home"
              width={24}
              height={24}
              className={`cursor-pointer mx-auto hover:contrast-[2] ${path === '/' && 'invert contrast-[15]'}`}
            />
            <span className="mx-auto text-xs inline-block">
              {path === '/' && 'Home'}
            </span>
          </Link>
          <Link href={'/tags'}>
            <Image
              src={'/Union.svg'}
              alt="home"
              width={24}
              height={24}
              className={`cursor-pointer mx-auto hover:contrast-[2] ${path === '/tags' && 'invert contrast-[15]'}`}
            />
            <span className="mx-auto text-xs">
              {path === '/tags' && 'Tags'}
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
