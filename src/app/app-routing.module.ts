import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserListComponent } from './user/user-list/user-list.component';


const routes: Routes = [
  {path: "", component: UserProfileComponent,
  children:[
    {path: "user-list", component: UserListComponent}
  ]
}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
  ],
  exports: [RouterModule]

})

export class AppRoutingModule { }
