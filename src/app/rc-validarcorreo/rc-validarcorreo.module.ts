import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RcValidarcorreoPageRoutingModule } from './rc-validarcorreo-routing.module';

import { RcValidarcorreoPage } from './rc-validarcorreo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RcValidarcorreoPageRoutingModule
  ],
  declarations: [RcValidarcorreoPage]
})
export class RcValidarcorreoPageModule {}
