import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { Box, Typography } from '@mui/material';

const Sliders = () => {
  // Mapping functions
  const valueToLabel = (value: number) => {
    const labelMap = [3, 6, 9, 12, 15, 50];
    return labelMap[value];
  };

  // const labelToValue = (label: number) => {
  //   const valueMap = {
  //     3: 0,
  //     6: 1,
  //     9: 2,
  //     12: 3,
  //     15: 4,
  //     50: 5,
  //   };
  //   // @ts-ignore
  //   return valueMap[label];
  // };

  // Define marks for the slider
  const marks = [
    { value: 0, label: '3' },
    { value: 1, label: '6' },
    { value: 2, label: '9' },
    { value: 3, label: '12' },
    { value: 4, label: '15' },
    { value: 5, label: '50' },
  ];

  // Function to get the text for the aria value
  const valuetext = (value: number) => {
    return `${valueToLabel(value)}`;
  };

  const [value, setValue] = useState<number>(3);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <div className="w-full max-w-[725px]">
      <Slider
        aria-label="Restricted values"
        defaultValue={3}
        getAriaValueText={valuetext}
        step={1}
        valueLabelDisplay="off"
        marks={marks}
        min={0}
        max={5}
        onChange={handleChange}
        value={value}
      />
      <Typography>Selected Value: {valueToLabel(value)}</Typography>
    </div>
  );
};

export default Sliders;
