import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PostsList } from '../components/PostsList'
import { LoginPage } from '../pages/LoginPage'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/posts" element={<PostsList />} />

        </Routes>
    </>
  )
}
