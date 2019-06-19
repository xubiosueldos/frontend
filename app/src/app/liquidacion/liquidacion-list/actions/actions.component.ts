import { Component, AfterViewInit, Inject, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ListaItems, LiquidacionService } from '../../liquidacion.service';
import { Liquidacion } from '../../liquidacion.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  @Input() liquidacion: number;
  @Output() public update = new EventEmitter<Liquidacion>();
  @Output() public delete = new EventEmitter<Liquidacion>();
  numeroLiquidacion: string;
  conductor: string;
  fecha: string;
  tipo: string;

  constructor(
    public dialog: MatDialog,
    private liquidacionService: LiquidacionService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  editItem() {
    this.router.navigate(['/liquidaciones', this.liquidacion]);
  }

  async deleteItem() {
    const item: Liquidacion = {
      ID: this.liquidacion,
      CreatedAt: null,
      UpdatedAt: null,
      DeletedAt: null,
      nombre: null,
      codigo: null,
      descripcion: null,
      activo: null
    }
    
    await this.liquidacionService.deleteLiquidacion(item);
    this.delete.emit(item);
  }
}