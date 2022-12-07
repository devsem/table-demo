import { Component } from '@angular/core';

import { sample } from '../../samples/sample.data';

@Component({
    selector: 'app-tablewrapper',
    templateUrl: './table-wrapper.component.html',
    styles: [``]
})
export class TableWrapperComponent {
    sampleData = sample;
}
