import { Component } from '@angular/core';
import { Config, NavParams, NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  constructor(
    public config: Config,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) 
  {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPAge');
  }

  configTest(): void{
    console.log(this.config.getModeConfig('ios'));
    
  }

}
