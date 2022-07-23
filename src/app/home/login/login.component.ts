import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = '';
  senha = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.authService.autenticar(this.email, this.senha).subscribe(
      () => {
        this.router.navigate(['animais']);
      },
      (error) => {
        alert('Usuário ou senha inválido.');
        console.log(error);
        this.email = "";
        this.senha = "";
      }
    );
  }
}
