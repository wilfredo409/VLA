import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GrupoComponent } from './grupo/grupo.component';
import { HttpClientModule } from '@angular/common/http';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { CursoComponent } from './curso/curso.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GrupoComponent,
    EstudianteComponent,
    ProfesorComponent,
    CursoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
