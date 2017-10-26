import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
      console.log(this.navParams);
      console.log(this.navParams.get('type'));
      this.navParams.data.type;
      this.navParams.data.message();
      console.log(this.navParams.data.year);
      
  }
  pushPage(): void {
    this.navCtrl.push(ContactPage);
    console.log(this.navParams.get('type'));
  }
  popPage(): void {
    this.navCtrl.pop();
  }
}
