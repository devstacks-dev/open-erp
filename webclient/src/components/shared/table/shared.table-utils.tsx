import { SharedTableColumnType } from './shared.table.column-type';

export class SharedTableUtils {
    public static FormatCell(columnType: SharedTableColumnType, rowElement: unknown, columnIx: number): JSX.Element {
        switch (columnType) {
            case SharedTableColumnType.Currency:
                return SharedTableUtils.FormatCurrency(rowElement, columnIx);

            case SharedTableColumnType.Date:
                return SharedTableUtils.FormatDate(rowElement, columnIx);

            case SharedTableColumnType.DateTime:
                return SharedTableUtils.FormatDateTime(rowElement, columnIx);

            case SharedTableColumnType.Number:
                return SharedTableUtils.FormatNumber(rowElement, columnIx);

            case SharedTableColumnType.String:
                return SharedTableUtils.FormatString(rowElement, columnIx);

            default:
                return <td key={`row-cell-${columnIx}`}>{rowElement as string}</td>;
        }
    }

    private static FormatCurrency(rowEl: unknown, columnIx: number): JSX.Element {
        return <td key={`row-cell-${columnIx}`}>{(rowEl as number).toFixed(2)}</td>;
    }

    private static FormatDate(rowEl: unknown, columnIx: number): JSX.Element {
        return <td key={`row-cell-${columnIx}`}>{rowEl as string}</td>;
    }

    private static FormatDateTime(rowEl: unknown, columnIx: number): JSX.Element {
        return <td key={`row-cell-${columnIx}`}>{rowEl as string}</td>;
    }

    private static FormatNumber(rowEl: unknown, columnIx: number): JSX.Element {
        return <td key={`row-cell-${columnIx}`}>{rowEl as number}</td>;
    }

    private static FormatString(rowEl: unknown, columnIx: number): JSX.Element {
        return <td key={`row-cell-${columnIx}`}>{rowEl as string}</td>;
    }
}