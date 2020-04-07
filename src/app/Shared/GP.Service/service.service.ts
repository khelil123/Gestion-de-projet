import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from './service.model';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  listService : Service[];
  service : Service ;
  form = new FormGroup({
    idService : new FormControl(""),
    labelService: new FormControl(""),
  });
  initializeFormForEdit(service: Service) {
    this.form.setValue({
      idService: service.idService,
      labelService: service.labelService,
    });
  }
  initializeFormForPost() {
    this.form.setValue({
      idService: '00000000-0000-0000-0000-000000000000',
      labelService: '',
    });
  }
  constructor(private http: HttpClient) { }

  getServices(){
    return this.http.get(environment.GestionProjetServiceApi + "Service") ;
  }
  DeleteService(idService) {
    return this.http
      .delete(environment.GestionProjetServiceApi + "Service/" + idService,
        { responseType: "text" });
  }
  putService() {
    return this.http
      .put(
        environment.GestionProjetServiceApi + "Service/" + this.form.controls.idService.value,
        this.form.value,
        { responseType: "text" }
      );
  }
  insertService() {
    return this.http
      .post(
         "http://localhost:3830/api/Service",
        this.form.value,
        { responseType: "text" }
      );
  }
}
