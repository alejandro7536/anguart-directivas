import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent implements OnInit {

  alerta = 'alert-danger';
  loading = false;
  guardado = false;

  propiedades  = {
    danger: true
  };

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    this.loading = true;
    this.guardado = false;
    setTimeout(() => {
      this.loading = false;
      this.guardado = true;
    }, 3000);
  }

}
