import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    // other imports...
    MatToolbarModule
  ],
  exports: [
    // other exports...
    MatToolbarModule
  ]
})
export class SharedModule { }
