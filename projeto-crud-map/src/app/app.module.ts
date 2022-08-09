import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { FuncionarioMapComponent } from './components/funcionario-map/funcionario-map.component';
import { HomeService } from './components/home/home.service';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  //A criação dos components vem automaticamente para cá
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FuncionarioMapComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
