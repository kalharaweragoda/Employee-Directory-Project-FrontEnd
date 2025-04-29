import { Routes } from '@angular/router';
import { ManageEmpComponent } from './page/manage-emp/manage-emp.component';
import { ViewAllEmployeeeComponent } from './page/view-all-employeee/view-all-employeee.component';
import { AdminSigninComponent } from './page/admin-signin/admin-signin.component';

export const routes: Routes = [
    {
        path:"add-employee",
        component:ManageEmpComponent
    },
    {
        path:"view-all-employee",
        component:ViewAllEmployeeeComponent
    },
    {
        path:"user-signIn",
        component:AdminSigninComponent
    }
];
