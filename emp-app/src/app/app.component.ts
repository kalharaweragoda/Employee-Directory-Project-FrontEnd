import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ManageEmpComponent } from './page/manage-emp/manage-emp.component';
import { ViewAllEmployeeeComponent } from './page/view-all-employeee/view-all-employeee.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,ManageEmpComponent,ViewAllEmployeeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emp-app';
}
