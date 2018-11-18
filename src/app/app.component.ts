import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http:HttpService){
    this.loadView();
  }

  logoImg = "https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
  notice = "O clima está ruim lá fora!";
  headerMenus = ["Cadastros", "Movimentos", "Estatísticas"];

  loadView(){
    this.http.get("https://geek-jokes.sameerkumar.website/api").subscribe(r => this.notice = r.toString());
  }
  
}

