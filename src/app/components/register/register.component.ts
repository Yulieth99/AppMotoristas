import { Component, OnInit } from '@angular/core';
import { faFileImage } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  faFileImage = faFileImage;

  constructor() { }

  ngOnInit(): void {
  }

}
