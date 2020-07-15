import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiquidacionComponent } from './liquidacion/liquidacion.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { LiquidacionListComponent } from './liquidacion-list/liquidacion-list.component';
import { LiquidacionListPrintComponent } from './liquidacion-list-print/liquidacion-list-print.component';

const routes: Routes = [
  {
    path: '',
    component: LiquidacionListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'imprimir', 
    component: LiquidacionListPrintComponent 
  },
  {
    path: ':id/:action',
    component: LiquidacionComponent
  },
  {
    path: ':id', 
    component: LiquidacionComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiquidacionRoutingModule { }
