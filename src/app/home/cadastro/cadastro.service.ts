import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Cadastro } from './cadastro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private httpclient : HttpClient) { }

  cadastraUsuario(novoUsuario: Cadastro){
    return this.httpclient.post(`${API}/user/signup`, novoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario: string){
    return this.httpclient.get(`${API}/user/exists/${nomeUsuario}`);
  }
}
