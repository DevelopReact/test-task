// react
import { FC } from 'react';

interface OverlayProps {}

export const Overlay: FC<OverlayProps> = ({}) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full backdrop-blur-md z-10'></div>
  );
};
