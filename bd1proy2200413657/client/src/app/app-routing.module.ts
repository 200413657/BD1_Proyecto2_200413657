import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataListComponent } from './components/data-list/data-list.component';
import { PaisComponent} from './components/pais/pais.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { PaisListComponent } from './components/pais-list/pais-list.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/datos'
    ,pathMatch: 'full'
  },
  {
    path:'datos'
    , component: DataListComponent
  },
  {path:'pais/add'
  ,component:PaisComponent
  },
  {
    path:'preguntas/add'
    ,component:PreguntasComponent
  },
  {
    path:'paises'
    ,component:PaisListComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
