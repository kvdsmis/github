import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


// Import the AF2 Module
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

// Create the config object with your Firebase settings.
export const firebaseConfig = {
    apiKey: "AIzaSyCqICuDFMtc1X5o0xJ837X5800y4Yv3pf4",
    authDomain: "chiropractor-bdac5.firebaseapp.com",
    databaseURL: "https://chiropractor-bdac5.firebaseio.com",
    storageBucket: "chiropractor-bdac5.appspot.com",
    messagingSenderId: "992517687096"
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
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
