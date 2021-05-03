import { Component, OnInit } from '@angular/core';
import { PreguntasService } from '../../services/preguntas.service';
import { EncuestaService } from '../../services/encuesta.service';
import { PreguntaModel } from '../../models/PreguntasModel';
@Component({
  selector: 'app-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.css']
})
export class SelectFormComponent implements OnInit {

  encuestas:any=[];
  preguntas:any=[];
  pregunta:PreguntaModel={
    id:'',
    PREGUNTA:'',
    id_encuesta:''

  };
  constructor(private preguntasService:PreguntasService, private encuestaService:EncuestaService) { }

  ngOnInit(): void {
    this.encuestaService.getEncuestas().subscribe(
      res=>{this.encuestas=res}
      ,err =>console.error(err)
    );
    this.preguntasService.getPreguntas().subscribe(
      res=>{this.preguntas=res}
      ,err=>console.error(err)
    );
  }

  deletePregunta(id:string){
    var respuesta:any=[];
    if(confirm("Desea eliminar pregunta?")){
      this.preguntasService.deletePregunta(id).subscribe(
      res=>{
        respuesta = res;
        console.log(res);
        
      }
      ,err => console.error(err)
    );
      alert(respuesta);
    }
    
  }
  updatePregunta(id:string){

    
    var txtAreaPregunta = (document.getElementById("txtPregunta"+id)) as HTMLTextAreaElement;
    this.pregunta.PREGUNTA = txtAreaPregunta.value;

    var selectRegion = (document.getElementById("slcEncuesta"+id)) as HTMLSelectElement;
    this.pregunta.id_encuesta= selectRegion.value;
    delete this.pregunta.id;

    this.preguntasService.updatePregunta(id,this.pregunta).subscribe(
      res=>{console.log(res)},
      err=>console.error(err)
    );
    this.cancelEditPregunta(id);

  }
  editPregunta(id:string){

    var selectRegion = (document.getElementById("slcEncuesta"+id)) as HTMLSelectElement;
    this.preguntas.id_encuesta= selectRegion.value;
    selectRegion.style.visibility="visible";
    selectRegion.disabled=false;

    var txtEncuesta = (document.getElementById("txtEncuesta"+id)) as HTMLInputElement;
    txtEncuesta.style.visibility="hidden";

    var txtAreaPregunta = (document.getElementById("txtPregunta"+id)) as HTMLTextAreaElement;
    txtAreaPregunta.disabled=false;

    var btn = (document.getElementById("btnE"+id)) as HTMLButtonElement;
    btn.disabled = true;
    btn = (document.getElementById("btnU"+id)) as HTMLButtonElement;
    btn.disabled=false;
    btn = (document.getElementById("btnC"+id)) as HTMLButtonElement;
    btn.disabled=false;

  }
  cancelEditPregunta(id:string){
 var selectRegion = (document.getElementById("slcEncuesta"+id)) as HTMLSelectElement;
    this.preguntas.id_encuesta= selectRegion.value;
    selectRegion.style.visibility="hidden";

    var txtEncuesta = (document.getElementById("txtEncuesta"+id)) as HTMLInputElement;
    txtEncuesta.style.visibility="visible";
    
    var txtAreaPregunta = (document.getElementById("txtPregunta"+id)) as HTMLTextAreaElement;
    txtAreaPregunta.disabled=true;

    var btn = (document.getElementById("btnE"+id)) as HTMLButtonElement;
    btn.disabled = false;
    btn = (document.getElementById("btnU"+id)) as HTMLButtonElement;
    btn.disabled=true;
    btn = (document.getElementById("btnC"+id)) as HTMLButtonElement;
    btn.disabled=true;

  }

}
