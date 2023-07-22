import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketUpdateReq } from 'app/core/data/model/request/tikcerRegisterReq';
import { CategoriaService } from 'app/core/services/categoria.service';
import { RequisicionService } from 'app/core/services/requisicion.service';
import { TicketsService } from 'app/core/services/tickets.service';
import { LocalStorageService } from 'app/shared/Services/LocalStorage.services';
import { ToastNofiferServices } from 'app/shared/Services/ToastNotifier.service';


interface Prioridad {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-ticket-update',
  templateUrl: './ticket-update.component.html',
  styleUrls: ['./ticket-update.component.scss']
})
export class TicketUpdateComponent implements OnInit {

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

  requisicionSelect: any;
  categoriaSelect: any;
  listaEstadosValidos: any;

  constructor(private _requisicionService: RequisicionService,
    private _categoriaService: CategoriaService,
    private _ticket: TicketsService,
    private storage: LocalStorageService,
    private route: Router,
    private fb: FormBuilder,
    private ngxToastService: ToastNofiferServices) { }

  ngOnInit(): void {
    this.getListarRequisicion();
    this.listarEstados();
    let ticket = JSON.parse(this.storage.getData('TicketActualizar'));
    //console.log(ticket);
    this.form = this.fb.group({
      idTicket: new FormControl(ticket.idTicket, [Validators.required]),
      estado: new FormControl(ticket.estado, [Validators.required]),
      descripcion: new FormControl(ticket.descripcion, [Validators.required]),
      fechaCierre: new FormControl(ticket.fechaCierre, [Validators.required]),
      prioridad: new FormControl(ticket.prioridad, [Validators.required]),
      requision: new FormControl(ticket.idTipo, [Validators.required]),
      categoria: new FormControl(ticket.idCategoria, [Validators.required]),
      idUsuario: new FormControl(ticket.idUsuario, [Validators.required]),
    });
    // console.log('idCategoria => ' + ticket.idCategoria);
    // console.log('idTipo => ' + ticket.idTipo);
    this.getListarCategoria(ticket.idTipo);
    //console.log(this.form);
    this.storage.removeData('TicketActualizar');
  }

  getListarRequisicion() {
    this._requisicionService.listarCategoria().subscribe({
      next: Result => {
        if (Result.status) {
          this.requisicionSelect = Result.data;
        }
      }
    })
  }

  getListarCategoria(tipoId: number) {
    this._categoriaService.listarCategoria(tipoId).subscribe({
      next: Result => {
        if (Result.status) {
          this.categoriaSelect = Result.data;
        }
      }
    });
  }

  requisicionSelectChanged(e) {
    let tipoId = e as number;
    this.getListarCategoria(tipoId);
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

  procesarActualizacion() {
    let request = new TicketUpdateReq();
    request.estado = this.form.value.estado;
    request.descripcion = this.form.value.descripcion;
    request.idTicket = this.form.value.idTicket;
    request.fechaCierre = this.form.value.fechaCierre;
    request.prioridad = this.form.value.prioridad;
    request.idTipo = this.form.value.requision;
    request.idCategoria = this.form.value.categoria;
    request.idUsuario = this.form.value.idUsuario;
    console.log(request);
    
    this._ticket.actualizarTicket(request).subscribe({
      next: response => {
        if (response.status) {
          this.ngxToastService.Success('Se actualizo ticket', response.message);
          setTimeout(() => {
            this.route.navigate(["ticket"]);
          }, 4000);
        } else {
          this.ngxToastService.Warning('Se actualizo ticket', "Error al registrar los datos",)
        }
      }
    });
  }
}
