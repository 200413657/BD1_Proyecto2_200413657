import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { PaisService } from '../../services/pais.service';
import { PaisModel } from '../../models/PaisModel';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})


export class PaisListComponent implements OnInit {
  paises:any=[];
  regiones:any=[];
  pais:PaisModel={
    nombre:'',
    poblacion:'',
    area:'',
    capital:'',
    id_region:''
  };  
  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises().subscribe(
      res=>{this.paises=res},
      err=>console.log(err)
    );
    this.paisService.getRegion().subscribe(
      res=>{this.regiones=res;},
      err=>console.error(err)
    );

      
  }

  deletePais(id:string){
    var respuesta:any=[];
    if(confirm("Desea eliminar pais?")){
      this.paisService.delete(id).subscribe(
      res=>{
        respuesta = res;
        console.log(res);
        
      }
      ,err => console.error(err)
    );
      alert(respuesta);
    }
    
  }

  updatePais(id:string){
    //console.log(pais);
    var elemento = (document.getElementById("nombre"+id)) as HTMLInputElement;
    this.pais.nombre = elemento.value;
    elemento = (document.getElementById("poblacion"+id)) as HTMLInputElement;
    this.pais.poblacion = elemento.value;
    elemento = (document.getElementById("area"+id)) as HTMLInputElement;
    this.pais.area = elemento.value;
    elemento = (document.getElementById("capital"+id)) as HTMLInputElement;
    this.pais.capital = elemento.value;
    var selectRegion = (document.getElementById("slcRegion"+id)) as HTMLSelectElement;
    
    this.pais.id_region = selectRegion.value;
  
 
  this.paisService.update(id,this.pais).subscribe(
    res=>{console.log(res)},
    err=> console.error(err)
  );


    this.cancelarEdicionPais(id);
  }

  editarPais(id:string){
    var elemento = (document.getElementById("nombre"+id)) as HTMLInputElement;
    elemento.disabled=false;
    elemento = (document.getElementById("poblacion"+id)) as HTMLInputElement;
    elemento.disabled=false;
    elemento = (document.getElementById("area"+id)) as HTMLInputElement;
    elemento.disabled = false;
    elemento = (document.getElementById("capital"+id)) as HTMLInputElement;
    elemento.disabled = false;
    var btn = (document.getElementById("btnE"+id)) as HTMLButtonElement;
    btn.disabled = true;
    btn = (document.getElementById("btnU"+id)) as HTMLButtonElement;
    btn.disabled=false;
    btn = (document.getElementById("btnC"+id)) as HTMLButtonElement;
    btn.disabled=false;

    elemento = (document.getElementById("txtRegion"+id)) as HTMLInputElement;
    elemento.style.visibility = "hidden";

    var selectRegion = (document.getElementById("slcRegion"+id)) as HTMLSelectElement;
    selectRegion.style.visibility="visible";
    selectRegion.disabled=false;
    var hdnRegion = (document.getElementById("hdn"+id)) as HTMLInputElement;
    selectRegion.value= hdnRegion.value;

    
  }

  cancelarEdicionPais(id:string){
    var elemento = (document.getElementById("nombre"+id)) as HTMLInputElement;
    elemento.disabled=true;
    elemento = (document.getElementById("poblacion"+id)) as HTMLInputElement;
    elemento.disabled=true;
    elemento = (document.getElementById("area"+id)) as HTMLInputElement;
    elemento.disabled = true;
    elemento = (document.getElementById("capital"+id)) as HTMLInputElement;
    elemento.disabled = true;
    var btn = (document.getElementById("btnE"+id)) as HTMLButtonElement;
    btn.disabled = false;
    btn = (document.getElementById("btnU"+id)) as HTMLButtonElement;
    btn.disabled=true;
    btn = (document.getElementById("btnC"+id)) as HTMLButtonElement;
    btn.disabled=true;


    
    elemento = (document.getElementById("txtRegion"+id)) as HTMLInputElement;
    elemento.style.visibility = "visible";

    var selectRegion = (document.getElementById("slcRegion"+id)) as HTMLSelectElement;
    selectRegion.style.visibility="hidden";
    selectRegion.disabled=false;
  }
}
