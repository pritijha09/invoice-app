import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceBuilderRoutingModule } from './invoice-builder-routing.module';
import { InvoiceBuilderComponent } from './invoice-builder.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../login/material/material.module';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { TestingComponent } from './components/testing/testing.component';


@NgModule({
  declarations: [InvoiceBuilderComponent, MainContentComponent, SideNavComponent, ToolbarComponent, InputComponent, OutputComponent, TestingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    InvoiceBuilderRoutingModule
  ]
})
export class InvoiceBuilderModule { }
