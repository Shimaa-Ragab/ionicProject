import { Component, Output, EventEmitter } from '@angular/core';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture';
import { File } from '@ionic-native/file';

declare var cordova: any;

@Component({
  selector: 'media-capture',
  templateUrl: 'media-capture.html'
})
export class MediaCaptureComponent {

  @Output() MediaCaptureEvent = new EventEmitter<any>();

  constructor(private mediaCapture: MediaCapture, 
    private file: File) {      
  }

  ionViewDidLoad() {
  }

  captureVideo() {
    let options: CaptureVideoOptions = {
      limit: 1,
      duration: 30
    }
    this.mediaCapture.captureVideo(options).then((res: MediaFile[]) => {
      let capturedFile = res[0];
      // console.log(capturedFile);
      let fileName = capturedFile.name;
      let dir = capturedFile['fullPath'].split('/');
      dir.pop();
      let fromDirectory = dir.join('/');      
      var toDirectory = cordova.file.dataDirectory;
      
      this.file.copyFile(fromDirectory , fileName , toDirectory , fileName).then((res) => {
        // console.log(res.nativeURL);
        this.MediaCaptureEvent.emit([{name: fileName, size: capturedFile.size, barcodeId: ''}]);
      },err => {
        console.log('err: ', err);
      });
          },
    (err: CaptureError) => console.error(err));
  }
 
}
