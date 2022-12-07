import { TableData, TableRow, Data } from '../model/data.type';

let tempRows: Array<TableRow[]> = [];
for (let i = 0; i < 20; i++) {
    let name: TableRow = {};
    let age: TableRow = {};

    name['name'] = new Data('A' + i);
    age['age'] = new Data('3' + i);

    tempRows.push([name, age]);
}

export const sample: TableData = {
    rows: tempRows
};
