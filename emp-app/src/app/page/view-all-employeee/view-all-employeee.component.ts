import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-view-all-employeee',
  imports: [HttpClientModule,FormsModule,CommonModule,NavbarComponent],
  templateUrl: './view-all-employeee.component.html',
  styleUrl: './view-all-employeee.component.css'
})
export class ViewAllEmployeeeComponent {

  public employeeList: any;

  
  constructor(private http: HttpClient) {
    this.loadEmployeeTable();
  }

  loadEmployeeTable() {
    this.http.get("http://localhost:8090/emp-controller/get-all").subscribe(res => {
      this.employeeList = res;
      console.log(res);
    })
  }
  deleteEmployee(employee:any){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.http.delete(`http://localhost:8081/emp-controller/delete-emp/${employee.id}`,{responseType:'text'}).subscribe(res=>{
          this.loadEmployeeTable()
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          console.log(res);
        })
        console.log(employee);

        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  }

  public seleccteedEmployee : any ={
    "id": null,
    "Name": null,
    "Email": null,
    "Department": null,
    "CreatedAt": null,
    "UpdatedAt": null
  };
   

  updateEmployee(employee: any){
     
    if(employee!=null){
      this.seleccteedEmployee = employee;
    }

    console.log(employee);
  }

  saveUpdateEmployee(){

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");

        this.http.put("http://localhost:8081/emp-controller/update-employee",this.seleccteedEmployee).subscribe(res=>{
          console.log("update!");
        })

      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
      
  }


}
