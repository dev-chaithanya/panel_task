import { Routes, RouterModule } from '@angular/router';
import { ResetpasswordPageComponent } from './components/resetpassword-page/resetpassword-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminDetailsComponent } from './components/admin-details/admin-details.component';
import { SuperAdminDetailsComponent } from './components/super-admin-details/super-admin-details.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { ReportPageComponent } from './components/report-page/report-page/report-page.component';

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
        redirectTo: '/LoginPage', 
        pathMatch: 'full'
    },
    {
        path: 'Dashboard',
        component:  DashboardPageComponent 
    },
    {
        path: 'Profile',
        component: ProfileComponent
    },
    {
        path: 'AdminDetailsPage',
        component: AdminDetailsComponent
    },
    {
        path: 'SuperAdminDetailsPage',
        component: SuperAdminDetailsComponent
    },
    {
        path: 'EmployeeDetailsPage',
        component: EmployeeDetailsComponent
    },
    {
        path: 'ReportPage',
        component: ReportPageComponent
    },

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

