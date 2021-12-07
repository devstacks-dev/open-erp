import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

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
                        <Nav.Link href="/">{t('navBar.Dashboard')}</Nav.Link>
                        <NavDropdown title={t('navBar.Sales')}>
                            <NavDropdown.Item href="/sales">{t('navBar.List sales')}</NavDropdown.Item>
                            <NavDropdown.Item href="/sales/add">{t('navBar.New sale')}</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/products">{t('navBar.List products')}</NavDropdown.Item>
                            <NavDropdown.Item href="/products/add">{t('navBar.New product')}</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={t('navBar.Inventory')}>
                            <NavDropdown.Item href="/inventory">{t('navBar.List raw materials')}</NavDropdown.Item>
                            <NavDropdown.Item href="/inventory/add">{t('navBar.New material')}</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={t('navBar.Purchases')}>
                            <NavDropdown.Item href="/purchase">{t('navBar.List orders')}</NavDropdown.Item>
                            <NavDropdown.Item href="/purchase/add">{t('navBar.New order')}</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/supplier">{t('navBar.List suppliers')}</NavDropdown.Item>
                            <NavDropdown.Item href="/supplier/add">{t('navBar.New supplier')}</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Navbar.Text>
                        <a href={'/'}>{t('navBar.Sign Out')}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopMenu;
