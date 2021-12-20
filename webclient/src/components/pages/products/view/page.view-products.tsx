import './page.view-products.scss';
import SharedPageTitle from "../../../shared/page-title/shared.page-title";
import React from "react";
import { Button, Col, FormControl, InputGroup, Row } from "react-bootstrap";
import i18n from "i18next";
import { BsSearch } from "react-icons/bs";
import SharedTable from "../../../shared/table/shared.table";
import { SharedTableColumn } from "../../../shared/table/shared.table.column";
import { SharedTableColumnType } from "../../../shared/table/shared.table.column-type";

class PageViewProducts extends React.Component {
    private t(relativeI18nKey: string): string {
        return i18n.t(`Pages.ViewProducts.${relativeI18nKey}`);
    }

    render(): JSX.Element {
        const columns: SharedTableColumn[] = [
            { Label: '#', Type: SharedTableColumnType.String },
            { Label: this.t('Columns.Name'), Type: SharedTableColumnType.String },
            { Label: this.t('Columns.Qty'), Type: SharedTableColumnType.String },
            { Label: this.t('Columns.Price'), Type: SharedTableColumnType.String },
        ];

        const rows: unknown[][] = [
            [115, 'Vaso pequeno', 20, 15],
            [116, 'Vaso médio', 16, 25],
            [117, 'Vaso grande', 26, 35]
        ];

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
                        <SharedTable Columns={columns} Rows={rows} />
                    </Col>
                </Row>
            </>
        );
    }
}

export default PageViewProducts;