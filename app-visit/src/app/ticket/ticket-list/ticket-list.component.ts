import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {
  activatedRoute: ActivatedRoute;

  constructor(public route: Router) { }

  ngOnInit(): void {
  }

  agregarNuevoTicker(){
    this.route.navigate(['../ticket-create'],{relativeTo: this.activatedRoute})
  }
}
