import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from "../../../../assets/logo/favicon.svg"

function TopMenu() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Company logo"
                    />
                    {' '}
                    Company Name
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Dashboard</Nav.Link>
                        <NavDropdown title='Sales'>
                            <NavDropdown.Item href="/sales">List sales</NavDropdown.Item>
                            <NavDropdown.Item href="/sales/add">New sale</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/products">List products</NavDropdown.Item>
                            <NavDropdown.Item href="/products/add">New product</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title='Inventory'>
                            <NavDropdown.Item href="/inventory">List raw materials</NavDropdown.Item>
                            <NavDropdown.Item href="/inventory/add">New material</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title='Purchases'>
                            <NavDropdown.Item href="/purchase">List orders</NavDropdown.Item>
                            <NavDropdown.Item href="/purchase/add">New order</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/supplier">List suppliers</NavDropdown.Item>
                            <NavDropdown.Item href="/supplier/add">New supplier</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Navbar.Text>
                        <a href={'/'}>Sign out</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopMenu;
