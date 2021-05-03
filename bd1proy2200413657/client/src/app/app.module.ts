import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { DataService } from './services/data.service';
import { PaisComponent } from './components/pais/pais.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { SelectFormComponent } from './components/select-form/select-form.component';
import { PaisListComponent } from './components/pais-list/pais-list.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DataListComponent,
    PaisComponent,
    PreguntasComponent,
    SelectFormComponent,
    PaisListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
