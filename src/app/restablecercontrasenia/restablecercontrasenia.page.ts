import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-restablecercontrasenia',
  templateUrl: './restablecercontrasenia.page.html',
  styleUrls: ['./restablecercontrasenia.page.scss'],
})
export class RestablecercontraseniaPage implements OnInit {

  constructor(public menuCtrl: MenuController,) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

}
