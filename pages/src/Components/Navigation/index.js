
import { Navbar, Nav, NavDropdown }from 'react-bootstrap'; 



const Navigation = () => {

return (
<Navbar collapseOnSelect expand="xl" bg="light" variant="light" style={{backgroundColor: '#fff', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'}} >
  <Navbar.Brand href="#home" style={{ marginLeft: '25px', fontWeight: 500, letterSpacing: '3px'}}> josh.dev </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{marginRight: '10vw'}} />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link> home </Nav.Link>
      <Nav.Link> projects </Nav.Link>
      <Nav.Link> contact </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

}

export default Navigation; 