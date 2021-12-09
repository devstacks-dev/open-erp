import { Outlet } from 'react-router-dom';
import { TopMenu } from './parts';
import { Container } from "react-bootstrap";

function BackOfficeTemplate() {
    return (
        <div className='back-office-template'>
            <TopMenu />
            <Container className="mt-3 text-start">
                <Outlet />
            </Container>
        </div>
    );
}

export default BackOfficeTemplate;