import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../service/user-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public searchGroup: FormGroup;
  constructor(private builder: FormBuilder,
              private usuarioservice: UserServiceService,
              private router: Router) { }
  token="";
  ngOnInit(): void {
    this.token=this.usuarioservice.getElement('token');
    if(this.token==null){
      this.router.navigate(['']);
    }else{
      this.searchGroup = this.builder.group( {
        title: [ { value: '', disabled: false }, [ Validators.required]  ],
      });
    }
  }

  doOut(){
    this.usuarioservice.delElement('token');
    this.router.navigate(['']);
  }

  doUpdate(){
    console.log('hola');
  }

  doSearch(){
    if(this.searchGroup.valid){
      this.usuarioservice.searchEntry({
        title:this.searchGroup.get('title').value
      }).subscribe(response=>{
        if(response.error){
          Swal.fire({
            title: 'Error',
            text: `${response.error}`,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }else{
          this.router.navigate(['/view/entry/',this.searchGroup.get('title').value]);
        }
      })
      
    }else{
      console.log('No valido')
    }
  }

}
