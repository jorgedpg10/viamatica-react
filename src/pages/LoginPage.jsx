import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const LoginPage = () => {
    let navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(true);

    const handleLogin = (event) => {
        event.preventDefault()
        if ( username == 'admin' && password == 'admin'){
          localStorage.setItem('token', 'Bearer');
          navigate("/posts")
        }else{
          setAuthenticated(false);
        }
    }

    return (
      <>
        <div className="d-flex justify-content-center mt-3">
          <div className="w-25">
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
            {!authenticated ? (
              <div class="alert alert-danger mt-3">
                <strong>Oops</strong> Por favor revise sus credenciales!
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </>
    );
};
