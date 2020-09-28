import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { PetHomeComponent } from './component/pet-home/pet-home.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { PetHouseService } from './service/pet-house.service';
import { HttpClientModule } from '@angular/common/http';
import { PetCreateComponent } from './component/pet-create/pet-create.component';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    AppComponent,
    PetHomeComponent,
    SidebarComponent,
    PetCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    ProgressSpinnerModule
  ],
  providers: [PetHouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
