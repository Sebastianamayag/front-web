import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../service/user-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public LoginGroup: FormGroup;
  emailPattern:any=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  constructor(private builder: FormBuilder,
              private usuarioservice: UserServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.LoginGroup = this.builder.group( {
      correo: [ { value: '', disabled: false }, [ Validators.required,Validators.minLength(5),Validators.pattern(this.emailPattern) ] ],
      contrasena: [ { value: '', disabled: false }, [ Validators.required ,Validators.minLength(8)] ]
    });
  }
  onResetForm(){
    this.LoginGroup.reset();
  }
  doLogin() {
    if(this.LoginGroup.valid){
      this.onResetForm();
      this.router.navigate(['/view/admin/entry']);
    }else{
      console.log('formulario invalido')
    }
  }
  get correo(){return this.LoginGroup.get('correo');}
  get contrasena(){return this.LoginGroup.get('contrasena');}

}
