import { Routes, RouterModule } from '@angular/router';
import { ResetpasswordPageComponent } from './components/resetpassword-page/resetpassword-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './components/login-page/login-page.component';

 export const routes: Routes = [
    {
        path: 'ResetPassword',
        component: ResetpasswordPageComponent
    },
    {
        path: 'RegisterPage',
        component: RegisterPageComponent
    },
    {
        path: 'LandingPage',
        component: LandingPageComponent
    },
    {
        path: 'LoginPage',
        component:  LoginPageComponent 
    },
    {
        path: '',
        component:  AppComponent
    }
];

@NgModule({
    imports: [
    RouterModule,
    RouterModule.forRoot(routes)
   // other imports here
   ],
   exports: [RouterModule]
})
export class AppRoutingModule { }
