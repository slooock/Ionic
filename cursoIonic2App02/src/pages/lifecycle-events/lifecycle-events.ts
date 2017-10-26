import { NavParams, NavController } from 'ionic-angular';
import { Component } from '@angular/core';


@IonicPage()
@Component({
  selector: 'page-lifecycle-events',
  templateUrl: 'lifecycle-events.html',
})
export class LifecycleEventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LifecycleEventsPage');
  }
  /*
    ionViewCanEnter(): Promise<any> {
    
      console.log('01 - ionViewCanEnter LifecycleEvents');
      return new Promise((resolve,reject)=> {
        console.log('Aguardando 2 segundos ...');
        
         setTimeout(()=>{
          console.log('a');
          let number =Math.round( Math.random() *100);
          console.log('b');
          
          if(number % 2 ==0)
          {
            console.log('c');
            resolve();
            console.log('d');
            console.log(`${number} - Autorizado!`);
          }else{
            console.log('e');
            console.log(`${number} - Não autorizado!`);
          }
          console.log('f');
        },2000);
        console.log('g');
      });
      console.log('h');
    }
  
    */


  ionViewCanEnter(): Promise<any> {
    console.log('01 - ionViewCanEnter LifecycleEvents');
    return new Promise((resolve, reject) => {
      console.log('Aguardando 2 segundos ...');

      setTimeout(() => {
        let number = Math.round(Math.random() * 100);
        if (number % 2 == 0) {
          resolve();
          console.log(`${number} - Autorizado!`);
        } else {
          reject();
          console.log(`${number} - Não autorizado!`);
        }
      }, 2000);
    });
  }


  ionViewCanLeave(): boolean {
    console.log('Can Leave');

    return true;
  }


  onPop(): void {
    this.navCtrl.pop()
      .then((authorizedAccess: boolean) => {

        if (authorizedAccess) {
          console.log('Page popped!');
        } else {
          console.log('saída não autorizada');
        }

      }).catch(error => {
        console.log('Mensagem se houver erro.', error);
      });
  }

}
