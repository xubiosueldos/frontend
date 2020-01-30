import { ReactiveFormsModule } from '@angular/forms';
import { FormulaListContainer } from './containers/formula-list/formula-list.container';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulaContainer } from './containers/formula/formula.container';

const routes: Routes = [
  {
    path: '',
    component: FormulaListContainer
  },
  {
    path: 'create',
    component: FormulaContainer
  },
  {
    path: 'edit/:id',
    component: FormulaContainer
  }
];

@NgModule({
  declarations: [FormulaListContainer, FormulaContainer],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FormulasContainerModule {}
