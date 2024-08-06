import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import { useDispatch } from 'react-redux';
import { sliderValue } from '@/lib/features/sliderSlice';

interface SlidersProps {
  theValue?: number;
  onChange?: (newValue: number) => void;
}

const Sliders: React.FC<SlidersProps> = ({ theValue }) => {
  // mapping functions, to convert initial value to desired value
  const valueToLabel = (value: number) => {
    const labelMap = [3, 6, 9, 12, 15, 50];
    return labelMap[value];
  };

  // marks for the slider
  const marks = [
    { value: 0, label: '3' },
    { value: 1, label: '6' },
    { value: 2, label: '9' },
    { value: 3, label: '12' },
    { value: 4, label: '15' },
    { value: 5, label: '50' },
  ];

  // function to get the text for the aria value
  const valuetext = (value: number) => {
    return `${valueToLabel(value)}`;
  };

  const [value, setValue] = useState<number>(3);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const dispatch = useDispatch();

  dispatch(sliderValue(valueToLabel(value)));

  return (
    <div className="w-full max-w-[725px]">
      <Slider
        aria-label="Restricted values"
        defaultValue={0}
        getAriaValueText={valuetext}
        step={1}
        valueLabelDisplay="off"
        marks={marks}
        min={0}
        max={5}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default Sliders;
