import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Header() {

  return (
<Navbar bg="light" expand="lg" fixed="top" className="navbar-top">
  <Container className="margin-end nav-link-mobile">
    <Navbar.Brand><Link to='/' className="link main-link">Pousada <span>Secreta</span></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

      <Nav className="me-auto nav-link-mobile"></Nav>

      <Nav className="me-auto nav-link-mobile">
        <Nav.Link><a href='#sobre' className="link">SOBRE</a></Nav.Link>
        <Nav.Link><a href='#rota' className="link">ROTA</a></Nav.Link>
        <Nav.Link><Link to='/quarto' className="link">QUARTOS</Link></Nav.Link>
      </Nav>

    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

