import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../service/user-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private usuarioservice: UserServiceService,
              private router: Router) { }
  token="";
  ngOnInit(): void {
    this.token=this.usuarioservice.getElement('token');
    if(this.token==null){
      this.router.navigate(['']);
    }
  }

}
