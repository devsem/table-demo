export class Data {
    private _data: string;
    private _type?: string;

    public get data() {
        return this._data;
    }
    public set data(value: string) {
        this._data = value;
    }

    public get type() {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }

    /**
     * Default constructor
     */
    constructor(d: string, t?: string) {
        this.data = d;

        if (t) this.type = t;
    }
}

export interface TableRow {
    [name: string]: Data;
}

export type TableData = {
    rows: Array<TableRow[]>;
};

export type TableCols = {
    cols: Array<string>;
};
