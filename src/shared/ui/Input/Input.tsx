// react
import {
  ChangeEventHandler,
  FC,
  HTMLInputTypeAttribute,
  useState
} from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
//classnames
import classNames from 'classnames';

interface InputProps {
  placeholder?: string;
  type: HTMLInputTypeAttribute;
  size: 'large' | 'medium' | 'small';
  backgroundColor: 'white' | 'black' | 'grey';
  borderColor?: 'black' | 'blackOpacity';
  textColor?: 'white' | 'black';
  register?: UseFormRegisterReturn;
  error?: {
    message?: string;
  };
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Input: FC<InputProps> = ({
  type,
  placeholder,
  size,
  backgroundColor,
  borderColor,
  textColor,
  register,
  error,
  label,
  onChange
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      {label && (
        <p className='mb-1 text-sm font-medium text-gray-500'>{label}</p>
      )}
      <div
        className={classNames(
          'px-4 py-3 border-1 border-solid rounded-lg  border-gray-600',
          {
            'min-w-lg': size === 'large',
            'min-w-md': size === 'medium',
            'min-w-sm': size === 'small',
            'bg-white': backgroundColor === 'white',
            'bg-black': backgroundColor === 'black',
            'bg-gray-500': backgroundColor === 'grey',
            'border border-black': borderColor === 'black' && !isFocused,
            'border border-black/50':
              borderColor === 'blackOpacity' && !isFocused,
            'border-indigo-600 border-2': isFocused,
            'border-red-500 border-2': error,
            'indigo-600': textColor === 'white',
            'text-black': textColor === 'black'
          }
        )}
      >
        {register ? (
          <input
            {...register}
            type={type}
            placeholder={placeholder}
            className='w-full bg-transparent outline-none'
            onFocus={() => setIsFocused(true)}
            onBlurCapture={() => setIsFocused(false)}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            className='w-full bg-transparent outline-none'
            onFocus={() => setIsFocused(true)}
            onBlurCapture={() => setIsFocused(false)}
            onChange={onChange}
          />
        )}
      </div>
      {error && (
        <span className='text-red-500 text-xs mt-1'>{error.message}</span>
      )}
    </div>
  );
};
