import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private url:string="http://localhost:8080/Video/";
  constructor(private http:Http) { }

  uploadVideo(file:File){
      const fd=new FormData();
      fd.append('file',file,file.name);
      return this.http.post(this.url+'upload/video',fd);
  }

  getStream(){
    let URL=this.url+'video/'+4+'/bytes=0-';
    return this.http.get(URL);
  }
}
