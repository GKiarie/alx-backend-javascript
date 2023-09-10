import { RowElement, RowID } from "./interface";

export interface instertRowInterface {
    (row: RowElement): number;
}

export interface deleteRowInterface {
    (row: RowID): void;
}

export interface instertRowInterface {
    (rowId: RowID, row: RowElement): number;
}