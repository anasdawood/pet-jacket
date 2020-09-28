import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PetHomeComponent } from './component/pet-home/pet-home.component';
import { PetCreateComponent } from './component/pet-create/pet-create.component';
import { JacketResultComponent } from './component/jacket-result/jacket-result.component';



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot([
    { path: '', component: PetHomeComponent },
    { path: 'create', component: PetCreateComponent },
    { path: 'weather', component: JacketResultComponent }])
    
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
