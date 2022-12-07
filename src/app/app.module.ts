import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { TableWrapperComponent } from './components/table-wrapper/table-wrapper.component';

@NgModule({
    declarations: [AppComponent, TableComponent, TableWrapperComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent, TableComponent, TableWrapperComponent]
})
export class AppModule {}
