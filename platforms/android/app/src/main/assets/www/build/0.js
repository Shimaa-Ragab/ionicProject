webpackJsonp([0],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_barcode_scanner_barcode_scanner_module__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_media_capture_media_capture_module__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_barcode_scanner_barcode_scanner_module__["a" /* BarcodeScannerComponentModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_media_capture_media_capture_module__["a" /* MediaCaptureComponentModule */]
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\tryThis\ionicProject\src\pages\home\home.html"*/'\n\n<ion-content padding  overflow-scroll="true">\n<barcode-scanner></barcode-scanner>\n\n<media-capture></media-capture>\n</ion-content>\n'/*ion-inline-end:"D:\tryThis\ionicProject\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeScannerComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__barcode_scanner__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BarcodeScannerComponentModule = /** @class */ (function () {
    function BarcodeScannerComponentModule() {
    }
    BarcodeScannerComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__barcode_scanner__["a" /* BarcodeScannerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__barcode_scanner__["a" /* BarcodeScannerComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__barcode_scanner__["a" /* BarcodeScannerComponent */]
            ]
        })
    ], BarcodeScannerComponentModule);
    return BarcodeScannerComponentModule;
}());

//# sourceMappingURL=barcode-scanner.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarcodeScannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarcodeScannerComponent = /** @class */ (function () {
    function BarcodeScannerComponent(barcodeScanner, sqlite) {
        this.barcodeScanner = barcodeScanner;
        this.sqlite = sqlite;
    }
    BarcodeScannerComponent.prototype.prepareBarcodeScanner = function () {
        var options = {
            preferFrontCamera: false,
            showFlipCameraButton: true,
            showTorchButton: true,
            torchOn: true,
            prompt: "Place a barcode inside the scan area",
            resultDisplayDuration: 500,
            formats: "QR_CODE,PDF_417",
            orientation: "landscape",
            disableAnimations: true,
            disableSuccessBeep: false // iOS and Android
        };
        this.barcodeScanner.scan(options).then(function (barcodeData) {
            console.log('Barcode data', barcodeData);
            alert("We got a barcode\n" +
                "Result: " + barcodeData.text + "\n" +
                "Format: " + barcodeData.format + "\n" +
                "Cancelled: " + barcodeData.cancelled);
        }).catch(function (err) {
            console.log('Error', err);
            alert("Scanning failed: " + err);
        });
    };
    BarcodeScannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'barcode-scanner',template:/*ion-inline-start:"D:\tryThis\ionicProject\src\components\barcode-scanner\barcode-scanner.html"*/'\n\n	<button ion-button round full (tap)="prepareBarcodeScanner()">\n      barcode scanner\n    </button>'/*ion-inline-end:"D:\tryThis\ionicProject\src\components\barcode-scanner\barcode-scanner.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */]])
    ], BarcodeScannerComponent);
    return BarcodeScannerComponent;
}());

//# sourceMappingURL=barcode-scanner.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaCaptureComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__media_capture__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MediaCaptureComponentModule = /** @class */ (function () {
    function MediaCaptureComponentModule() {
    }
    MediaCaptureComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__media_capture__["a" /* MediaCaptureComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__media_capture__["a" /* MediaCaptureComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__media_capture__["a" /* MediaCaptureComponent */]
            ]
        })
    ], MediaCaptureComponentModule);
    return MediaCaptureComponentModule;
}());

//# sourceMappingURL=media-capture.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaCaptureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_media_capture__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MEDIA_FILES_KEY = 'mediaFiles';
var MediaCaptureComponent = /** @class */ (function () {
    function MediaCaptureComponent(mediaCapture, storage, file, sanitizer) {
        this.mediaCapture = mediaCapture;
        this.storage = storage;
        this.file = file;
        this.sanitizer = sanitizer;
        this.mediaFiles = [];
    }
    MediaCaptureComponent.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get(MEDIA_FILES_KEY).then(function (res) {
            _this.mediaFiles = JSON.parse(res) || [];
            console.log(_this.mediaFiles);
        });
    };
    MediaCaptureComponent.prototype.captureVideo = function () {
        var _this = this;
        var options = {
            limit: 1,
            duration: 30
        };
        this.mediaCapture.captureVideo(options).then(function (res) {
            var capturedFile = res[0];
            console.log(capturedFile);
            var fileName = capturedFile.name;
            var dir = capturedFile['fullPath'].split('/');
            dir.pop();
            var fromDirectory = dir.join('/');
            var toDirectory = cordova.file.dataDirectory;
            _this.file.copyFile(fromDirectory, fileName, toDirectory, fileName).then(function (res) {
                console.log(res.nativeURL);
                _this.storeMediaFiles([{ name: fileName, size: capturedFile.size }]);
            }, function (err) {
                console.log('err: ', err);
            });
        }, function (err) { return console.error(err); });
    };
    MediaCaptureComponent.prototype.play = function (myFile) {
        // let path = cordova.file.dataDirectory + myFile.name;
        // console.log(path);
        // let url = path.replace(/^file:\/\//, '');
        // let video = this.myVideo.nativeElement;
        // console.log(url);
        // video.src = normalizeURL(url);
        // video.play();
        var _this = this;
        this.file.checkFile(cordova.file.dataDirectory, myFile.name).then(function (correct) {
            if (correct) {
                _this.file.readAsDataURL(cordova.file.dataDirectory, myFile.name).then(function (base64) {
                    _this.source = _this.sanitizer.bypassSecurityTrustUrl(base64);
                    _this.bo_html5 = true;
                    var video = _this.myVideo.nativeElement;
                    console.log(_this.source);
                    video.src = _this.source;
                    video.play();
                }).catch(function (err) {
                    console.log("VIDEO :: No se pudo recuperar el video");
                    console.log(err);
                });
            }
            else {
                console.log("VIDEO :: El video no pudo ser encontrado");
            }
        }).catch(function (err) {
            console.log("VIDEO :: Ocurrio un error al verificar si el video existe");
            console.log(err);
        });
    };
    MediaCaptureComponent.prototype.storeMediaFiles = function (files) {
        var _this = this;
        this.storage.get(MEDIA_FILES_KEY).then(function (res) {
            if (res) {
                var arr = JSON.parse(res);
                arr = arr.concat(files);
                _this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
            }
            else {
                _this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files));
            }
            console.log(files);
            _this.mediaFiles = _this.mediaFiles.concat(files);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myvideo'),
        __metadata("design:type", Object)
    ], MediaCaptureComponent.prototype, "myVideo", void 0);
    MediaCaptureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'media-capture',template:/*ion-inline-start:"D:\tryThis\ionicProject\src\components\media-capture\media-capture.html"*/'<button ion-button full (click)="captureVideo()">Capture Video</button>\n\n<ion-list>\n  <ion-item *ngFor="let file of mediaFiles" tappable (click)="play(file)" text-wrap>\n    {{ file.name }}\n    <p>{{ file.size / 1000 / 1000 | number }} MB</p>\n  </ion-item>\n</ion-list>\n\n<video controls autoplay src="assets/imgs/VID_20180815_102424.mp4" width="560" height="315" allowfullscreen preload="metadata" webkit-playsinline="webkit-playsinline" type=\'video/mp4\'></video>\n\n<div data-tap-disable="true" *ngIf="bo_html5  && source!=null">\n<video controls allow="autoplay; encrypted-media" width="560" height="315" allowfullscreen playsinline>\n  <source [src]="source" type="video/mp4"></video>\n</div>\n\n<!-- <iframe width="560" height="315" #myvideo frameborder="0" allow="autoplay; encrypted-media" controls allowfullscreen></iframe> -->\n'/*ion-inline-end:"D:\tryThis\ionicProject\src\components\media-capture\media-capture.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_media_capture__["a" /* MediaCapture */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]])
    ], MediaCaptureComponent);
    return MediaCaptureComponent;
}());

//# sourceMappingURL=media-capture.js.map

/***/ })

});
//# sourceMappingURL=0.js.map