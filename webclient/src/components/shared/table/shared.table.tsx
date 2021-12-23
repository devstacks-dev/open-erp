import { Table } from "react-bootstrap";
import React from "react";
import { SharedTableColumn } from "./shared.table.column";
import SharedTableRow from './shared.table.row';

interface SharedTableProps {
    Columns: SharedTableColumn[];
    Rows: unknown[][];
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
                {this.props.Columns.map((column: SharedTableColumn) => {
                    return <th>{column.Label}</th>
                })}
            </tr>
        );
    }

    private createTableBodyRows(): JSX.Element {
        return (
            <>
                {this.props.Rows.map((row: unknown[], index: number) => {
                    return <SharedTableRow Columns={this.props.Columns} Row={row} RowIx={index} />
                })}
            </>
        );
    }
}

export default SharedTable;