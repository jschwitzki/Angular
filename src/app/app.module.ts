import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EstadoComponent } from './views/estado/estado.component';
import { AppRoutes} from './app.routes';
import { CidadeComponent } from './views/cidade/cidade.component';
import { PessoaComponent } from './views/pessoa/pessoa.component';
import { EstadoService } from './services/estado-service';
import { CidadeService } from './services/cidade-service';
import { Tab_CestService } from './services/tab_cest-service';
import { HttpClientModule } from '@angular/common/http';

//exigidos pelo primeng
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//primeng
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { PanelModule } from 'primeng/panel';
import { HomeComponent } from './views/home/home.component';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { EstadoPrimengComponent } from './views/estado-primeng/estado-primeng.component';
import { CidadePrimengComponent } from './views/cidade-primeng/cidade-primeng.component';
import { Tab_CestComponent } from './views/tab_cest/tab_cest.component';
import { MegaMenuModule } from 'primeng/megamenu';
import {InputTextModule} from 'primeng/inputtext';


//material
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EstadoComponent,
    CidadeComponent,
    HomeComponent,
    PessoaComponent,
    EstadoPrimengComponent,
    CidadePrimengComponent,
    Tab_CestComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    AppRoutes,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToolbarModule,
    AccordionModule,
    PanelModule,
    TableModule,
    VirtualScrollerModule,
    MenuModule,
    MenubarModule,
    MegaMenuModule,
    InputTextModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSliderModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
  ],

  providers: [EstadoService, CidadeService, Tab_CestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
