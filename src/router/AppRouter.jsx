import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { PostsListPage } from '../pages/PostsListPage'
import { LoginPage } from '../pages/LoginPage'
import { FavoritePostsPage } from '../pages/FavoritePostsPage'


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/posts" element={<PostsListPage />} />
        <Route path="/destacados" element={<FavoritePostsPage />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
