import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColaboradorActualizarRequest } from 'app/core/data/model/request/colaboradorRegisterReq';
import { ColaboradorModelResponse } from 'app/core/data/model/response/colaborador.model';
import { ColaboradorService } from 'app/core/services/colaborador.service';
import { LocalStorageService } from 'app/shared/Services/LocalStorage.services';
import { ToastNofiferServices } from 'app/shared/Services/ToastNotifier.service';


interface AreasModel {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-usuario-actualizar',
  templateUrl: './usuario-actualizar.component.html',
  styleUrls: ['./usuario-actualizar.component.scss']
})
export class UsuarioActualizarComponent implements OnInit {

  form: FormGroup;

  areas: AreasModel[] = [
    { value: 'Finanzas', viewValue: 'Finanzas' },
    { value: 'Contabilidad', viewValue: 'Contabilidad' },
    { value: 'Sistemas', viewValue: 'Sistemas' },
    { value: 'RR.HH', viewValue: 'RR.HH' },
    { value: 'Administracion', viewValue: 'Administracion' },
  ];

  listaAdministrador: Array<String | string> = ["Si", "No"]

  constructor(
    private colabServices: ColaboradorService,
    private storage: LocalStorageService,
    private route: Router,
    private fb: FormBuilder,
    private ngxToastService: ToastNofiferServices) { }

  ngOnInit(): void {
    let colaboradorEdit = JSON.parse(this.storage.getData('ColabActualizar')) ;
    this.form = this.fb.group({
      codempleado: new FormControl( colaboradorEdit.codEmpleado, [Validators.required]),
      estado: new FormControl( colaboradorEdit.estado, [Validators.required]),
      password: new FormControl( colaboradorEdit.password, [Validators.required]),
      usuario: new FormControl( colaboradorEdit.usuario, [Validators.required]),
      idColaborador: new FormControl( colaboradorEdit.idColaborador, [Validators.required]),
      idUsuario: new FormControl( colaboradorEdit.idUsuario, [Validators.required]),
      nombre: new FormControl( colaboradorEdit.nombre, [Validators.required]),
      apellido: new FormControl( colaboradorEdit.apellido, [Validators.required]),
      area: new FormControl( colaboradorEdit.area, [Validators.required]),
      nroIntentos: new FormControl( colaboradorEdit.nroIntentos, [Validators.required]),
      administador: new FormControl( colaboradorEdit.administador === true ? 'Si': 'No', [Validators.required]),
    });
    this.storage.removeData('ColabActualizar');
  }

  actualizarColab(){
    debugger;
    let colab = new ColaboradorActualizarRequest();
    colab.administador = this.form.value.administador === 'Si' ? true: false;
    colab.apellido =this.form.value.apellido;
    colab.nombre =this.form.value.nombre;
    colab.clave =this.form.value.password;
    colab.area =this.form.value.area.value;
    colab.usuario =this.form.value.usuario;
    colab.codigo =this.form.value.codempleado;
    colab.activo =this.form.value.estado;
    colab.idColaborador =this.form.value.idColaborador;
    colab.idUsuario =this.form.value.idUsuario;
    colab.nroIntentos =this.form.value.nroIntentos;
    console.log(colab);
    this.colabServices.actualizarColab(colab).subscribe(
      (response: ColaboradorModelResponse)=> {
        if(response.status){            
            this.ngxToastService.Success('Actualizar Colaborador', response.message); 
            setTimeout(() =>{ 
              this.route.navigate(["usuario"]);
            }, 4000);
        }else{
          this.ngxToastService.Warning('Actualizar Colaborador',"Error al registrar los datos",)
        }       
      },
      (error)=> {
        this.ngxToastService.Danger('Actualizar Colaborador',"Error al registrar los datos")
      }
    )



  }


}
