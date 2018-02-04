import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Páginas
import { Pagina3Page } from '../index.paginas';

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3:any = Pagina3Page;

  mutantes:any = [
    {
      nombre: "Magneto",
      poder: "Controlar metales"
    },
    {
      nombre: "Wolverine",
      poder: "Regeneración acelerada"
    },
    {
      nombre: "Profesor X",
      poder: "Poderes psiquicos"
    },
    {
      nombre: "Gambito",
      poder: "Crear objetos inanimados con energia"
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

  navigateTo3(mutante){
    console.log(mutante);
    this.navCtrl.push(Pagina3Page, { 'mutante': mutante});
  }

}
