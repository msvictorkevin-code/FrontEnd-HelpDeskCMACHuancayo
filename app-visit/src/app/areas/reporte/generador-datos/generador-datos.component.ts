import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketReportReq } from 'app/core/data/model/request/tikcerRegisterReq';
import { CategoriaService } from 'app/core/services/categoria.service';
import { ColaboradorService } from 'app/core/services/colaborador.service';
import { RequisicionService } from 'app/core/services/requisicion.service';
import { TicketsService } from 'app/core/services/tickets.service';
import { LocalStorageService } from 'app/shared/Services/LocalStorage.services';
import { ToastNofiferServices } from 'app/shared/Services/ToastNotifier.service';

@Component({
  selector: 'app-generador-datos',
  templateUrl: './generador-datos.component.html',
  styleUrls: ['./generador-datos.component.scss']
})

export class GeneradorDatosComponent {

  form: FormGroup;

  selectedValue: String;
  selectedReqValue: String;
  selectedCatValue: String;
  selectedEstadoValue: String;
  selectedUsuarioValue: String;
  ticketReportdReq: any;

  requisicionSelect: any;
  categoriaSelect: any;
  listaUsuarios: any;
  listaEstadosValidos: any;
  listaFiltro: any[] = Array<any>();
  constructor(private _requisicionService: RequisicionService,
    private _categoriaService: CategoriaService,
    private _colab: ColaboradorService,
    private storage: LocalStorageService,
    private _ticket: TicketsService,
    private fb: FormBuilder,
    private ngxToastService: ToastNofiferServices) { }

  ngOnInit(): void {
    this.cargarDataIniciales();
  }

  exportarExcel() {
    let ticketReportReqd = new TicketReportReq();
    ticketReportReqd.idTicket = this.form.value.ticket === undefined || this.form.value.ticket === '' ? null : this.form.value.ticket;
    ticketReportReqd.estado = this.form.value.estado === undefined || this.form.value.estado === '' ? null : this.form.value.estado;
    ticketReportReqd.fechaInicio = this.form.value.fechaDesde === undefined || this.form.value.fechaDesde === '' ? null : this.form.value.fechaDesde
    ticketReportReqd.fechaFin = this.form.value.fechaHasta === undefined || this.form.value.fechaHasta === '' ? null : this.form.value.fechaHasta
    ticketReportReqd.idTipo = this.form.value.requisicion === undefined || this.form.value.requisicion === '' ? null : this.form.value.requisicion
    ticketReportReqd.idCategoria = this.form.value.categoria === undefined || this.form.value.categoria === '' ? null : this.form.value.categoria
    ticketReportReqd.idUsuario = this.form.value.asginado === undefined || this.form.value.asginado === '' ? null : this.form.value.asginado

    this._ticket.crearReporteExcel(ticketReportReqd).subscribe({
      next: Result => {
        const date = new Date();
        let filename = 'REPROTE_EXCEL_' + date.toLocaleDateString() + '.xlsx'
        let blob: Blob = Result.body as Blob;
        this.blobToSaveAs(filename, blob);
      }
    });
  }

  exportarPdf() {
    let ticketReportReqd = new TicketReportReq();
    ticketReportReqd.idTicket = this.form.value.ticket === undefined || this.form.value.ticket === '' ? null : this.form.value.ticket;
    ticketReportReqd.estado = this.form.value.estado === undefined || this.form.value.estado === '' ? null : this.form.value.estado;
    ticketReportReqd.fechaInicio = this.form.value.fechaDesde === undefined || this.form.value.fechaDesde === '' ? null : this.form.value.fechaDesde
    ticketReportReqd.fechaFin = this.form.value.fechaHasta === undefined || this.form.value.fechaHasta === '' ? null : this.form.value.fechaHasta
    ticketReportReqd.idTipo = this.form.value.requisicion === undefined || this.form.value.requisicion === '' ? null : this.form.value.requisicion
    ticketReportReqd.idCategoria = this.form.value.categoria === undefined || this.form.value.categoria === '' ? null : this.form.value.categoria
    ticketReportReqd.idUsuario = this.form.value.asginado === undefined || this.form.value.asginado === '' ? null : this.form.value.asginado
    this._ticket.crearReportePdf(ticketReportReqd).subscribe({
      next: Result => {
        const date = new Date();
        let filename = 'REPROTE_PDF_' + date.toLocaleDateString() + '.pdf'
        let blob: Blob = Result.body as Blob;
        this.blobToSaveAs(filename, blob);
      }
    });
  }

  filtrarProceso() {
    let ticketReportReqd = new TicketReportReq();
    ticketReportReqd.idTicket = this.form.value.ticket === undefined || this.form.value.ticket === '' ? null : this.form.value.ticket;
    ticketReportReqd.estado = this.form.value.estado === undefined || this.form.value.estado === '' ? null : this.form.value.estado;
    ticketReportReqd.fechaInicio = this.form.value.fechaDesde === undefined || this.form.value.fechaDesde === '' ? null : this.form.value.fechaDesde
    ticketReportReqd.fechaFin = this.form.value.fechaHasta === undefined || this.form.value.fechaHasta === '' ? null : this.form.value.fechaHasta
    ticketReportReqd.idTipo = this.form.value.requisicion === undefined || this.form.value.requisicion === '' ? null : this.form.value.requisicion
    ticketReportReqd.idCategoria = this.form.value.categoria === undefined || this.form.value.categoria === '' ? null : this.form.value.categoria
    ticketReportReqd.idUsuario = this.form.value.asginado === undefined || this.form.value.asginado === '' ? null : this.form.value.asginado
    console.log(ticketReportReqd);
    this._ticket.busquedaReporte(ticketReportReqd).subscribe({
      next: Result => {
        if (Result.status) {
          console.log(Result.data);
          this.listaFiltro = Result.data;
        }
      }
    });
  }

  blobToSaveAs(fileName: string, blob: Blob) {

    try {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      if (link.download !== undefined) { // feature detection
        link.setAttribute('href', url);
        link.setAttribute('download', fileName);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (e) {
      console.error('BlobToSaveAs error', e);
    }
  }

  cargarDataIniciales() {
    this.CreateFisrtForm();
    this.getListarRequisicion();
    this.listarUsuarios();
    this.listarEstados();
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

  CreateFisrtForm() {
    this.form = this.fb.group({
      ticket: new FormControl(''),
      estado: new FormControl(''),
      categoria: new FormControl(''),
      requisicion: new FormControl(''),
      fechaDesde: new FormControl(''),
      fechaHasta: new FormControl(''),
      asginado: new FormControl('')
    });
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

  listarUsuarios() {
    this._colab.listaUsuario().subscribe({
      next: Result => {
        if (Result.status) {
          this.listaUsuarios = Result.data;
        }
      }
    });
  }

  cancelarProceso() {
    this.CreateFisrtForm();
    this.listaFiltro = [];
  }
}
