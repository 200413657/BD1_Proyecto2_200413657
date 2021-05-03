import { Component, ElementRef, OnInit,Renderer2, ViewChild} from '@angular/core';
//import { DataModel } from 'src/app/models/DataModel';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {
  datos: any=[];
  datos2: any=[];
  datos3: any =[];
  datos4: any = [];
  datos5: any = [];
  datos6: any = [];
  datos7: any = [];
  datos8: any = [];
  datos9: any = [];
  datos10: any = [];
  datos11: any = [];
  datos12: any = [];
  datos13: any = [];
  datos14: any = [];
  datos15: any = [];
  datos16: any = [];
  datos17: any = [];
  datos18: any = [];
  datos19: any = [];
  datos20: any = [];
  constructor(private dataService: DataService,private renderer:Renderer2) { }

  ngOnInit(): void {
    this.dataService.getData('1').subscribe(
      res => {this.datos = res;}
      ,err => console.log(err)
    );
    this.dataService.getData('2').subscribe(
      res => {this.datos2 = res;}
      ,err => console.log(err)
    );
    
    this.dataService.getData('3').subscribe(
      res => {this.datos3 = res;}
      ,err => console.log(err)
    );
    
    this.dataService.getData('4').subscribe(
      res => {this.datos4 = res;}
      ,err => console.log(err)
    );
    
    this.dataService.getData('5').subscribe(
      res => {this.datos5 = res;}
      ,err => console.log(err)
    );
    
    this.dataService.getData('6').subscribe(
      res => {this.datos6 = res;}
      ,err => console.log(err)
    );
    
    this.dataService.getData('7').subscribe(
      res => {this.datos7 = res;}
      ,err => console.log(err)
    );
    
    this.dataService.getData('8').subscribe(
      res => {this.datos8 = res;}
      ,err => console.log(err)
    );
    
    this.dataService.getData('9').subscribe(
      res => {this.datos9 = res;}
      ,err => console.log(err)
    );
    
    this.dataService.getData('10').subscribe(
      res => {this.datos10 = res;}
      ,err => console.log(err)
    );
    
    this.dataService.getData('11').subscribe(
      res => {this.datos11 = res;}
      ,err => console.log(err)
    );
    
    this.dataService.getData('12').subscribe(
      res => {this.datos12 = res;}
      ,err => console.log(err)
    );
    
    this.dataService.getData('13').subscribe(
      res => {this.datos13 = res;}
      ,err => console.log(err)
    );
    
    this.dataService.getData('14').subscribe(
      res => {this.datos14 = res;}
      ,err => console.log(err)
    );
    
    this.dataService.getData('15').subscribe(
      res => {this.datos15 = res;}
      ,err => console.log(err)
    );
    
    this.dataService.getData('16').subscribe(
      res => {this.datos16 = res;}
      ,err => console.log(err)
    );
    
    this.dataService.getData('17').subscribe(
      res => {this.datos17 = res;}
      ,err => console.log(err)
    );
    
    this.dataService.getData('18').subscribe(
      res => {this.datos18 = res;}
      ,err => console.log(err)
    );
    
    this.dataService.getData('19').subscribe(
      res => {this.datos19 = res;}
      ,err => console.log(err)
    );
    
    this.dataService.getData('20').subscribe(
      res => {this.datos20 = res;}
      ,err => console.log(err)
    );
    
    
    

  }
 
}
