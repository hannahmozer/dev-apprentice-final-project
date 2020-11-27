import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';

// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Dev Apprentice logo" />
      </Link>
    </nav>
  );
}

export default Menu;

// line 14  <Button as={Link} className="ButtonLink" to="/cadastro/video">     New Video    </Button>