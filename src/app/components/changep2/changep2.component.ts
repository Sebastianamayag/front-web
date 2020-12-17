import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../service/user-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-changep2',
  templateUrl: './changep2.component.html',
  styleUrls: ['./changep2.component.css']
})
export class Changep2Component implements OnInit {
  public changeForm:FormGroup;
  constructor(private builder: FormBuilder,
              private usuarioservice: UserServiceService,
              private router: Router) { }
  correou="";
  ngOnInit(): void {
    this.correou=this.usuarioservice.getElement('correo');
    console.log(this.correou);
    if(this.correou==null){
      this.router.navigate(['']);
    }else{
      this.changeForm = this.builder.group( {
        contrasena: [ { value: '', disabled: false }, [ Validators.required ,Validators.minLength(8)] ],
        repetirContrasena: [ { value: '', disabled: false }, [ Validators.required,Validators.minLength(8) ] ]
      });
    }
  }
  onResetForm(){
    this.changeForm.reset();
  }
  doChange(){
    if(this.changeForm.valid){
      if(this.contrasena.value!=this.repetirContrasena.value){
        Swal.fire({
          title: 'Error',
          text: 'El campo de Contraseña y de repetir contraseña deben coincidir',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
        return;
      }else{
        this.usuarioservice.changePassword2({
          correo:this.correou,
          contraseña:this.contrasena.value
        }).subscribe(response=>{
          if(response.success){
            Swal.fire({
              title: 'Cambio de contraseña exitoso',
              text: `${response.success}`,
              icon: 'success',
              confirmButtonText: 'Ok'
            });
            this.onResetForm();
            this.router.navigate(['/user/login']);
            this.usuarioservice.delElement('correo');
          }
        })
      }
    }else{
      console.log('formulario invalido');
    }
  }
  get contrasena(){return this.changeForm.get('contrasena');}
  get repetirContrasena(){return this.changeForm.get('repetirContrasena');}

}
