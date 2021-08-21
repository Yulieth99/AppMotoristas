import { Component, OnInit } from '@angular/core';
import {  faBars, faClipboardList, faCheckCircle, faMotorcycle } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  faBars = faBars;
  faClipboardList = faClipboardList;
  faCheckCircle = faCheckCircle;
  faMotorcycle =faMotorcycle;
  constructor() { }

  ngOnInit(): void {
  }

  cerrarSesion() {
    localStorage.removeItem('token');
  }

}
