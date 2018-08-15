import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MediaCaptureComponent } from './media-capture';


@NgModule({
  declarations: [
    MediaCaptureComponent
   ],
  imports: [
    IonicModule,
  ],
  exports: [
    MediaCaptureComponent
  ],
  entryComponents:[
    MediaCaptureComponent
  ]
})
export class MediaCaptureComponentModule {}

