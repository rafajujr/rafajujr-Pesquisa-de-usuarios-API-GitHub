import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  username: string = '';
  logo: string = 'Pesquisa de Perfil do gitHub';

  constructor(private route: Router) {}

  pesquisarUser() {
    if(this.username) {
      this.route.navigate(['/perfil', this.username]);
    } else {
      this.route.navigate(['/perfil', '']);
    }
  }
}
