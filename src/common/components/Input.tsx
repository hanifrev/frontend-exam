import React from 'react';

interface InputProps {
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, onChange }) => {
  return (
    <input
      className="w-full max-w-[725px] h-[60px] text-sm bg-[#181818] rounded-[6px] border-4 border-solid border-[#ffffff80] px-3 focus:border-[#ff9b33] focus:outline-none"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
