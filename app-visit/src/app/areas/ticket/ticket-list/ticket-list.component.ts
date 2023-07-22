import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastNofiferServices } from 'app/shared/Services/ToastNotifier.service';
import { LocalStorageService } from 'app/shared/Services/LocalStorage.services';
import { TicketsService } from '../../../core/services/tickets.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  activatedRoute: ActivatedRoute;
  tikeList : any;

  constructor( private ngxToastService: ToastNofiferServices,
              private ticketServices : TicketsService,
              private storage: LocalStorageService,
              private route: Router) { }

  ngOnInit(): void {
    this.listaTickets();
  }

  agregarNuevoTicker(){
    this.route.navigate(['../ticket-create'],{relativeTo: this.activatedRoute})
  }

  listaTickets(){
    this.ticketServices.listarTicket().subscribe(
      (response: any) => {
        this.tikeList = response.data;
      }
    )
  }

  obtenerTicket(idTicket: number){
   
    this.ticketServices.obtenerTicket(idTicket).subscribe(
      {
        next: response => {
          if (response.status) {          
            this.storage.saveData("TicketActualizar", JSON.stringify(response.data));
            this.route.navigate(["ticket-update"]);
          }
        }
      }
    );
  }

  


}
