import { Component, OnInit } from '@angular/core';
import { Cidade } from 'src/app/services/cidade';
import { CidadeService } from 'src/app/services/cidade-service';


@Component({
  selector: 'app-cidade-primeng',
  templateUrl: './cidade-primeng.component.html',
  styleUrls: ['./cidade-primeng.component.css']
})
export class CidadePrimengComponent implements OnInit {
  cidades: Cidade[] = new Array();  
  

  constructor(private cidadesService: CidadeService) { }

  ngOnInit() {
      this.cidadesService.list().subscribe(response => this.cidades = response)
      
  }
}

