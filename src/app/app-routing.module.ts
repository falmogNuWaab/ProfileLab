import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayProfileComponent } from './display-profile/display-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes : Routes = [
  {path: 'edit', component: EditProfileComponent},
  {path: 'display', component: DisplayProfileComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
