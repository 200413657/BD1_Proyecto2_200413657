import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../../services/preguntas.service';
import { EncuestaService } from '../../services/encuesta.service';
import { PreguntaModel } from '../../models/PreguntasModel';
@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
pregunta:PreguntaModel={
  id:'',
  PREGUNTA:'',
  id_encuesta:''
};

encuestas:any = [];
  constructor(private preguntasService:PreguntasService, private encuestaService:EncuestaService) { }

  ngOnInit(): void {
    this.encuestaService.getEncuestas().subscribe(
      res=>{this.encuestas=res}
      ,err =>console.error(err)
    );
  }
  saveNewPais(){
    /*var a = (document.getElementById("idRegion")) as HTMLSelectElement;
    var e = a.selectedIndex;
    this.pais.id_region= e.toString();
    console.log(this.pais);
    */
    this.preguntasService.savePregunta(this.pregunta).subscribe(
      res=>{console.log(res)},
      err=> console.error(err)
    );
  }
}
