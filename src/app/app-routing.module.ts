import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PetHomeComponent } from './component/pet-home/pet-home.component';
import { PetCreateComponent } from './component/pet-create/pet-create.component';



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot([
    { path: '', component: PetHomeComponent },
    { path: 'create', component: PetCreateComponent }])
    
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
