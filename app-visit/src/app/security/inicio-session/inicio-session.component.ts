import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadServiceService } from 'app/core/services/seguridad.service.service';
import { ToastNofiferServices } from 'app/shared/Services/ToastNotifier.service';

@Component({
  selector: 'app-inicio-session',
  templateUrl: './inicio-session.component.html',
  styleUrls: ['./inicio-session.component.scss']
})
export class InicioSessionComponent implements OnInit {

  form: FormGroup;

  constructor(
    private route: Router,
    private fb: FormBuilder,
    private seguridadServices: SeguridadServiceService,
    private ngxToastService: ToastNofiferServices) { }

  ngOnInit(): void {
    this.CreateFisrtForm();
  }

  CreateFisrtForm() {
    this.form = this.fb.group({
      usuario: new FormControl('', [Validators.required, Validators.maxLength(250)]),
      clave: new FormControl('', [Validators.required])
    });
  }


  iniciarSession() {

    this.seguridadServices.validarCredenciales(this.form.value.usuario, this.form.value.clave).subscribe(
      (response: any) => {
        console.log(response);
        let body = response.data;
        if (body.acceso) {    
          this.ngxToastService.Success('Iniciar Session', response.message) 
          setTimeout(() =>{ 
            this.route.navigate(["dashboard"]);
          }, 4000);
      
        } else {
          this.ngxToastService.Warning('Iniciar Session', response.message)
          this.resetForm();
        }
      },
      (error) => {
        this.ngxToastService.Danger("Error al iniciar Session", 'Iniciar Session')
      }
    )
  }

  resetForm() {
    this.CreateFisrtForm();
  }


}
