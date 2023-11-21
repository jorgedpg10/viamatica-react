import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { useNavigate } from "react-router-dom";


export const LoginPage = () => {
  let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [contextToken, setContextToken] = useState('empty')

    const handleLogin = (event) => {
        event.preventDefault()
        if ( username == 'admin' && password == 'admin'){
          localStorage.setItem('token', 'Bearer');
          setContextToken('Bearer')
          navigate("/posts")
        }
        // pasar al context
        //redireccionar
       //const algo =   useContext(AuthContext);
    }

    return (
      <AuthContext.Provider value={{ contextToken, setContextToken }}>
        <div className="d-flex justify-content-center">
          <div>
            <h2 className="text-center mb-2">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label for="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  className="form-control"
                  id="username"
                  aria-describedby="emailHelp"
                  onChange={({ target }) => setUsername(target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  className="form-control"
                  id="password"
                  onChange={({ target }) => setPassword(target.value)}
                />
              </div>

              <button className="btn btn-primary">Entrar</button>
            </form>
          </div>
        </div>
      </AuthContext.Provider>
    );
};
