import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestablecercontraseniaPageRoutingModule } from './restablecercontrasenia-routing.module';

import { RestablecercontraseniaPage } from './restablecercontrasenia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestablecercontraseniaPageRoutingModule
  ],
  declarations: [RestablecercontraseniaPage]
})
export class RestablecercontraseniaPageModule {}
