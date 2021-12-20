import { SharedTableColumnType } from "./shared.table.column-type";

export interface SharedTableColumn {
    Bold?: boolean;
    Label: string;
    Type: SharedTableColumnType;
}