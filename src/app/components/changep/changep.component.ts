import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../service/user-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-changep',
  templateUrl: './changep.component.html',
  styleUrls: ['./changep.component.css']
})
export class ChangepComponent implements OnInit {
  public changeGroup: FormGroup;
  emailPattern:any=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  constructor(private builder: FormBuilder,
              private usuarioservice: UserServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.changeGroup = this.builder.group( {
      correo: [ { value: '', disabled: false }, [ Validators.required,Validators.minLength(5),Validators.pattern(this.emailPattern) ] ],
    });
  }
  onResetForm(){
    this.changeGroup.reset();
  }
  doChange() {
    if(this.changeGroup.valid){
      this.usuarioservice.changePassword({
        correo:this.correo.value
      }).subscribe(response=>{
        if(response.success){
          this.usuarioservice.saveElement('correo',this.correo.value);
          Swal.fire({
            title: `${response.success}`,
            text: `Revisa tu correo en el encontraras el link para hacer el cambio de contraseña`,
            icon: 'info',
            confirmButtonText: 'Ok'
          })
        }else{
          Swal.fire({
            title: `Error`,
            text: `${response.error}`,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        }
      })
    }else{
      console.log('formulario invalido');
    }
  }
  get correo(){return this.changeGroup.get('correo');}

}
