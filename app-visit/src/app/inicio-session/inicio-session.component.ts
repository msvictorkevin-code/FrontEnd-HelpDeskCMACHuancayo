import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-session',
  templateUrl: './inicio-session.component.html',
  styleUrls: ['./inicio-session.component.scss']
})
export class InicioSessionComponent implements OnInit {

  constructor(public route : Router) { }

  ngOnInit(): void {

  }

  iniciarSession(){
    this.route.navigate(["dashboard"]);
  }
}
