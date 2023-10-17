import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RcContranuevaPageRoutingModule } from './rc-contranueva-routing.module';

import { RcContranuevaPage } from './rc-contranueva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RcContranuevaPageRoutingModule
  ],
  declarations: [RcContranuevaPage]
})
export class RcContranuevaPageModule {}
