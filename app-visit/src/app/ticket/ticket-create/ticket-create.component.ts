import { Component, OnInit } from '@angular/core';

interface Prioridad {
  value: string;
  viewValue: string;
}

interface Requisision {
  value: string;
  viewValue: string;
}
interface Estados {
  value: string;
  viewValue: string;
}



interface Categoria {
  value: string;
  viewValue: string;
}


interface Prioridad {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.scss']
})
export class TicketCreateComponent implements OnInit {
  selectedValue: String;
  selectedReqValue: String;
  selectedCatValue: String;
  selectedEstadoValue: String;

  prioridads: Prioridad[] = [
    {value: 'steak-0', viewValue: 'Alta'},
    {value: 'pizza-1', viewValue: 'Media'},
    {value: 'tacos-2', viewValue: 'Baja'},
  ];

  requisicionSelec: Requisision[] = [
    {value: 'steak-0', viewValue: 'requision 01'},
    {value: 'pizza-1', viewValue: 'requision 02'},
    {value: 'tacos-2', viewValue: 'requision 03'},
  ];

  categoriaSelec: Categoria[] = [
    {value: 'steak-0', viewValue: 'Categoria 01'},
    {value: 'pizza-1', viewValue: 'Categoria 02'},
    {value: 'tacos-2', viewValue: 'Categoria 03'},
  ];

  estadosSelec: Estados[] = [
    {value: 'steak-0', viewValue: 'Estado 01'},
    {value: 'pizza-1', viewValue: 'Estado 02'},
    {value: 'tacos-2', viewValue: 'Estado 03'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
