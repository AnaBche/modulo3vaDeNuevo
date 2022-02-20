import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentesCurriculum/encabezado/encabezado.component';
import { PortadaComponent } from './componentesCurriculum/portada/portada.component';
import { AcercaDeComponent } from './componentesCurriculum/acerca-de/acerca-de.component';
import { ExperienciaYeducacionComponent } from './componentesCurriculum/experiencia-yeducacion/experiencia-yeducacion.component';
import { HabilidadesComponent } from './componentesCurriculum/habilidades/habilidades.component';
import { ProyectosComponent } from './componentesCurriculum/proyectos/proyectos.component';
import { ProgresoComponent } from './componentesCurriculum/progreso/progreso.component';
import {ServiCurriculumService} from './servicios/servi-curriculum.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PortadaComponent,
    AcercaDeComponent,
    ExperienciaYeducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ProgresoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
