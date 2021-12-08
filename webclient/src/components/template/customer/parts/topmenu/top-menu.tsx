import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function TopMenu() {
    const { t } = useTranslation();

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img
                        src="/assets/logo/logo.svg"
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
                        <Nav.Link as={Link} to="/">{t('navBar.Dashboard')}</Nav.Link>
                        <NavDropdown title={t('navBar.Sales')}>
                            <NavDropdown.Item as={Link} to="/sales">{t('navBar.ListSales')}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/sales/add">{t('navBar.NewSale')}</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/products">{t('navBar.ListProducts')}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/products/add">{t('navBar.NewProduct')}</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={t('navBar.Inventory')}>
                            <NavDropdown.Item as={Link} to="/inventory">{t('navBar.ListMaterials')}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/inventory/add">{t('navBar.NewMaterial')}</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={t('navBar.Purchases')}>
                            <NavDropdown.Item as={Link} to="/purchase">{t('navBar.ListOrders')}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/purchase/add">{t('navBar.NewOrder')}</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/supplier">{t('navBar.ListSuppliers')}</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/supplier/add">{t('navBar.NewSupplier')}</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Navbar.Text>
                        <Link to={'/'}>{t('navBar.SignOut')}</Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopMenu;
