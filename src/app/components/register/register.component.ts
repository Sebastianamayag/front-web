import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../service/user-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerGroup: FormGroup;
  emailPattern:any=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  constructor(private builder: FormBuilder,
              private usuarioservice: UserServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.registerGroup = this.builder.group( {
      apellidos: [ { value: '', disabled: false }, [ Validators.required,Validators.minLength(5) ] ],
      nombre: [ { value: '', disabled: false }, [ Validators.required,Validators.minLength(5) ] ],
      correo: [ { value: '', disabled: false }, [ Validators.required,Validators.minLength(5),Validators.pattern(this.emailPattern) ] ],
      usuario: [ { value: '', disabled: false }, [ Validators.required,Validators.minLength(5) ] ],
      contrasena: [ { value: '', disabled: false }, [ Validators.required ,Validators.minLength(8)] ],
      repetirContrasena: [ { value: '', disabled: false }, [ Validators.required,Validators.minLength(8) ] ],
    });
  }

  onResetForm(){
    this.registerGroup.reset();
  }

  doRegister(){
    if(this.registerGroup.valid){
      if(this.registerGroup.get('contrasena').value!=this.registerGroup.get('repetirContrasena').value){
        Swal.fire({
          title: 'Error',
          text: 'El campo de Contraseña y de repetir contraseña deben coincidir',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
        return;
      }
      this.usuarioservice.registerUser({
        apellido:this.apellidos.value,
        nombre:this.nombre.value,
        correo:this.correo.value,
        contraseña:this.contrasena.value,
        nomUsuario:this.usuario.value
      }).subscribe(response=>{
          console.log(response);
          if(response.success){
            Swal.fire({
              title: 'Bienvenido',
              text: `${response.mensaje}`,
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            this.onResetForm();
            this.router.navigate(['/user/login']);
          }else{
            Swal.fire({
              title: 'Error',
              text: `${response.error}`,
              icon: 'error',
              confirmButtonText: 'Ok'
            })
          }
      })
    }else{
      console.log('no valido')
    }
  }
  get apellidos(){return this.registerGroup.get('apellidos');}
  get nombre(){return this.registerGroup.get('nombre');}
  get correo(){return this.registerGroup.get('correo');}
  get contrasena(){return this.registerGroup.get('contrasena');}
  get repetirContrasena(){return this.registerGroup.get('repetirContrasena');}
  get usuario(){return this.registerGroup.get('usuario');}
}
