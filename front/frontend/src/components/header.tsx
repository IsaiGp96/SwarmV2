import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/ba">BA</Link>
          </li>
          <li>
            <Link to="/pso">PSO</Link>
          </li>
          <li>
            <Link to="/topsis">TOPSIS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
