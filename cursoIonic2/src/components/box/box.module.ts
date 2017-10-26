import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { BoxComponent } from './box';

@NgModule({
  declarations: [
    BoxComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    BoxComponent
  ]
})
export class BoxModule {}
