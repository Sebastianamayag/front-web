import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../service/user-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'; 
@Component({
  selector: 'app-view-entry',
  templateUrl: './view-entry.component.html',
  styleUrls: ['./view-entry.component.css']
})
export class ViewEntryComponent implements OnInit {

  constructor(private activated:ActivatedRoute,
              private usuarioservice: UserServiceService,
              private router: Router) { }
  token="";
  titulo="";
  cuerpo="";
  ngOnInit(): void {
    
    this.token=this.usuarioservice.getElement('token');
    if(this.token==""){
      this.router.navigate( [''] );
    }else{
      const title=this.activated.snapshot.params.id;
      this.usuarioservice.searchEntry({
        title:title
      }).subscribe(response=>{
        console.log(response);
        this.titulo=response.title;
        this.cuerpo=response.cuerpo;
      })
    }
  }

}
