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
        PrincipalPage ,
        TabsPage
} from '../pages/index.paginas';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    AjustesPage, 
    Ajustes2Page, 
    ModalPage, 
    Pagina2Page, 
    Pagina3Page, 
    PrincipalPage,
    TabsPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
          backButtonText: 'Atras'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AjustesPage, 
    Ajustes2Page, 
    ModalPage, 
    Pagina2Page, 
    Pagina3Page, 
    PrincipalPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
