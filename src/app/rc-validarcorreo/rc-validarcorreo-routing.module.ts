import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RcValidarcorreoPage } from './rc-validarcorreo.page';

const routes: Routes = [
  {
    path: '',
    component: RcValidarcorreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RcValidarcorreoPageRoutingModule {}
