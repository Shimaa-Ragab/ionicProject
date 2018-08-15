import { Component, ViewChild } from '@angular/core';
import { File } from '@ionic-native/file';
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from '@ionic-native/media-capture';
import { Storage } from '@ionic/storage';
import { normalizeURL } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

const MEDIA_FILES_KEY = 'mediaFiles';
declare var cordova: any;

@Component({
  selector: 'media-capture',
  templateUrl: 'media-capture.html'
})
export class MediaCaptureComponent {

  mediaFiles = [];
  @ViewChild('myvideo') myVideo: any;
  source: any;
  bo_html5: boolean;

  constructor(private mediaCapture: MediaCapture, 
              private storage: Storage, 
              private file: File,
              private sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      this.mediaFiles = JSON.parse(res) || [];
      console.log(this.mediaFiles);
    });
  }

  captureVideo() {
    let options: CaptureVideoOptions = {
      limit: 1,
      duration: 30
    }
    this.mediaCapture.captureVideo(options).then((res: MediaFile[]) => {
      let capturedFile = res[0];
      console.log(capturedFile);
      let fileName = capturedFile.name;
      let dir = capturedFile['fullPath'].split('/');
      dir.pop();
      let fromDirectory = dir.join('/');      
      var toDirectory = cordova.file.dataDirectory;
      
      this.file.copyFile(fromDirectory , fileName , toDirectory , fileName).then((res) => {
        console.log(res.nativeURL);
        this.storeMediaFiles([{name: fileName, size: capturedFile.size}]);
      },err => {
        console.log('err: ', err);
      });
          },
    (err: CaptureError) => console.error(err));
  }

  play(myFile) {
      // let path = cordova.file.dataDirectory + myFile.name;
      // console.log(path);
      // let url = path.replace(/^file:\/\//, '');
      // let video = this.myVideo.nativeElement;
      // console.log(url);
      // video.src = normalizeURL(url);
      // video.play();

      this.file.checkFile(cordova.file.dataDirectory, myFile.name).then((correct : boolean) => {
        if(correct){
            this.file.readAsDataURL(cordova.file.dataDirectory,  myFile.name).then((base64) => {
                this.source = this.sanitizer.bypassSecurityTrustUrl(base64);
                this.bo_html5 = true;
                let video = this.myVideo.nativeElement;
                console.log(this.source);
                video.src = this.source;
                video.play();
            }).catch((err) => {
                console.log("VIDEO :: No se pudo recuperar el video");
                console.log(err);
            });
        } else {
            console.log("VIDEO :: El video no pudo ser encontrado");
        }
    }).catch((err) => {
        console.log("VIDEO :: Ocurrio un error al verificar si el video existe");
        console.log(err);
    });
  }
 
  storeMediaFiles(files) {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      if (res) {
        console.log(JSON.stringify(res));
        let arr = JSON.parse(res);
        arr = arr.concat(files);
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
      } else {
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files))
      }
      console.log(files);
      this.mediaFiles = this.mediaFiles.concat(files);
    })
  }
 
}
