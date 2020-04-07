import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ServiceService } from 'src/app/Shared/GP.Service/service.service';
import { Service } from 'src/app/Shared/GP.Service/service.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  modelRef:BsModalRef;

 
  @ViewChild("edit")
  edit : TemplateRef<any> ;
  today = new Date() ;
  constructor(private servService:ServiceService,private modalService:BsModalService) { }

  ngOnInit(): void {
    this.getServices();
  }
  getServices(){
    this.servService.getServices().subscribe(data=>{
      this.servService.listService=data as Service[];
    })
  }
  onDelete(idService){
    if (confirm("Vous êtes sûr de vouloir supprimer ce service")) {
      this.servService.DeleteService(idService).subscribe(
        res => {
          if(res == "Delete Done"){
            this.getServices();
          }
        },
        err => {
          console.log(err);
          });
     }
  }
  onEdit(service:Service){
    console.log(service)
    this.servService.initializeFormForEdit(service);
    this.modelRef = this.modalService.show(this.edit,{
      class : 'modal-dialog-centered'
    });
  }
  onModifier(){
    if(this.servService.form.controls.idService.value != "00000000-0000-0000-0000-000000000000")
    {
      this.servService.putService().subscribe(data=>{
        if(data == "Update Done"){
          this.getServices();
          this.modelRef.hide();
        }
      })
    }
  }
}
