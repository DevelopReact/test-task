// react
import { FC, ReactNode } from 'react';
//classnames
import classNames from 'classnames';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type: 'submit' | 'reset' | 'button';
  size: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  type,
  size
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames('px-4 py-3 rounded-lg', {
        'w-20': size === 'sm',
        'w-24': size === 'sm',
        'w-32': size === 'base',
        'w-40': size === 'lg',
        'w-48': size === 'xl',
        'bg-indigo-600 text-white cursor-pointer': !disabled,
        'border-gray-500 border-1 text-gray-500': disabled,
        'bg-pink-600 text-white cursor-pointers': type === 'reset'
      })}
    >
      {children}
    </button>
  );
};
