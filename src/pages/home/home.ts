import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

const MEDIA_FILES_KEY = 'mediaFiles';
declare var cordova: any;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  showMedia: boolean;
  BarcodeScannerData: any;
  mediaFiles = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage, 
    private streamingMedia: StreamingMedia) {
      this.showMedia = false;
  }

  ionViewDidLoad() {
  }

  ngOnInit(){
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      this.mediaFiles = JSON.parse(res) || [];
      console.log(this.mediaFiles);
    });
  }

  getBarcodeData($event){
    console.log($event);
    this.BarcodeScannerData = $event;
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      this.mediaFiles = JSON.parse(res) || [];
      console.log(this.mediaFiles);
    if(this.mediaFiles.length > 0){
      let objId = this.mediaFiles.find(obj => obj.barcodeId === this.BarcodeScannerData.text);
      console.log(objId);
      if(objId !== undefined){
        this.showMedia = false
        console.log('this barcode already used before');
      }else{
        this.showMedia = true;
        console.log('new barcode');
      }
    }else{
      this.showMedia = true;
      console.log('new barcode');
    }
    });
  }

  getVideoData($event){
    console.log($event);
    this.storeMediaFiles($event);
  }

play(myFile){
  let options: StreamingVideoOptions = {
    successCallback: () => { console.log('Video played') },
    errorCallback: (e) => { console.log('Error streaming') },
    orientation: 'landscape',
    shouldAutoClose: true,
    controls: true
  };
  
  this.streamingMedia.playVideo(cordova.file.dataDirectory+myFile.name, options);
}

storeMediaFiles(files) {
  // console.log(files);
  files[0] = {name: files[0].name , size: files[0].size, barcodeId: this.BarcodeScannerData.text};
  // console.log(files);  
  this.storage.get(MEDIA_FILES_KEY).then(res => {
    if (res) {
      // console.log(JSON.stringify(res));
      let arr = JSON.parse(res);
      arr = arr.concat(files);
      this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
    } else {
      this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files))
    }
    this.mediaFiles = this.mediaFiles.concat(files);
    this.showMedia = false;
  });
}

}
