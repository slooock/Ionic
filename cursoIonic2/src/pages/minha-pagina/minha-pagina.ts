import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'page-minha-pagina',
  templateUrl: 'minha-pagina.html',
})
export class MinhaPaginaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MinhaPaginaPage');
  }

}
