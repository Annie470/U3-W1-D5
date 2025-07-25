import { Navbar, Nav, Container,} from 'react-bootstrap';
import { Search, Bell, PersonCircle } from 'react-bootstrap-icons';


const MyNav = () => {
  return (
    <>
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      style={{ backgroundColor: '#221f1f' }}
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="src\assets\logo.png"
            alt="Netflix logo"
            style={{ width: '100px', height: '55px' }}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarSupportedContent" />

        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-lg-0 fw-bold">
            <Nav.Link href="#" className="active">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-3">
            <Search className="icons" color="white" size={20} />
            <div id="kids" className="fw-bold text-white">KIDS</div>
            <Bell className="icons" color="white" size={20} />
            <PersonCircle className="icons" color="white" size={24} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default MyNav;
