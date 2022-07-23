import { AnimaisService } from './../animais.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../Animal';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-animais',
  templateUrl: './detalhe-animais.component.html',
  styleUrls: ['./detalhe-animais.component.css']
})
export class DetalheAnimaisComponent implements OnInit {

  animalId !: number;
  animal$ !: Observable<Animal>;

  constructor(private animaisService: AnimaisService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.animalId = this.activatedRoute.snapshot.params.animalId;
    this.animal$ = this.animaisService.buscarPorId(this.animalId);

  }

  curtir(){
    this.animaisService.curtir(this.animalId).subscribe((curtida) => {
      if(curtida){
        this.animal$ = this.animaisService.buscarPorId(this.animalId);
      }
    })
  }

  excluir(){
    this.animaisService.excluirAnimal(this.animalId).subscribe(() => {
      this.router.navigate(['/animais/'])
    }, (error) => console.log(error))
  }

}
