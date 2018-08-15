import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'barcode-scanner',
  templateUrl: 'barcode-scanner.html'
})
export class BarcodeScannerComponent {

  constructor(private barcodeScanner: BarcodeScanner, private sqlite: SQLite) {
  }

  prepareBarcodeScanner(){
    let options : BarcodeScannerOptions = {
      preferFrontCamera : false, // iOS and Android
      showFlipCameraButton : true, // iOS and Android
      showTorchButton : true, // iOS and Android
      torchOn: true, // Android, launch with the torch switched on (if available)
      prompt : "Place a barcode inside the scan area", // Android
      resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
      orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
      disableAnimations : true, // iOS
      disableSuccessBeep: false // iOS and Android
  }

  this.barcodeScanner.scan(options).then(barcodeData => {
    console.log('Barcode data', barcodeData);
    alert("We got a barcode\n" +
    "Result: " + barcodeData.text + "\n" +
    "Format: " + barcodeData.format + "\n" +
    "Cancelled: " + barcodeData.cancelled);
   }).catch(err => {
       console.log('Error', err);
       alert("Scanning failed: " + err);
   });
  }

}
