'use client';
import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Sliders from '../components/Sliders';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';

const TestContainer = () => {
  const slidervalues = useSelector((state: RootState) => state.slider.value);
  console.log(slidervalues, '====');
  return (
    <div className="flex flex-col gap-4 items-center w-full">
      <Button text="BUTTON" />
      <Button variant="outlined" text="BUTTON" />
      <Button variant="contained" text="BUTTON" />
      <Input
        placeholder="placeholder"
        onChange={(e) => console.log(e.target.value)}
      />
      <Sliders />
    </div>
  );
};

export default TestContainer;
