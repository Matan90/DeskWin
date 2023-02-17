import { PageNotFoundComponent } from './Layouts/layout/page-not-found/page-not-found.component';
import { DeskComponent } from './Components/Desk/desk/desk.component';
import { RegistrationComponent } from './Components/Registration/registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "/Registration", pathMatch: "full" },
  { path: 'Registration', component: RegistrationComponent },
  { path: 'Desk', component: DeskComponent },
  { path: 'NotFound', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
