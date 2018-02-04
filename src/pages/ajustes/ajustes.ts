import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

//Pages
import { ModalPage } from '../index.paginas';

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }

  activarPrincipal(){
    this.navCtrl.parent.select(2);
  }

  mostrar_modal(){
    let modal = this.modalCtrl.create(ModalPage, {nombre: "Juan", edad: 50});
    modal.present();
    modal.onDidDismiss (params => {
      if (params){
        console.log(params);
      } else {
        console.log('Se cerro sin parametros');
      }
    })
  }

}
