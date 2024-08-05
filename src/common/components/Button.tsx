import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonVariant = 'primary' | 'outlined' | 'contained';

interface ButtonProps {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variant?: ButtonVariant;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = 'primary',
  onClick,
  disabled,
}) => {
  const buttonStyle = twMerge(
    clsx(
      'border border-solid border-white transition duration-200',
      {
        // default style (primary)
        'w-full max-w-[343px] text-sm h-10 text-black font-bold rounded-[4px] bg-white hover:bg-black hover:text-white ':
          variant === 'primary',
      },
      {
        // outline style
        'inline-block w-auto rounded-[20px] bg-black text-xs font-semibold text-white hover:bg-white hover:text-black py-2 px-[10px]':
          variant === 'outlined',
      },
      {
        // contained style
        'inline-block w-auto bg-white rounded-[20px] text-xs font-semibold text-black border-none hover:bg-black hover:text-white py-2 px-[10px] hover:border hover:border-solid hover:border-white':
          variant === 'contained',
      }
    )
  );

  return (
    <button className={buttonStyle} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
