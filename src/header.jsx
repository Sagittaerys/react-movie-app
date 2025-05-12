import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from "react-icons/fa";
import Filter from './filter';






export default function Header(){
 

  return(
  <div>
    <Navbar expand="lg" className="main-nav bg-body-tertiary">
      <Container fluid className='nav-bar'>
        <Navbar.Brand className='nav-brand' href="#home"> SAGEFLIX </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav" className='nav-links'>

          <Nav className="me-auto">
            <Nav.Link className='links' href="#home">Home</Nav.Link>
            <Nav.Link className='links' href="#tv-shows">TV Shows</Nav.Link>
            <Nav.Link className='links' href="#movies">Movies</Nav.Link>
            <Nav.Link className='links' href="#games">Games</Nav.Link>
            <Nav.Link className='links' href="#new">New & Popular</Nav.Link>
            <Nav.Link className='links' href="#list">My List</Nav.Link>
            <Nav.Link className='links' href="#language">Browse By Language</Nav.Link>
          </Nav>
          
          
                
        </Navbar.Collapse>

          <Filter />

      </Container>
    </Navbar>


        </div>
  );
}