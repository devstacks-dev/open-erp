import { Outlet } from 'react-router-dom';
import { TemplateBackOfficeTopMenu } from './parts';
import { Container } from "react-bootstrap";
import React from "react";

class TemplateBackOffice extends React.Component {
    render(): JSX.Element {
        return (
            <div className='back-office-template'>
                <TemplateBackOfficeTopMenu />
                <Container className="mt-3 text-start">
                    <Outlet />
                </Container>
            </div>
        );
    }
}

export default TemplateBackOffice;