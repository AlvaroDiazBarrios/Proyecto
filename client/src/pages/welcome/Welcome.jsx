import { Navbar, Nav, Container } from 'react-bootstrap';
import './lovecraft.css'

export const Welcome = () => {
    return (
        <>
            <header>
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home" className="text-light">Logo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="/login" className="text-light">Login</Nav.Link>
                                <Nav.Link href="/register" className="text-light">Signin</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <br />
            <Container className='text-justify bg-dark py-2 px-2 rounded text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Container>

            <footer className="footer bg-dark text-white fixed-bottom align-items-center">
                <Container className="d-flex justify-content-between align-items-center py-3">
                    <div>
                        Autor: Álvaro Díaz Barrios
                    </div>
                    <div>
                        Proyecto: Final FP
                    </div>
                </Container>
            </footer>
        </>
    );
};
