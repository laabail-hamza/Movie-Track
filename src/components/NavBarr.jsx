import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navbarr() {
  return (
    <Navbar style={{ backgroundColor: '#2d3e50', color: 'white' }}>
      <Container>
        <Navbar.Brand href="/" style={{ color: 'white' }}>Movie Track</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="/" style={{ color: 'white' }}>Home</a>
          </Navbar.Text>
          <Navbar.Text className="ms-5">
            <a href="/favorites" style={{ color: 'white' }}>Favorites</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
