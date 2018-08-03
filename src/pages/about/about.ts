import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from "@ionic-native/device";
import { Camera, CameraOptions  } from "@ionic-native/camera";
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  uuid = "";
  base64Image = ""
  constructor(public navCtrl: NavController, private device: Device, private camera: Camera, private qrScanner: QRScanner) {
    console.log('device UUID is: ' + this.device.uuid)
  }
  checkUUID() {
    this.uuid = this.device.uuid
  }
  showCamera(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      saveToPhotoAlbum: true
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  // Optionally request the permission early

  QRScanser() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted


          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);

            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });

        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

}
