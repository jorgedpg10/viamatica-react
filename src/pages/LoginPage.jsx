import React from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <div>
                    <h2 className="text-center mb-2">Login</h2>
                    <form>
                        <div className="mb-3">
                            <label for="username" className="form-label">
                                Username
                            </label>
                            <input
                                type="username"
                                className="form-control"
                                id="username"
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                            />
                        </div>
                        
                        <Link to="posts" className="btn btn-primary">
                            Entrar
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
};
