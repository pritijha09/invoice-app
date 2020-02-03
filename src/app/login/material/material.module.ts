import {NgModule} from '@angular/core';
import {MatButtonModule, MatButtonToggleModule,
   MatIconModule, MatBadgeModule, MatProgressSpinnerModule,
    MatToolbarModule, MatSidenavModule, MatMenuModule,
     MatListModule, MatDividerModule, MatGridListModule,
      MatExpansionModule, MatCardModule, MatTabsModule,
      MatStepperModule, MatInputModule, MatFormFieldModule, MatSelectModule,
       MatAutocompleteModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule,
        MatNativeDateModule, MatTooltipModule, MatDialogModule, MatTableModule, MatPaginatorModule} from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatCardModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatDialogModule,
  MatTableModule,
  MatPaginatorModule,
];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})

export class MaterialModule { }
