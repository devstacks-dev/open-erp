import React from 'react';
import { SharedTableColumn } from './shared.table.column';
import { SharedTableRowUtils } from './shared.table.row-utils';

interface SharedTableRowProps {
    Columns: SharedTableColumn[]
    OnClick?: () => void;
    Row: unknown[];
    RowIx: number;
}

class SharedTableRow extends React.Component<SharedTableRowProps> {
    render(): JSX.Element {
        return (
            <tr onClick={this.props.OnClick} key={`row${this.props.RowIx}`}>
                {SharedTableRowUtils.Render(this.props.Columns, this.props.Row, this.props.RowIx)}
            </tr>
        );
    }
}

export default SharedTableRow;