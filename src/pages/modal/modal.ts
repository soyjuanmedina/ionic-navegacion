import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  nombre: string = '';
  edad:number = 0;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.nombre = this.navParams.get("nombre");
    this.edad = navParams.data.edad;

  }

  cerrar_con_parametros(){
    let data = {
      nombre: "Juan",
      edad: 18,
      coords: {
        lat: 10,
        long: -10
      }
    }
    this.viewCtrl.dismiss(data);

  }
  cerrar_sin_parametros(){
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

}
