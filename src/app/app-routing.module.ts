import { TaskListComponent } from './modules/task/task-list/task-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './modules/auth/sign-up/sign-up.component';
import { AuthGuard } from './core/guard/auth.guard';
import { AboutComponent } from './modules/about/about/about.component';

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: '', component: TaskListComponent, canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
