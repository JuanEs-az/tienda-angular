//Modulos y providers
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutingProviders , routing } from './app.routing'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
//Componentes
import { AppComponent } from './app.component';
import { ZapatillaComponent } from './zapatilla/zapatilla.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';

@NgModule({
  declarations: [
    AppComponent,
    ZapatillaComponent,
    HomeComponent,
    ExternoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
