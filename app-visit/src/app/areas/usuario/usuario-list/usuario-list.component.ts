import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColaboradorModelResponse } from 'app/core/data/model/response/colaborador.model';
import { ColaboradorService } from 'app/core/services/colaborador.service';
import { LocalStorageService } from 'app/shared/Services/LocalStorage.services';
import { ToastNofiferServices } from 'app/shared/Services/ToastNotifier.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.scss']
})
export class UsuarioListComponent implements OnInit {

  datosColaborador: any;

  constructor(
    private colabServices: ColaboradorService,
    private ngxToastService: ToastNofiferServices,
    private storage: LocalStorageService,
    private route: Router) { }

  ngOnInit(): void {
    this.listaColaborador();
  }

  listaColaborador() {
    this.colabServices.listarColab().subscribe(
      (response: any) => {
        this.datosColaborador = response.data;
      }
    )
  }
  
  obtenerColaborador(colabId: number, usuarioId: number) {
    this.colabServices.obtenerColab(colabId, usuarioId).subscribe(
      (response: ColaboradorModelResponse) => {
        if (response.status) {
          this.storage.saveData("ColabActualizar", JSON.stringify(response.data));
          this.route.navigate(["usuario-update"]);
        } else {
          this.ngxToastService.Warning('Obtener Colaborador', "No se encontaron datos del colaborador",)
        }
      },
      (error) => this.ngxToastService.Danger('Deshabilitar Colaborador', "Error al deshabilitar al colaborador seleccionado")

    );
  }

  deshabilitarColaborador(colabId: number) {
    debugger;
    this.colabServices.deshabilitarColab(colabId).subscribe(
      {
        next: ColaboradorModelResponse => {
          if (ColaboradorModelResponse.status) {
            this.ngxToastService.Success('Deshabilitar Colaborador', ColaboradorModelResponse.message);
          } else {
            this.ngxToastService.Warning('Deshabilitar Colaborador', "Error al registrar los datos")
          }
        },
        error: err => {
          console.error(err);
          this.ngxToastService.Danger('Deshabilitar Colaborador', "Error al deshabilitar al colaborador seleccionado")
        }
      }
    )
  }

}