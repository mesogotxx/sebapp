import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RcContranuevaPage } from './rc-contranueva.page';

const routes: Routes = [
  {
    path: '',
    component: RcContranuevaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RcContranuevaPageRoutingModule {}
