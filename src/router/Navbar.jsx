import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Viamatica
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <NavLink 
                to="/posts" 
                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}` }>
                Posts
              </NavLink>
              
              <NavLink 
                to="/destacados" 
                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}` }>
                Destacados
              </NavLink>

              <li className="nav-item">
                <a className="nav-link " aria-disabled="true">
                  logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
