import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function TopMenu() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img
                        src="/assets/logo/favicon.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Company logo"
                    />
                    Company Name
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Dashboard</Nav.Link>
                        <NavDropdown title='Sales'>
                            <NavDropdown.Item href="sales/list">List sales</NavDropdown.Item>
                            <NavDropdown.Item href="sales/add">New sale</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="products/list">List products</NavDropdown.Item>
                            <NavDropdown.Item href="products/add">New product</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title='Inventory'>
                            <NavDropdown.Item href="material/list">List raw materials</NavDropdown.Item>
                            <NavDropdown.Item href="material/add">New material</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title='Purchases'>
                            <NavDropdown.Item href="purchase/list">List orders</NavDropdown.Item>
                            <NavDropdown.Item href="purchase/add">New order</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="supplier/list">List suppliers</NavDropdown.Item>
                            <NavDropdown.Item href="supplier/add">New supplier</NavDropdown.Item>
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
