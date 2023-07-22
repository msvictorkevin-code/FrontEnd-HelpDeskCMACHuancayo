import { Component, OnInit } from '@angular/core';
import { RequisicionService } from '../../../core/services/requisicion.service';
import { CategoriaService } from '../../../core/services/categoria.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastNofiferServices } from 'app/shared/Services/ToastNotifier.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { TicketsService } from 'app/core/services/tickets.service';

interface Prioridad {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.scss']
})
export class TicketCreateComponent implements OnInit {

  form: FormGroup;
  selectedValue: String;
  selectedReqValue: String;
  selectedCatValue: String;
  selectedEstadoValue: String;
  
  prioridads: Prioridad[] = [
    { value: 1, viewValue: 'Alta' },
    { value: 2, viewValue: 'Media' },
    { value: 3, viewValue: 'Baja' },
  ];

  requisicionSelect: any=[];
  categoriaSelect: any=[];
  listaEstadosValidos : any=[];

  constructor(private _requisicionService: RequisicionService,
              private _categoriaService: CategoriaService,
              private _ticket: TicketsService,
              private route: Router,
              private fb: FormBuilder,
              private ngxToastService: ToastNofiferServices) { }

  ngOnInit(): void {
    this.getListarRequisicion();
    this.listarEstados();
    this.CreateFisrtForm();
  }

  CreateFisrtForm() {
    this.form = this.fb.group({
      estado: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
      fechaCierre: new FormControl('', [Validators.required]),
      prioridad: new FormControl('', [Validators.required]),
      requisision: new FormControl('', [Validators.required]),
      categoria: new FormControl('', [Validators.required])
    });
  }
  

  registrarTicker(){

  }


  getListarRequisicion() {
    this._requisicionService.listarCategoria().subscribe({
        next : Result => {
          if (Result.status) {
            this.requisicionSelect = Result.data;
          }
        }
    })
  }

  requisicionSelectChanged(e){
    let tipoId = e as number ;
     console.log('tipoId => ' + tipoId);
     this.getListarCategoria(tipoId);
  }
  
  getListarCategoria(tipoId: number){
    this._categoriaService.listarCategoria(tipoId).subscribe({
      next : Result => {
        console.log(Result);        
        if (Result.status) {
          this.categoriaSelect = Result.data;
        }
      }
    });
  }

  
  

  listarEstados() {
    this._ticket.listarEstados().subscribe({
      next: Result => {
        if (Result.status) {          
          this.listaEstadosValidos = Result.data;
        }
      }
    });
  }

}
