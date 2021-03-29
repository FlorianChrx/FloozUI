import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { GroupComponent } from './group/group.component';
import { GroupsComponent } from './groups/groups.component';
import { AuthGuard } from './helpers/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'groups/add', component: GroupsComponent, canActivate: [AuthGuard]},
  {path: 'group/:id', component: GroupComponent, canActivate: [AuthGuard]},
  {path: 'balance/:id', component: BalanceComponent, canActivate: [AuthGuard]},
  {path: 'group/:id/addTransaction', component: TransactionsComponent, canActivate: [AuthGuard]},
  {path: 'group/:id/addUser', component: UserComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
