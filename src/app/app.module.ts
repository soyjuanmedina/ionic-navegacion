import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Pages
import { AjustesPage, 
        Ajustes2Page, 
        ModalPage, 
        Pagina2Page, 
        Pagina3Page, 
        PrincipalPage 
} from '../pages/index.paginas';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AjustesPage, 
    Ajustes2Page, 
    ModalPage, 
    Pagina2Page, 
    Pagina3Page, 
    PrincipalPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AjustesPage, 
    Ajustes2Page, 
    ModalPage, 
    Pagina2Page, 
    Pagina3Page, 
    PrincipalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
