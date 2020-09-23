import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <h1>Directivas</h1>
  <hr>
  <div class="card">
    <div class="card-body">
      <app-ng-style></app-ng-style>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-body">
      <app-clases></app-clases>
    </div>
  </div>


  <div class="card mt-3">
    <div class="card-body">
      <h3>Directivas personalizadas</h3>
      <p [appResaltado]="'blue'">Aquí hay una directiva personalizada</p>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-body">
      <app-ng-switch></app-ng-switch>
    </div>
  </div>

  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
