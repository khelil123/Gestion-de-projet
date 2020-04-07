import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SousService } from './sous-service.model';
import { FormGroup, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SousServiceService {
  listSousService : SousService[];
  sousService : SousService ;

  form = new FormGroup({
    idSousService : new FormControl(""),
    labelSousService: new FormControl(""),
    fkService: new FormControl(""),
  });
  initializeFormForEdit(sousService: SousService) {
    this.form.setValue({
      idSousService: sousService.idSousService,
      labelSousService: sousService.labelSousService,
      fkService : sousService.fkService
    });
  }
  initializeFormForPost() {
    this.form.setValue({
      idSousService: '00000000-0000-0000-0000-000000000000',
      labelSousService: '',
      fkService : ''
    });
  }
  constructor(private http : HttpClient) { }

  getSousServices(){
    return this.http.get(environment.GestionProjetServiceApi + "SousService") ;
  }
  DeleteSousService(idSousService) {
    return this.http
      .delete(environment.GestionProjetServiceApi + "SousService/" + idSousService,
        { responseType: "text" });
  }
  putSousService() {
    return this.http
      .put(
        environment.GestionProjetServiceApi + "SousService/" + this.form.controls.idSousService.value,
        this.form.value,
        { responseType: "text" }
      );
  }
  insertSousService() {
    return this.http
      .post(
        environment.GestionProjetServiceApi + "SousService",
        this.form.value,
        { responseType: "text" }
      );
  }
}
