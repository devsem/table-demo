import { Component, Input } from '@angular/core';
import { TableData } from '../../model/data.type';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styles: [``]
})
export class TableComponent {
    @Input()
    data: TableData;
}
