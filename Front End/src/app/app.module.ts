import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { EducacionComponent } from './educacion/educacion.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillsComponent } from './skills/skills.component';

import { PiterService } from './piter.service';

import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BannerComponent,
    EducacionComponent,
    FooterComponent,
    HeaderComponent,
    ProyectosComponent,
    SkillsComponent,
    
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
