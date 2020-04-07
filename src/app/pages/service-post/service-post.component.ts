import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Shared/GP.Service/service.service';
import { Router } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-service-post',
  templateUrl: './service-post.component.html',
  styleUrls: ['./service-post.component.css']
})
export class ServicePostComponent implements OnInit {
today = new Date() ;
  constructor(private servService : ServiceService , private router : Router , private fb : FormBuilder) { }

  ngOnInit(): void {
    this.servService.initializeFormForPost();
        this.servService.form = this.fb.group({
      idService:  [null],
      labelService:  [null, Validators.required]
    })
  }
  onSubmit(){
    debugger
    this.servService.form.controls.idService.setValue("00000000-0000-0000-0000-000000000000") ;
    this.servService.insertService().subscribe(data=>{
        console.log(data);
    },error=>{
      console.log(error);
    });
  }
}
