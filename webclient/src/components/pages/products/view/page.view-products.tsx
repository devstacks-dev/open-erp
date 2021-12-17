import './page.view-products.scss';
import SharedPageTitle from "../../../shared/page-title/shared.page-title";
import React from "react";
import { Button, Col, FormControl, InputGroup, Row, Table } from "react-bootstrap";
import i18n from "i18next";
import { BsSearch } from "react-icons/bs";

class PageViewProducts extends React.Component {
    private t(relativeI18nKey: string): string {
        return i18n.t(`Pages.ViewProducts.${relativeI18nKey}`);
    }

    render(): JSX.Element {
        return (
            <>
                <SharedPageTitle Title="Pages.ViewProducts.Title" />
                <Row className="mt-3">
                    <Col>
                        <InputGroup>
                            <InputGroup.Text id="page-search-field">
                                <BsSearch />
                            </InputGroup.Text>
                            <FormControl placeholder={this.t('Fields.Search')}
                                         aria-label={this.t('Fields.Search')}
                                         aria-describedby="page-search-field" />
                            <Button variant="primary">
                                {this.t('Buttons.New')}
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>{this.t('Columns.Name')}</th>
                                    <th>{this.t('Columns.Qty')}</th>
                                    <th>{this.t('Columns.Price')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>115</td>
                                    <td>Vaso pequeno</td>
                                    <td>20</td>
                                    <td>R$ 15,00</td>
                                </tr>
                                <tr>
                                    <td>116</td>
                                    <td>Vaso médio</td>
                                    <td>16</td>
                                    <td>R$ 25,00</td>
                                </tr>
                                <tr>
                                    <td>117</td>
                                    <td>Vaso grande</td>
                                    <td>26</td>
                                    <td>R$ 35,00</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </>
        );
    }
}

export default PageViewProducts;