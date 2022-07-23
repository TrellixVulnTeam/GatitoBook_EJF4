import { CadastroService } from './cadastro.service';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VerificaUsuarioExistenteService {
  constructor(private cadastroService: CadastroService) {}

  usuarioJaExiste(){
    return (control:AbstractControl)=>{
      return control.valueChanges.pipe(
        switchMap(
          (nomeUsuario) => this.cadastroService.verificaUsuarioExistente(nomeUsuario)
        ),
        map((usuarioExiste) =>
          usuarioExiste?{ usuarioExistente: true }:null
        ),
        first()
        // encerrar fluxo da validação
      );
    }
  }
}
