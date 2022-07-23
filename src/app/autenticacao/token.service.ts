import { Injectable } from '@angular/core';

const Key = 'token';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  retornaToken(){
    return localStorage.getItem('Key') ?? '';
  }

  salvaToken(token: string){
  localStorage.setItem(Key, token);
  }

  excluiToken(){
    localStorage.removeItem(Key);
  }

  possuiToken(){
    return !! this.retornaToken();
  }
}
