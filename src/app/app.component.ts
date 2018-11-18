import { Component } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logoImg = "https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
  notice = "O clima está ruim lá fora!";
  headerMenus = ["Cadastros", "Movimentos", "Estatísticas"];

  teste(){
    return "hlooweee";
  }
  
}

