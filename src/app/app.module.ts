import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
 
// AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyDntt-3RLsLN2ACCHc0AR3DsvJrp4XkR34",
    authDomain: "angularfire2-list-exampl-64a3b.firebaseapp.com",
    databaseURL: "https://angularfire2-list-exampl-64a3b.firebaseio.com",
    storageBucket: "angularfire2-list-exampl-64a3b.appspot.com",
    messagingSenderId: "49296296035"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
