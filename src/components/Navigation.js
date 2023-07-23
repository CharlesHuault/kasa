import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/components/navigation.scss"

const Navigation = () => {
    return (
      <div className="navigation">
      <ul className='nav'>
        <NavLink to="/" className={(nav)=>(nav.isActive ? "nav-active" : "")}>
            <li>Accueil</li>
        </NavLink>
        <NavLink to="/about" className={(nav)=>(nav.isActive ? "nav-active" : "")}>
            <li>A Propos</li>
        </NavLink>

      </ul>
      </div>
    );
};

export default Navigation;