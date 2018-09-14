//material components
import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule
  ],
  exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatDividerModule
  ]
})
export class MaterialModule { }
