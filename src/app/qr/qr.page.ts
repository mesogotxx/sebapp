import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H' = 'M';
  qrData: string = '';  

  constructor() { }

  ngOnInit() {
   
  }

  generarQR() {
    this.qrData = 'https://usuario15.talleresmelipilla.cl/';
  }
}





