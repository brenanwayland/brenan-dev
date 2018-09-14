//material components
import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatToolbarModule,
    MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatDividerModule,
      MatToolbarModule,
      MatCardModule
  ]
})
export class MaterialModule { }
