import { Injectable } from '@angular/core';
import { DataService } from '../data/data-request.service';
import { environment, ApiPaths } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherProfileService {

  baseUrl = environment.baseUrl;

  constructor(public dataService: DataService) {
  }

  postTeacherProfile(data) {
    let url = `${this.baseUrl}/${ApiPaths.Teacher}`;
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

  getTeacherProfile(id) {
    let url = `${this.baseUrl}/${ApiPaths.Teacher}/${id}`;
    const req = {
      url: url
    };

    return this.dataService.get(req);
  }


}

