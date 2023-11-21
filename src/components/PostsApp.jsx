import React, { useState } from 'react'
import { AppRouter } from '../router/AppRouter'
import { AuthContext } from '../auth/context/AuthContext';
//import { AuthProvider } from '../auth/context/AuthProvider';

export const PostApp = () => {
  //const [authToken, setAuthToken] = useState( localStorage.getItem("token") || "");

  return (
    // <AuthProvider>
      <AppRouter />
    // </AuthProvider>
  );
}
