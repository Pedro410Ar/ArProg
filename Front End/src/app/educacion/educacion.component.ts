import { Component, OnInit } from '@angular/core';
import { Educacion } from '../educacion';
import { PiterService } from '../piter.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  ListadoAntecedentes: Educacion[] = [new Educacion (1, " ", " ") ]

  constructor(private piter:PiterService) { }

  ngOnInit(): void {
    this.piter.getAll().subscribe(data => this.ListadoAntecedentes = data);
      

    };
  }


