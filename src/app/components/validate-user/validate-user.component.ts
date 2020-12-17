import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../../service/user-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-validate-user',
  templateUrl: './validate-user.component.html',
  styleUrls: ['./validate-user.component.css']
})
export class ValidateUserComponent implements OnInit {

  constructor(private activated:ActivatedRoute,private usuarioservice: UserServiceService,private router: Router) { }
  token="";
  verificacion="";
  ngOnInit(): void {
    this.token=this.activated.snapshot.params.id;
    console.log(this.token);
    this.usuarioservice.validateUser({
      token:this.token
    }).subscribe(response=>{
      console.log(response)
      if(response.name){
        document.body.classList.add('bg-email-correct');
        this.verificacion="Verificado";
      }else{
        document.body.classList.add('bg-email-incorrect');
        this.verificacion="No Verificado";
      }
    })
  }

}
