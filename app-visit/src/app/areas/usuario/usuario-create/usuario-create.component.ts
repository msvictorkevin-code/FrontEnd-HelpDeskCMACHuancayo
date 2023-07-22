import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColaboradorRequest } from 'app/core/data/model/request/colaboradorRegisterReq';
import { ColaboradorModelResponse } from 'app/core/data/model/response/colaborador.model';
import { UsuarioModelResponse } from 'app/core/data/model/response/usuario.model';
import { ColaboradorService } from 'app/core/services/colaborador.service';
import { ToastNofiferServices } from 'app/shared/Services/ToastNotifier.service';



interface AreasModel {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.scss']
})



export class UsuarioCreateComponent implements OnInit {

  form: FormGroup;
  isAdmin: string;
  isAreaSelec: string;

  areas: AreasModel[] = [
    { value: 'Finanzas', viewValue: 'Finanzas' },
    { value: 'Contabilidad', viewValue: 'Contabilidad' },
    { value: 'RR.HH', viewValue: 'RR.HH' },
    { value: 'Administracion', viewValue: 'Administracion' },
  ];

  listaAdministrador: Array<String | string> = ["Si", "No"]

  constructor(
    private colabServices: ColaboradorService,
    private route: Router,
    private fb: FormBuilder,
    private ngxToastService: ToastNofiferServices) { }

  ngOnInit(): void {
    this.CreateFisrtForm();
  }

  CreateFisrtForm() {
    this.form = this.fb.group({
      apellido: new FormControl('', [Validators.required]),
      codigo: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  resetForm() {
    this.CreateFisrtForm();
  }

  registrarColaborador() {

    let colabNuevo = new ColaboradorRequest();
    colabNuevo.administador = this.isAdmin === 'Si' ? true : false;
    colabNuevo.apellido = this.form.value.apellido;
    colabNuevo.nombre = this.form.value.nombre;
    colabNuevo.codigo = this.form.value.codigo;
    colabNuevo.clave = this.form.value.password;
    colabNuevo.usuario = this.form.value.email;
    colabNuevo.area = this.form.value.area;

    console.log(colabNuevo);

    this.colabServices.registrarColab(colabNuevo).subscribe(
      (response: ColaboradorModelResponse) => {
        let body = response.data;
        if (response.status) {
          this.resetForm();
          this.ngxToastService.Success('Registrar Colaborador', response.message);
          setTimeout(() => {
            this.route.navigate(["usuario"]);
          }, 2000);
          this.resetForm();
          //
        } else {
          this.ngxToastService.Warning('Registrar Colaborador', "Error al registrar los datos",)
        }
      },
      (error) => {
        this.ngxToastService.Danger('Registrar Colaborador', "Error al registrar los datos")
      }
    )
  }




}
