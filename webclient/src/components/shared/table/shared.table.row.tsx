import React from 'react';
import { SharedTableColumn } from './shared.table.column';
import { SharedTableUtils } from './shared.table-utils';

interface SharedTableRowProps {
    Columns: SharedTableColumn[]
    OnClick: (row: unknown[]) => void;
    Row: unknown[];
}

class SharedTableRow extends React.Component<SharedTableRowProps> {
    render(): JSX.Element {
        return (
            <tr onClick={() => this.props.OnClick(this.props.Row)}>
                {
                    this.props.Columns.map((column: SharedTableColumn, index: number) => {
                        return SharedTableUtils.FormatCell(column.Type, this.props.Row[index], index)
                    })
                }
            </tr>
        );
    }
}

export default SharedTableRow;