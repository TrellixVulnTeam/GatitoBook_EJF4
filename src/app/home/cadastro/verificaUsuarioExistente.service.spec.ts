/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VerificaUsuarioExistenteService } from './verificaUsuarioExistente.service';

describe('Service: VerificaUsuarioExistente', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerificaUsuarioExistenteService]
    });
  });

  it('should ...', inject([VerificaUsuarioExistenteService], (service: VerificaUsuarioExistenteService) => {
    expect(service).toBeTruthy();
  }));
});
