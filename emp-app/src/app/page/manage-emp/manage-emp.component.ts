import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../navbar/navbar.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-emp',
  imports: [FormsModule,HttpClientModule,CommonModule,NavbarComponent],
  templateUrl: './manage-emp.component.html',
  styleUrl: './manage-emp.component.css'
})
export class ManageEmpComponent {

  public employeeObj ={
    Name:"",
    Email:"",
    Department:"",
    CreatedAt:"",
    UpdatedAt:""
  }

  constructor(private http:HttpClient){}
  
  addEmployee(){
    this.http.post("http://localhost:8081/emp-controller/add-employee",this.employeeObj).subscribe(
      (data) =>{
        Swal.fire({
          title: "Employee add!",
          text: "You clicked the button!",
          icon: "success"
        });
        
      }
    )
  }


}
