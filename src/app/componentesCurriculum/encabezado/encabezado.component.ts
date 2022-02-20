import { Component, OnInit } from '@angular/core';
import { ServiCurriculumService } from 'src/app/servicios/servi-curriculum.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor (private datosCurriculum:ServiCurriculumService) { }

  ngOnInit(): void {
    this.datosCurriculum.obtenerDatos().subscribe(data=>{
      console.log(data);
    });
  }

}
