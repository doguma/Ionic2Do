import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { TaskListPage } from '../pages/tasklist/tasklist';

import { Dialogs } from '@ionic-native/dialogs';

export const firebaseConfig = {
  apiKey: "AIzaSyAcBsmZcRLrGCg4zgL41eUJh_gqZ82fu4s",
  authDomain: "ionic2do-ec07e.firebaseapp.com",
  databaseURL: "https://ionic2do-ec07e.firebaseio.com",
  projectId: "ionic2do-ec07e",
  storageBucket: "ionic2do-ec07e.appspot.com",
  messagingSenderId: "833237306172"
};

/*  <script src="https://www.gstatic.com/firebasejs/4.3.1/firebase.js"></script>
<script>
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAcBsmZcRLrGCg4zgL41eUJh_gqZ82fu4s",
  authDomain: "ionic2do-ec07e.firebaseapp.com",
  databaseURL: "https://ionic2do-ec07e.firebaseio.com",
  projectId: "ionic2do-ec07e",
  storageBucket: "ionic2do-ec07e.appspot.com",
  messagingSenderId: "833237306172"
};
firebase.initializeApp(config);
</script>

*/

@NgModule({
  declarations: [
    MyApp,
    TaskListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TaskListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Dialogs,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
