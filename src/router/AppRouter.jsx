import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { PostsListPage } from '../pages/PostsListPage'
import { LoginPage } from '../pages/LoginPage'
import { FavoritePostsPage } from '../pages/FavoritePostsPage'
import PrivateRoutes from './PrivateRoutes'


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoutes/>}>
          <Route path="/posts" element={<PostsListPage />} exact />
          <Route path="/destacados" element={<FavoritePostsPage />} exact />
        </Route>
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
