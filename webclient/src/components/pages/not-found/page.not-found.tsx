import './page.not-found.scss';
import { Row } from "react-bootstrap";
import React from "react";
import i18n from "i18next";

class PageNotFound extends React.Component {
    render(): JSX.Element {
        return (
            <Row className='page-not-found'>
                <h1>{i18n.t('Pages.NotFound.Title')}</h1>
            </Row>
        );
    }
}

export default PageNotFound;