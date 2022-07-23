import { VerificaUsuarioExistenteService } from './verificaUsuarioExistente.service';
import { CadastroService } from './cadastro.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Cadastro } from './cadastro';
import { senhaValidator } from './validators/senha-validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cadastroService: CadastroService,
    private usuarioExistenteService: VerificaUsuarioExistenteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: ['', [Validators.required], [this.usuarioExistenteService.usuarioJaExiste()]],
        password: ['', [Validators.required]],
      },
      {
        validators: [senhaValidator],
      }
    );
  }

  cadastrar() {
    if (this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as Cadastro;
      this.cadastroService.cadastraUsuario(novoUsuario).subscribe(
        () => {
          this.router.navigate(['']);
        }
      )
    }
  }
}
