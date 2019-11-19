import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro2',
  templateUrl: './registro2.component.html',
  styleUrls: ['./registro2.component.css']
})
export class Registro2Component implements OnInit {
  nombre = new FormControl('');
  apellido = new FormControl('');
  IDCode = new FormControl('');
  BTN = new FormControl('');
  IDEthereum = new FormControl('');
  Fecha = new FormControl('');
  Email = new FormControl('');
  form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
