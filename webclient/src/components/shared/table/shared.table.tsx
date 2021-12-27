import { Table } from "react-bootstrap";
import React from "react";
import { SharedTableColumn } from "./shared.table.column";
import SharedTableRow from './shared.table.row';

interface SharedTableProps {
    Columns: SharedTableColumn[];
    Rows: unknown[][];
    OnClickedColumn?(column: SharedTableColumn, columnIx: number): void;
    OnClickedRow?(row: unknown[], ix: number): void;
}

class SharedTable extends React.Component<SharedTableProps> {
    render(): JSX.Element {
        return (
            <Table striped bordered hover>
                <thead>{this.createTableHeadRow()}</thead>
                <tbody>{this.createTableBodyRows()}</tbody>
            </Table>
        );
    }

    private createTableHeadRow(): JSX.Element {
        return (
            <tr>
                {this.props.Columns.map((column: SharedTableColumn, index: number) => {
                    return <th key={`column-${index}`} onClick={() => this.onClickedColumn(column)}>{column.Label}</th>
                })}
            </tr>
        );
    }

    private createTableBodyRows(): JSX.Element {
        return (
            <>
                {this.props.Rows.map((row: unknown[], index: number) => {
                    return <SharedTableRow Columns={this.props.Columns}
                                           Row={row}
                                           key={`row-${index}`}
                                           OnClick={(row: unknown[]) => this.onClickedRow(row)} />
                })}
            </>
        );
    }

    private onClickedColumn(column: SharedTableColumn): void {
        if (this.props.OnClickedColumn) {
            this.props.OnClickedColumn(column, this.props.Columns.indexOf(column));
        }
    }

    private onClickedRow(row: unknown[]): void {
        if (this.props.OnClickedRow) {
            this.props.OnClickedRow(row, this.props.Rows.indexOf(row));
        }
    }
}

export default SharedTable;