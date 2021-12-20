import { Table } from "react-bootstrap";
import React from "react";
import { SharedTableColumn } from "./shared.table.column";

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
                {this.props.Rows.map((row: unknown[]) => {
                    return (
                        <tr>
                            {row.map((column) => {
                                return <td>{column as string}</td>
                            })}
                        </tr>
                    );
                })}
            </>
        );
    }
}

export default SharedTable;