import { Col, Row } from "react-bootstrap";
import i18n from "i18next";
import React from "react";

interface SharedPageTitleProps {
    Title: string;
}

class SharedPageTitle extends React.Component<SharedPageTitleProps> {
    render(): JSX.Element {
        return (
            <Row className="mt-5">
                <Col xs={12}>
                    <h1>{i18n.t(this.props.Title)}</h1>
                </Col>
            </Row>
        );
    }
}

export default SharedPageTitle;