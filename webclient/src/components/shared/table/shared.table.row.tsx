import React from 'react';
import { SharedTableColumn } from './shared.table.column';
import { SharedTableRowUtils } from './shared.table.row-utils';

interface SharedTableRowProps {
    Columns: SharedTableColumn[]
    OnClick: (row: unknown[]) => void;
    Row: unknown[];
}

class SharedTableRow extends React.Component<SharedTableRowProps> {
    render(): JSX.Element {
        return (
            <tr onClick={() => this.props.OnClick(this.props.Row)}>
                {SharedTableRowUtils.Render(this.props.Columns, this.props.Row, 0)}
            </tr>
        );
    }
}

export default SharedTableRow;