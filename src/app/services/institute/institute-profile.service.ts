import { Injectable } from '@angular/core';
import { DataService } from '../data/data-request.service';
import { environment, ApiPaths } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstituteProfileService {

  baseUrl = environment.baseUrl;

  constructor(public dataService: DataService) {
  }

  postInstituteProfile(data) {
    let url = `${ApiPaths.Institute}`;
    const req = {
      url: url,
      data: data
    };

    if(!data.identifier){
      return this.dataService.post(req);
    }else{
      return this.dataService.patch(req);
    }
  }

  getInstituteProfile(id) {
    let url = `${ApiPaths.Institute}/${id}`;
    const req = {
      url: url
    };

    return this.dataService.get(req);
  }


}

