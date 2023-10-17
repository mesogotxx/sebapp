import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-rc-validarcorreo',
  templateUrl: './rc-validarcorreo.page.html',
  styleUrls: ['./rc-validarcorreo.page.scss'],
})
export class RcValidarcorreoPage implements OnInit {

  constructor(public menuCtrl: MenuController,) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

}
