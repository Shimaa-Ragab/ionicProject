import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';
import { MyApp } from './app.component';
import { BarcodeScanner } from '../../node_modules/@ionic-native/barcode-scanner';
import { File } from '@ionic-native/file';
import { MediaCapture } from '../../node_modules/@ionic-native/media-capture';
import { IonicStorageModule } from '../../node_modules/@ionic/storage';
import { StreamingMedia } from '@ionic-native/streaming-media';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    File,
    SQLite,
    MediaCapture,
    StreamingMedia
  ]
})
export class AppModule {}
