import { Injectable } from "@angular/core"
import { NgxToastService } from "ngx-toast-notifier"

@Injectable({
  providedIn: 'root'
})
export class ToastNofiferServices {

  constructor(private ngxToastService: NgxToastService) { }

  Success(titulo: string, message: string): void {
    this.ngxToastService.onSuccess(titulo, message)
  }

  Info(titulo: string, message: string): void {
    this.ngxToastService.onInfo(titulo, message)
  }

  Warning(titulo: string, message: string): void {
    this.ngxToastService.onWarning(titulo, message)
  }

  Danger(titulo: string, message: string): void {
    this.ngxToastService.onDanger(titulo, message)
  }

}