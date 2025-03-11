// react
import { PageLayout } from '@/app/layouts/PageLayout/PageLayout';
import { HomePage } from '@/pages/home/HomePage';
import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

export const RouteProvider: FC = ({}) => {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path={'/'} element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};
