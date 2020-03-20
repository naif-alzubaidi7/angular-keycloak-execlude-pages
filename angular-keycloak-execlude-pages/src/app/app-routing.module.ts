import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './components/general/general.component';
import { AppAuthGuard } from './app.authguard';
import { SecureComponent } from './components/secure/secure.component';


const routes: Routes = [
  { path: '', redirectTo: '/general', pathMatch: 'full' },
  { path: 'general', component: GeneralComponent  },
  { path: 'general', component: SecureComponent, canActivate: [AppAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AppAuthGuard]
})
export class AppRoutingModule { }
