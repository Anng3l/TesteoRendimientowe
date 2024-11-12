import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
// Importar íconos
import { FaHome, FaInfoCircle } from 'react-icons/fa'; 
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { SiPokemon } from "react-icons/si";

import "./navbarStyles.css";
import Logo from "../../assets/images/Logo.png";

function Navigationbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="navigationBar">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className="nav-link d-flex flex-column align-items-center" activeClassName="active">
              <FaHome size={24} />
              Inicio
            </Nav.Link>
            
            <Nav.Link as={NavLink} to="/ask" className="nav-link d-flex flex-column align-items-center" activeClassName="active">
              <MdOutlineCatchingPokemon size={24} />
              Tu Equipo
            </Nav.Link>

            <Nav.Link as={NavLink} to="/pokedex" className="nav-link d-flex flex-column align-items-center" activeClassName="active">
              <SiPokemon size={24} />
              Pokédex
            </Nav.Link>

            <Nav.Link as={NavLink} to="/about" className="nav-link d-flex flex-column align-items-center" activeClassName="active">
              <FaInfoCircle size={24} />
              Acerca de
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;


