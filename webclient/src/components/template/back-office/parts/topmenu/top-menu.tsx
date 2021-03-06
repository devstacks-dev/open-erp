import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { TopMenuItem } from './top-menu.item.interface';
import TopMenuLeftItems from './top-menu.left-items.json';

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
                    {MenuItemsToNav(TopMenuLeftItems as TopMenuItem[])}
                    <Navbar.Text>
                        <Link to={'/'}>{t('navBar.SignOut')}</Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

    function MenuItemsToNav(menuItems: TopMenuItem[]) {
        return (
            <Nav className="me-auto">
                {menuItems.map((menuItem: TopMenuItem, parentIndex: number) => {
                    const parentKey: string = `menu_${parentIndex}`;

                    if (menuItem.children && menuItem.children.length > 0) {
                        return (
                            <NavDropdown title={t(menuItem.i18nKey)} key={parentKey}>
                                {menuItem.children.map((child: TopMenuItem, childIndex: number) => {
                                    const childKey: string = `menu_${parentIndex}_${childIndex}`;

                                    if (child === null) {
                                        return <NavDropdown.Divider key={childKey} />
                                    }

                                    return (
                                        <NavDropdown.Item as={Link} to={child.url! || ""} key={childKey}>
                                            {t(child.i18nKey)}
                                        </NavDropdown.Item>
                                    )
                                })}
                            </NavDropdown>
                        )
                    }

                    return <Nav.Link as={Link} to={menuItem.url! || ""} key={parentKey}>{t(menuItem.i18nKey)}</Nav.Link>
                })}
            </Nav>
        );
    }
}

export default TopMenu;
