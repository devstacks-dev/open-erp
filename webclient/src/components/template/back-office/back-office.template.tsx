import { Outlet } from 'react-router-dom';
import { TopMenu } from './parts';
import { Container, Row } from "react-bootstrap";

function BackOfficeTemplate() {
    return (
        <div className='back-office-template'>
            <TopMenu />
            <Container className="mt-3">
                <Row>
                    <Outlet />
                </Row>
            </Container>
        </div>
    );
}

export default BackOfficeTemplate;