import { ContactPage } from './../contact/contact';
import { Component } from '@angular/core';
import { LifecycleEventsPage } from './../lifecycle-events/lifecycle-events';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  pushPage(): void {
    this.navCtrl.push(ContactPage, {
      type: 'push',
      curse: 'Ionic 2.0',
      year: 2017,
      message: () => {
        console.log('welcome to my life');
      }
    });
  }

  setRoot(): void {
    this.navCtrl.setRoot(ContactPage, { type: 'setRoot' });
  }

  lifecycle(): void {
    this.navCtrl.push(LifecycleEventsPage)
      .then((authorizedAccess: boolean) => {
         
        if(authorizedAccess) {        
          console.log('Page pushed!');
        } else {
          console.log('Acesso não autorizado!');
        }
      
      }).catch(error => {
        console.log('Mensagem se houver erro.', error);        
      });
  }

}
