import { SharedTableColumn } from './shared.table.column';
import { SharedTableColumnType } from './shared.table.column-type';

export class SharedTableRowUtils {
    public static Render(columns: SharedTableColumn[], row: unknown[], rowIx: number): JSX.Element[] {
        return columns.map((column: SharedTableColumn, index: number) => {
            switch (column.Type) {
                case SharedTableColumnType.Currency:
                    return SharedTableRowUtils.RenderCurrency(row[index], rowIx, index);

                case SharedTableColumnType.Date:
                    return SharedTableRowUtils.RenderDate(row[index], rowIx, index);

                case SharedTableColumnType.DateTime:
                    return SharedTableRowUtils.RenderDateTime(row[index], rowIx, index);

                case SharedTableColumnType.Number:
                    return SharedTableRowUtils.RenderNumber(row[index], rowIx, index);

                case SharedTableColumnType.String:
                    return SharedTableRowUtils.RenderString(row[index], rowIx, index);

                default:
                    return <td key={`rowItem${rowIx}${index}`}>{row[index] as string}</td>
            }
        })
    }

    private static RenderCurrency(rowEl: unknown, rowIx: number, colIx: number): JSX.Element {
        return <td key={`rowItem${rowIx}${colIx}`}>{rowEl as string}</td> as JSX.Element;
    }

    private static RenderDate(rowEl: unknown, rowIx: number, colIx: number): JSX.Element {
        return <td key={`rowItem${rowIx}${colIx}`}>{rowEl as string}</td> as JSX.Element;
    }

    private static RenderDateTime(rowEl: unknown, rowIx: number, colIx: number): JSX.Element {
        return <td key={`rowItem${rowIx}${colIx}`}>{rowEl as string}</td> as JSX.Element;
    }

    private static RenderNumber(rowEl: unknown, rowIx: number, colIx: number): JSX.Element {
        return <td key={`rowItem${rowIx}${colIx}`}>{rowEl as string}</td> as JSX.Element;
    }

    private static RenderString(rowEl: unknown, rowIx: number, colIx: number): JSX.Element {
        return <td key={`rowItem${rowIx}${colIx}`}>{rowEl as string}</td> as JSX.Element;
    }
}