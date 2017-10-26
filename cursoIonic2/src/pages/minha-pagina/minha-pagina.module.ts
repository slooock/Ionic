import { MinhaPaginaPage } from './minha-pagina';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    MinhaPaginaPage,
  ],
  imports: [
    IonicPageModule.forChild(MinhaPaginaPage),
  ],
})
export class MinhaPaginaModule {}
