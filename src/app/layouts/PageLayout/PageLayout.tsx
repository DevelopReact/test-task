// react
import { FC } from 'react';
import { Outlet } from 'react-router';
//ui
import { Header } from '@/widgets/header/ui/Header/Header';

interface PageLayoutProps {}

export const PageLayout: FC<PageLayoutProps> = ({}) => {
  return (
    <div className='  h-screen '>
      <Header />
      <Outlet />
    </div>
  );
};
