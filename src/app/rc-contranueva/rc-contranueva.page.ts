import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-rc-contranueva',
  templateUrl: './rc-contranueva.page.html',
  styleUrls: ['./rc-contranueva.page.scss'],
})
export class RcContranuevaPage implements OnInit {

  constructor(public menuCtrl: MenuController,) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

}
