import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from 'src/app/guards/can-activate.guard';
import { LoginComponent } from 'src/app/login/login.component';
import { LogoutComponent } from 'src/app/logout/logout.component';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  { path: 'customers', component:CustomersComponent , canActivate: [CanActivateGuard]},
  { path: 'login', component: LoginComponent },
   { path: 'logout', component: LogoutComponent },
   { path: '', redirectTo: 'customers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
