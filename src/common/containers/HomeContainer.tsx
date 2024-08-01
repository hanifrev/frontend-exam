'use client';
import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Sliders from '../components/Sliders';

const HomeContainer = () => {
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

export default HomeContainer;
