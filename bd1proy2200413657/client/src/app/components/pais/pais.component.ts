import { Component, HostBinding, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { PaisService } from '../../services/pais.service';
import { PaisModel } from '../../models/PaisModel';
@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {
@HostBinding('class') classes='row';
pais:PaisModel={
  nombre:'',
  poblacion:'',
  area:'',
  capital:'',
  id_region:''
};  

regiones:any=[];
constructor(private paisService:PaisService) { }
  
  
  ngOnInit(): void {
    this.paisService.getRegion().subscribe(
      res=>{this.regiones=res;},
      err=>console.error(err)
    );
  }
  saveNewPais(){
    var a = (document.getElementById("idRegion")) as HTMLSelectElement;
    var e = a.selectedIndex;
    this.pais.id_region= e.toString();
    console.log(this.pais);
    this.paisService.savePais(this.pais).subscribe(
      res=>{console.log(res)},
      err=> console.error(err)
    );
  }

  

}
