import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

  appareils = [
    {
      name: "Machine à laver",
      status : "Éteint",
    },
    {
      name: "Portable",
      status : "allumé",
    },
    {
      name: "Ordinateur",
      status : "allumé",
    },
  ];

  statutOn = "Allumé";
  statutOff = "Éteint"

  constructor(){
    setTimeout(() => {
      this.isAuth = true;
    },5000)
  }
  onAllumer(){
    console.log("On allume tous")
  }
}
