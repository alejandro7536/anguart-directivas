import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <h3>
      Usuario-nuevo works!
    </h3>
    parametro: {{parametro}}
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  parametro: string;

  constructor(
    private ar: ActivatedRoute
  ) {
    this.ar.parent.params.subscribe(params => {
      console.log(params);
      this.parametro = params.id;
    });
  }

  ngOnInit(): void {
  }

}
