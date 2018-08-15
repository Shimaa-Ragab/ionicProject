import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { BarcodeScannerComponentModule } from '../../components/barcode-scanner/barcode-scanner.module';
import { MediaCaptureComponentModule } from '../../components/media-capture/media-capture.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    BarcodeScannerComponentModule,
    MediaCaptureComponentModule
  ],
})
export class HomePageModule {}
